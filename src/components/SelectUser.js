import React from 'react'
import { Link } from "react-router-dom";
import student from "../assets/student.png";
import company from "../assets/company.png";
import mentor from "../assets/mentor.png";

function SelectUser() {
    return (
        <div className='selectUserBody'>
            <dev className="topic_user">
                    <h4>CHOOSE YOUR ROLE</h4>
                </dev>
            <div className='user-container'>
                <div className="box"><Link to="/studentregister"><img src={student} alt="Student" height="250px" width="auto" /><span className="username">Student</span></Link></div>
                <div className="box"><Link to="/companyregister"><img src={company} alt="Student" height="250px" width="auto" /><span className="username">Company</span></Link></div>
                <div className="box"><Link to="/mentorregister"><img src={mentor} alt="Student" height="250px" width="auto" /><span className="username">Mentor</span></Link></div>
            </div>
        </div>
    )
}

export default SelectUser