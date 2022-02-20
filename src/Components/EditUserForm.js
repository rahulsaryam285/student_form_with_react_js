import React, {useState, useEffect} from 'react'
import { storeData,checkRollNo } from './FormStoreData'

const EditUserForm = (props) => {
    const [user,setUser] = useState(props.currentUser)

    const InputHandler = (event) => {
        const { name, value } = event.target
    
        setUser({ ...user, [name]: value })
      }
    const submintHandler = (event) => {
        // event.preventDefault()
        
        if(checkRollNo(user)){
            console.log(user);
            console.log("Yes")
            props.editStore()
            alert("Roll No already exist Please Fill Another Roll No")
           
        } else{
            storeData(user)
            console.log("No");
        }
        // props.updateUser(user)
        
    }

    const overEditStore = (event)=>{
        // event.preventDefault()
        props.editStore()
    }

    useEffect(() => {
        setUser(props.currentUser)
      }, [props])
    
    return (
        <form className='mainform'>
            <div className='data'>
                <label>Roll No</label>
                <input type="number" name='rollNo' value={user.rollNo} onChange={InputHandler} placeholder="Enter Your Roll No.." />
            </div>
            <div className='data'>
                <label>Student Name</label>
                <input type="text" name='stuName' value={user.stuName} onChange={InputHandler} placeholder="Enter Your Good Name..." />
            </div>
            <div className='data'>
                <label>Subject Name</label>
                <input type="text" name='subName' value={user.subName} onChange={InputHandler} placeholder="Enter Your Fev Sub..." />
            </div>
            <div className='data'>
                <label>Storage Type</label>
                <select  className='popup' name='storageName' value={user.storageName} onChange={InputHandler} >
                    <option value="localStorage">Local Storage</option>
                    <option value="sessionStorage">Session Storage</option>
                    <option value="cookies">Cookies</option>
                </select>
            </div>
            <button className='btn'type="submit" value="Submit" onClick={submintHandler}>Edit-Form</button>
            <button className='btn' type="submit" value="Submit" onClick={overEditStore}>Cancel</button>
        </form>
    )
}

export default EditUserForm;

