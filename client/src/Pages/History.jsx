import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import "./History.css"

const History = () => {

    const [userBmi , setUserBmi] = useState([])
    const [userData , setUserData] = useState({})
    const userId = JSON.parse(localStorage.getItem('userId'));

    useEffect(() => {
      axios.get(`/calculate/:${userId}/getbmi`)
      .then((data) => {
          console.log(data.data)
          setUserBmi(data.data)
      })
      .catch((err) => {
          console.log(err);
      })
    },[])

    useEffect(() => {
        axios.get(`/api/auth/:${userId}/getuser/detail`)
        .then((data) => {
            console.log("user", data.data)
            setUserData(data.data)
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

  return (
    <div>
        <div style={{width: '30%'}}>
            <h2 className="user_info">USER DETAILS</h2>
            <div className="user_Info_container">
                <div style={{ width : "100%"}}>
                <img src="https://us.123rf.com/450wm/gmast3r/gmast3r1411/gmast3r141100350/33865095-businessman-profile-icon-male-portrait-flat.jpg?ver=6" alt="" height="200px" width="150px" className="profilePic" />
                </div>
                <div style={{ width : "100%"}}>
                        <h1 className="profile">{userData.name}</h1>
                        <h1 className="profile">{userData.email}</h1>
                </div>
            </div>
        </div>    
        <div>
        <h1 className="history_head">YOUR BMI CALCULATION HISTORY ARE SHOWN BELOW</h1>
            <table>
                <thead>
                    <tr>
                        <th>SR. NO.</th>
                        <th>HEIGHT</th>
                        <th>WEIGHT</th>
                        <th>BMI</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userBmi.map((elem, index) => {
                           return (
                            <tr key={nanoid()}>
                                <td>{index + 1}</td>
                                <td>{elem.height}</td>
                                <td>{elem.weight}</td>
                                <td>{elem.bmi}</td>
                            </tr>
                           )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default History