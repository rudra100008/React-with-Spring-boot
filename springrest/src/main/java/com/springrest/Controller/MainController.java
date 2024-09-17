package com.springrest.Controller;


import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.Entity.Courses;
import com.springrest.Services.CoursesServices;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MainController {
    @Autowired
    private CoursesServices coursesServices;
    
    // @GetMapping("/home")
    // public String home()
    // {
    //     return "<h1 style='color:red;'>This is home page</h1>";
    // }

    //get  all courses
    @GetMapping("/courses")
    public ResponseEntity<List<Courses>> coursesDisplay()
    {
        List<Courses> getAllCourses =this.coursesServices.getAllCourses();
        return ResponseEntity.ok(getAllCourses);
    }
    //get courses by id
    @GetMapping("/courses/{id}")
    public ResponseEntity<Courses> coursesDisplayById(@PathVariable("id") long id)
    {
        Courses courses =this.coursesServices.getCourseById(id);
        if (courses==null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .build();
        }
        return ResponseEntity.ok(courses);
    }
    // save courses in database
    @PostMapping("/courses")
    public ResponseEntity<Courses> saveCoursesHandler(@RequestBody Courses courses)
    {
        Courses savedCourses =this.coursesServices.saveCourses(courses);
        return ResponseEntity.created(URI.create("/courses/"+savedCourses.getId())).body(savedCourses);
       
    }
    //delete courses in database
    @DeleteMapping("/courses/{id}")
    public ResponseEntity<Courses> deleteHandler(@PathVariable("id")long id)
    {
        if (this.coursesServices.deleteCoursesById(id)==null) {
            ResponseEntity.notFound().build();
        }
        this.coursesServices.deleteCoursesById(id);
        return ResponseEntity.noContent().build();
    }
    //update courses in database
    @PutMapping("/courses/{id}")
    public ResponseEntity<Courses> upadteHandler(@PathVariable("id")long id, @RequestBody Courses courses)
    {
        try {
            Courses updatedCourses =this.coursesServices.updateCoursesById(id, courses);
            return ResponseEntity.ok(updatedCourses);   
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
    
    
}
