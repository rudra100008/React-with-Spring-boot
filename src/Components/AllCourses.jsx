// import { useState } from "react";
import Courses from "./Courses";

export default function AllCourses()
{
    // const [courses,setCourses]=useState([
    //     {title:"Java course",description:"this course is basic of java "},
    //     {title:"React course",description:"this course is basic of react "},
    //     {title:"Django course",description:"this course is basic of django"},
    //     {title:"C++ course",description:"this course is basic of c++ "}
    // ])
    const courses=[
        {title:"Java course",description:"this course is basic of java "},
        {title:"React course",description:"this course is basic of react "},
        {title:"Django course",description:"this course is basic of django"},
        {title:"C++ course",description:"this course is basic of c++ "}
    ]
    return(
        <div>
            <div className=" bg-gray-100 p-3 shadow-lg rounded-lg">
            <h1 className="text-bold text-2xl mb-4 text-center ">All courses</h1>
            {
                courses.length>0
                ? courses.map((item, index) => <Courses key={index} course={item} />)
                :(
                    <p>No courses available.</p>
                )}
            </div>
        </div>
    )
}