import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { Button } from "reactstrap"
export default function JsPractice() {
    const [message,setMessage]=useState('Hello Javascript!!')
    const [count,setCount]=useState(0)
    const [image,setImage]=useState('bulb-off.gif')
    const shoot=()=>{
        setMessage("I am Ashum Bhuju Shrestha")
    }
    const increaseCount=()=>{
        setCount(count+1);
    }
    const turnOnlight=()=>{
        setImage('bulb-on.gif')
    }
    const turnOfflight=()=>{
        setImage('bulb-off.gif')
    }
    const notify=()=>{toast.error("Wow so Easy!!!")}
  return (
    <>
    <h1>{message}</h1>
    <Button className="p-2 bg-blue-400 rounded-xl" onClick={shoot}>Click Here</Button>
    <h2>{count}</h2>
    <Button onClick={increaseCount}>Increase Count</Button>
    <br></br>
    <Button  onClick={notify}>Notify</Button>
    <ToastContainer/>
    <Button onClick={turnOfflight}>Turn off Light</Button>
    <img src={image}  style={{ width: '100px' }} alt="" />
    <Button onClick={turnOnlight}>Turn On Light</Button>
    </>
  )
}