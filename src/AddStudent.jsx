import React, {useState} from 'react';
import {nanoid} from 'nanoid';

function AddStudent(props) {
 const [firstName,setFirstName] = useState("");
 const [lastName,setLastName]= useState("");
 const [email,setEmail] = useState  ("");
 const [selectedFile, setSelectedFile] = useState ();

const doWork = ( )=> {
    const newStudent = {'id':nanoid(), 'firstName':firstName, 'lastName': lastName, 'email': email, 'images': URL.createObjectURL(selectedFile)}
    props.addStudent(newStudent);
}
const imageUpdate = (event) => {
    setSelectedFile(event.target.files[0]);
}
 return (
<div className='row'>
    <div className='col-md-2'>
        <label htmlFor='txtFirstName' className='form-label'>First Name</label>
        <input type='text' id='txtFirstName' placeholder='First Name' className='form-control' onChange={(evt) => setFirstName(evt.currentTarget.value)} value={firstName} />
        </div>
    <div className='col-md-2'>
    <label htmlFor='txtFirstName' className='form-label'>Last Name</label>
    <input type='text' id='txtLastName' placeholder='Last Name' className='form-control' onChange={(evt) => setLastName(evt.currentTarget.value)} value={lastName} />
    </div>
    <div className='col-md-2'>
    <label htmlFor='txtEmail' className='form-label'>Email Address</label>
    <input type='email' id='txtEmail' placeholder='Email Address' className='form-control' onChange={(evt) => setEmail(evt.currentTarget.value)} value={email} />
    </div>
    <div className='col-md-2'>
        <label htmlFor='fileUpload' className='form-label'>Student Image</label>
        < input type='file' name='file' id='fileUpload' onChange={imageUpdate} />
   
        </div>
    <div className='col-md-4'></div>
    <button type='button' id='btnAdd' className='btn btn-success btn-lg' onClick={doWork}>Add Student</button>
</div>
    )  
}

export default AddStudent
