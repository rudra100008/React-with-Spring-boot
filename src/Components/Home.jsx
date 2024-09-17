import { useEffect } from "react";
import { Link } from "react-router-dom";


const Home=()=>{
    useEffect(()=>{
        document.title="Home page"
    },[])
    return (
        <>
       <div className="flex flex-col items-center bg-gray-100 p-3 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Home page</h1>
        <p className="text-lg text-center text-gray-800 mb-6">This is my project with React js as frontend and spring boot as backend for creating a Restful api</p>
        <Link to={"/addCourse"} className="bg-blue-400 py-2 px-4 text-white rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition-transform  duration-300 no-underline">Start using</Link>
       </div>
        </>
    )

}
export default Home;