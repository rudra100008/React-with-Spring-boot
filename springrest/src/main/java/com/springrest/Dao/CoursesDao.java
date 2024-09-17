package com.springrest.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springrest.Entity.Courses;

@Repository
public interface CoursesDao extends JpaRepository<Courses,Long> {
    Courses deleteById(long id);
}
