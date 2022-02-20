
import React, { useState } from 'react'
import './FormStyle.css'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'
import GetAllData from './GetAllData'

const Form = () => {
  const initialFormState = { id: null, rollNo: '', stuName: '', subName: '', storageName: 'localStorage' }
  const [users, setUsers] = useState(GetAllData())
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [prevUser, setPrevUser] = useState('')
  
  const deleteUser = (rollNoOther, storageNameOther) => {

    setUsers(users.filter((user) => (user.rollNo !== rollNoOther)))
    if (storageNameOther === 'localStorage') {
      let ldata = JSON.parse(localStorage.getItem("Stu_Info"));
      ldata.forEach((element, index) => {

        if (element.rollNo === rollNoOther) {
          ldata.splice(index, 1);
          // localStorage.clear();
          localStorage.setItem("Stu_Info", JSON.stringify(ldata));
        }

      });
    } else if (storageNameOther === 'sessionStorage') {
      let sdata = JSON.parse(sessionStorage.getItem("Stu_Info"));
      sdata.forEach((element, index) => {
        console.log(element, index);
        if (element.rollNo === rollNoOther) {
          sdata.splice(index, 1);
          // localStorage.clear();
          sessionStorage.setItem("Stu_Info", JSON.stringify(sdata));
        }

      });
    } else {
      let sameData = document.cookie.split("=");
      let cData = JSON.parse(sameData[1]);
      cData.forEach((element, index) => {
        console.log(element, index);
        if (element.rollNo === rollNoOther) {
          cData.splice(index, 1);
          // localStorage.clear();
          document.cookie = `Stu_Info=${JSON.stringify(cData)}`

        }

      });
    }
    setEditing(false)
  }

  const editRow = (user) => {
      setEditing(true)
      setCurrentUser({ id: user.id, rollNo: user.rollNo, stuName: user.stuName, subName: user.subName, storageName: user.storageName })
      setPrevUser(user)
      if (user.storageName === 'localStorage') {
        let ldata = JSON.parse(localStorage.getItem("Stu_Info"));
        ldata.forEach((element, index) => {

          if (element.rollNo === user.rollNo) {
            ldata.splice(index, 1);
            // localStorage.clear();
            localStorage.setItem("Stu_Info", JSON.stringify(ldata));
          }

        });
      } else if (user.storageName === 'sessionStorage') {
        let sdata = JSON.parse(sessionStorage.getItem("Stu_Info"));
        sdata.forEach((element, index) => {
          console.log(element, index);
          if (element.rollNo === user.rollNo) {
            sdata.splice(index, 1);
            // localStorage.clear();
            sessionStorage.setItem("Stu_Info", JSON.stringify(sdata));
          }

        });
      } else {
        let sameData = document.cookie.split("=");
        let cData = JSON.parse(sameData[1]);
        cData.forEach((element, index) => {
          console.log(element, index);
          if (element.rollNo === user.rollNo) {
            cData.splice(index, 1);
            // localStorage.clear();
            document.cookie = `Stu_Info=${JSON.stringify(cData)}`

          }
        });
      }
    
  }

  const updateUser = (updatedUser) => {
    
    setEditing(false)
    setUsers(users.map((user) => (user.rollNo === updatedUser.rollNo ? updatedUser : user)))

  }

  const editStore = () => {
    console.log(prevUser);
    if (prevUser.storageName === 'localStorage') {
      let dummy1 = JSON.parse(localStorage.getItem("Stu_Info"))
      dummy1.push(prevUser)
      localStorage.setItem("Stu_Info", JSON.stringify(dummy1))
    } else if (prevUser.storageName === 'sessionStorage') {
      let dummy2 = JSON.parse(sessionStorage.getItem("Stu_Info"))
      dummy2.push(prevUser)
      sessionStorage.setItem("Stu_Info", JSON.stringify(dummy2))
    } else {
      let cookidata = document.cookie.split("=");
      let dummy3 = JSON.parse(cookidata[1]);
      dummy3.push(prevUser)
      document.cookie = `Stu_Info=${JSON.stringify(dummy3)}`
    }
    setEditing(false)
  }

  return (
    <div className='all-window'>
      <div className='input-data'>
        <h1>Student Form</h1>
        {
          editing ? (<> <EditUserForm
            editStore={editStore}
            currentUser={currentUser}
            updateUser={updateUser} />
          </>) : (
            <AddUserForm/>
          )
        }
      </div>
      <div className='show-all-data'>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>
    </div>
  )
}

export default Form;



