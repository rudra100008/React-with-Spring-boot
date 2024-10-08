import axios from "axios";
import { Fragment, useEffect,useState } from "react"
import { Button, Form,FormGroup, Input } from "reactstrap"
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

export default function AddCourse() {
    useEffect(()=>{
        document.title="Add courses";
    },[])
    const [course, setcourse] = useState({
        courseTitle:"",
        description:""
    });
    const clearData=()=>{setcourse({
        courseTitle:"",
        description:""
    }) }
    const postCourseToServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                toast.success("Course added Successfully")
                setcourse({id:"",courseTitle:"",description:""})//clear the form after submission
                console.log(response.data)
            },
            (error)=>{
                console.log(error)
                toast.error("Failed to add course")
            }
        )
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        postCourseToServer(course);
    }
    return (
        <Fragment>
            <h1 className="text-center font-bold text-green-400">Fill the course Details:</h1>
            <Form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8 "> 
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
            <Button type="submit" color="success" className="text-white font-semibold transition-transform duration-300 hover:scale-105">Add Course</Button>
            <Button color="warning" onClick={clearData} className="text-white font-semibold transition-transform duration-300 hover:scale-105">Clear</Button>
            </div>
        </Form>
        </Fragment>
    )
}