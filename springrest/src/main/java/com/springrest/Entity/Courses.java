package com.springrest.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Courses {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String courseTitle;
    private String description;
    public Courses()
    {
        super();
    }
    public Courses(long id,String title,String description)
    {
        this.id=id;
        this.courseTitle=title;
        this.description=description;
    }
}
