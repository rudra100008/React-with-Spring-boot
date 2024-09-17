
import axios from 'axios';
import { Button } from 'reactstrap';
import { Card, CardBody, CardSubtitle, CardText } from "reactstrap";
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Courses({course,onDelete})
{
    const navigate=useNavigate();
    const deleteCourseFromServer=()=>{
        // eslint-disable-next-line react/prop-types
        axios.delete(`${base_url}/courses/`+course.id).then(
            (response)=>{
                console.log(response.data)
                toast.success("Course Deleted SuccessFully")
                // eslint-disable-next-line react/prop-types
                onDelete(course.id)
            },
            (error)=>{
                console.log(error)
                toast.error("Fail to delete course")
            }
        )
    }
    const handleUpdate=()=>{
        // eslint-disable-next-line react/prop-types
        navigate(`/update/`+course.id)
    }
    return(
        <Card className='max-w-sm  mx-auto my-4 shadow-xl rounded-xl  overflow-hidden'>
            <CardBody className='p-6'>
                <CardSubtitle >
                    {/*  eslint-disable-next-line react/prop-types */}
                    <span className='text-gray-800  mb-2 font-semibold text-xl'>{course.courseTitle}</span>
                </CardSubtitle>
                <CardText >
                   {/*  eslint-disable-next-line react/prop-types */}
                   <span className='text-gray-600 mb-4'> {course.description}</span>
                </CardText>
                <div className='flex justify-center space-x-5'>
                <Button color='danger' onClick={deleteCourseFromServer}  className='px-4 py-2 rounded-xl hover:bg-red-900  hover:scale-105 transition-transform duration-300'>Delete</Button>
                <Button color='primary' onClick={handleUpdate} className='px-4 py-2 rounded-xl hover:bg-blue-900  hover:scale-105 transition-transform duration-300'>Update</Button>
                </div>
            </CardBody>
        </Card>
    )
}