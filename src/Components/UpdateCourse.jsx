import { Button, Form,FormGroup, Input } from "reactstrap"
import { Fragment, useState} from "react"
import axios from "axios"
import base_url from "../api/bootapi"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
export default function UpdateCourse()
{
    const {id}=useParams();
    const Navigate=useNavigate();
    const [course,setcourse]=useState({
        courseTitle:"",
        description:""
    })
    const putCourseFromServer=()=>{
        // eslint-disable-next-line react/prop-types
        axios.put(`${base_url}/courses/${id}`,course).then(
            (response)=>{
                console.log(response.data);
                toast.success("Course updated Successfully")
                Navigate("/")
            },
            (error)=>{
                console.log(error);
                toast.error("Failed to update course")
            }
        )
    }
    const handleUpdate=(e)=>{
        e.preventDefault();
        putCourseFromServer();
    }
    const clearData=()=>{
        setcourse({
            courseTitle:"",
            description:""
        })
    }
    return (
        <Fragment>
            <h1 className="text-center font-bold text-green-400">Update Course:</h1>
            <Form onSubmit={handleUpdate} className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8 "> 
            <FormGroup className="px-7  ">
                <label htmlFor="title" className="block font-semibold m-1 text-xl text-gray-500">Course Title: </label>
                <Input 
                type="text" 
                name="title" 
                id="title" 
                value={course.courseTitle}
                onChange={(e)=> setcourse({...course , courseTitle: e.target.value})}
                placeholder="Enter your title" />
            </FormGroup>
            <FormGroup className="px-7  mb-1">
                <label htmlFor="description" className="block font-semibold m-1 text-xl text-gray-500">Course Description:</label>
                <Input 
                type="textarea" 
                name="description" 
                id="description" 
                value={course.description}
                onChange={(e)=>setcourse({...course,description:e.target.value})}
                placeholder="Enter your description" 
                className="h-20"/>
            </FormGroup>
            <div className="ml-7 flex justify-between mr-5 ">
            <Button type="submit" color="success" className="text-white font-semibold transition-transform duration-300 hover:scale-105">Update Course</Button>
            <Button color="warning" onClick={clearData} className="text-white font-semibold transition-transform duration-300 hover:scale-105">Clear</Button>
            </div>
        </Form>
        </Fragment>
    )
}