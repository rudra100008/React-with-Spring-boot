package com.springrest.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.Dao.CoursesDao;
import com.springrest.Entity.Courses;

@Service
public class CoursesServicesImpl implements CoursesServices {
    @Autowired
    private CoursesDao coursesDao;

    @Override
    public Courses saveCourses(Courses courses) {
        return this.coursesDao.save(courses);
    }

    @Override
    public Courses getCourseById(long id) {
        return this.coursesDao.findById(id).orElse(null);
    }

    @Override
    public List<Courses> getAllCourses() {
        return this.coursesDao.findAll();
    }

    @Override
    public Courses deleteCoursesById(long id) {
        Courses courses= this.coursesDao.deleteById(id);
        return courses;
    }

    @Override
    public Courses updateCoursesById(long id,Courses courses) 
    {
        courses.setId(id);
         return this.coursesDao.save(courses);
    }
    
    
    
}
