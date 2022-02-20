import React from 'react'
import './FormStyle.css'
const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Roll.No</th>
                    <th>Student Name</th>
                    <th>Subject</th>
                    <th>Storage</th>
                    <th colSpan="2">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ? (
                        props.users.map((user,index) => (
                            <tr key={index}>
                                <td>{user.rollNo}</td>
                                <td>{user.stuName}</td>
                                <td>{user.subName}</td>
                                <td>{user.storageName}</td>
                                <td><button className='form-btn' onClick={() => {props.editRow(user)}}>Edit</button></td>
                                <td><button className='form-btn form-btn-1' onClick={() => props.deleteUser(user.rollNo,user.storageName)}>Delete</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No users</td>
                        </tr>
                    )
                }

            </tbody>
        </table>
    )
}

export default UserTable;
