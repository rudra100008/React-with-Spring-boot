import { Fragment } from "react"
import { Button, Form,FormGroup, Input } from "reactstrap"

export default function AddCourse() {
    return (
        <Fragment>
            <h1 className="text-center font-bold text-green-400">Fill the course Details:</h1>
            <Form className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8 "> 
            <FormGroup className="px-7  ">
                <label htmlFor="id" className="block font-semibold m-1 text-xl text-gray-500">Id: </label>
                <Input 
                type="text" 
                name="id" 
                id="id" 
                placeholder="Enter your id" />
            </FormGroup>
            <FormGroup className="px-7  ">
                <label htmlFor="title" className="block font-semibold m-1 text-xl text-gray-500">Course Title: </label>
                <Input 
                type="text" 
                name="title" 
                id="title" 
                placeholder="Enter your title" />
            </FormGroup>
            <FormGroup className="px-7  mb-1">
                <label htmlFor="description" className="block font-semibold m-1 text-xl text-gray-500">Course Description:</label>
                <Input 
                type="textarea" 
                name="description" 
                id="description" 
                placeholder="Enter your description" 
                className="h-20"/>
            </FormGroup>
            <div className="ml-7 flex justify-between mr-5 ">
            <Button color="success" className="text-white font-semibold transition-transform duration-300 hover:scale-105">Add Course</Button>
            <Button color="warning" className="text-white font-semibold transition-transform duration-300 hover:scale-105">Clear</Button>
            </div>
        </Form>
        </Fragment>
    )
}