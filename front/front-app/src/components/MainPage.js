import React, { useState } from 'react';
import axiosClient from '../axios/axios';
import apiPaths from './api';

function MainPage() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    
    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handleSubject(event) {
        setSubject(event.target.value);
    }

    function handleContent(event) {
        setContent(event.target.value);
    }

    function sendEmail() {
        axiosClient.post(apiPaths.sendEmail, {email: email, subject: subject, content: content}).then((res)=>{
            console.log(res);
        })
    }

    return (
        <div>
            Address:<input type="text" onChange={handleEmail} value={email}></input>
            Subject:<input type="text" onChange={handleSubject} value={subject}></input>
            Content:<textarea onChange={handleContent} value={content}/>
            <button onClick={sendEmail}>Send Email</button>
        </div>
    );
}

export default MainPage;
