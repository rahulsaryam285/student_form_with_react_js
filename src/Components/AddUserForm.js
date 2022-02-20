import React, { useState } from 'react'
import { storeData } from './FormStoreData'

const AddUserForm = (props) => {
    const initialFormState = { id: null, rollNo: '', stuName: '', subName: '', storageName: 'localStorage' }
    const [user, setUser] = useState(initialFormState)
    const InputHandler = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const submintHandler = (event) => {
        // event.preventDefault()  

        if ((user.rollNo !== '') && (user.stuName !== '') && (user.subName !== '')) {
            storeData(user)
            setUser(initialFormState)
        } else {
            alert("Please Fill the All Data")
            setUser(initialFormState)
        }


    }
    return (
        <form className='mainform' onSubmit={submintHandler}>
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
                <select className='popup' name='storageName' value={user.storageName} onChange={InputHandler} >
                    <option value="localStorage">Local Storage</option>
                    <option value="sessionStorage">Session Storage</option>
                    <option value="cookies">Cookies</option>
                </select>
            </div>
            <button className='btn' type="submit" value="Submit">Submit</button>
        </form>
    )
}

export default AddUserForm;
