import { Button } from 'reactstrap';
import { Card, CardBody, CardSubtitle, CardText } from "reactstrap";

// eslint-disable-next-line react/prop-types
export default function Courses({course})
{
    return(
        <Card className='max-w-sm  mx-auto my-4 shadow-xl rounded-xl  overflow-hidden'>
            <CardBody className='p-6'>
                <CardSubtitle >
                    {/*  eslint-disable-next-line react/prop-types */}
                    <p className='text-gray-800  mb-2 font-semibold text-xl'>{course.title}</p>
                </CardSubtitle>
                <CardText >
                   {/*  eslint-disable-next-line react/prop-types */}
                   <p className='text-gray-600 mb-4'> {course.description}</p>
                </CardText>
                <div className='flex justify-center space-x-5'>
                <Button color='danger' className='px-4 py-2 rounded-xl hover:bg-red-900  hover:scale-105 transition-transform duration-300'>Delete</Button>
                <Button color='primary'  className='px-4 py-2 rounded-xl hover:bg-blue-900  hover:scale-105 transition-transform duration-300'>Update</Button>
                </div>
            </CardBody>
        </Card>
    )
}