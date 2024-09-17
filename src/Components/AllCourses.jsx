import { useState, useEffect } from "react";
import Courses from "./Courses";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

export default function AllCourses() {
    useEffect(()=>{
        document.title="View Courses"
    },[])
    const [courses, setCourses] = useState([]);

    // const addCourse = () => {
    //     setCourses([
    //         ...courses,
    //         { title: "C course", description: "This course is basic of C " }
    //     ]);
    // };
    //function to call the server and get the data of courses
    const getCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //for success of getting the courses from the server
                toast.success("Courses has been loaded")
                setCourses(response.data);
                console.log(response.data); 
            },
            (error)=>{
                //for getting error 
                
                console.log(error)
                toast.error(`Error!  Failed to load courses`)
            }
        )
    }

    const handleDelete=(id)=>{
       setCourses( courses.filter(courses=>courses.id !==id))// when id matches then it will remove the course form  new array
    }
    useEffect(()=>{
        getCoursesFromServer();
    },[])

    return (
        <div>
            <div className="bg-gray-100 p-3 shadow-lg rounded-lg">
                <h1 className="text-bold text-2xl mb-4 text-center">All courses</h1>
                {
                    courses.length > 0
                        ? courses.map((item,index) => (
                            <Courses
                                key={item.id || index}
                                course={item} 
                                onDelete={handleDelete} 
                            />
                        ))
                        : (
                            <p>No courses available.</p>
                        )
                }
            </div>
        </div>
    );
}
