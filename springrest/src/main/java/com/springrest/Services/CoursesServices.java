package com.springrest.Services;


import java.util.List;

import com.springrest.Entity.Courses;

public interface CoursesServices {
   public Courses saveCourses(Courses courses);
   public Courses getCourseById(long id);
   public List<Courses> getAllCourses();
   public Courses  deleteCoursesById(long id);
   public Courses updateCoursesById( long id,Courses courses);
}
