import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import AddStudent from './AddStudent';


function App() {
  const [allStudents, setAllStudents] = useState(null);

  const students = [ 
    {
      id: nanoid(),
      firstName: "stephen",
      lastName: "curry",
      email: "bloxdale0@hexun.com",
      images: 'images/steph curry.jpg'
    }, {
      id: nanoid(),
      firstName: "lonzo",
      lastName: "ball",
      email: "kcronk1@japanpost.jp",
      images: 'images/rookie lonzo.jpg'
    }, {
      id: nanoid(),
      firstName: "jimmy",
      lastName: "butler",
      email: "istodart2@nifty.com",
      images: 'images/jimmy butler.jpg'
    }, {
      id: nanoid(),
      firstName: "Gabriela",
      lastName: "Crawcour",
      email: "gcrawcour3@soundcloud.com",
      images: 'images/student4.jpg'
    }, {
      id: nanoid(),
      firstName: "Johanna",
      lastName: "Chawner",
      email: "jchawner4@example.com",
      images:'images/student5.jpg'
    }, {
      id: nanoid(),
      firstName: "Shaw",
      lastName: "Cubbini",
      email: "scubbini4@merriam-webster.com",
      images: 'images/student6.jpg'
    }, {
      id: nanoid(),
      firstName: "Pier",
      lastName: "Delyth",
      email: "pdelyth5@wordpress.org",
      images: 'images/student7.jpg'
    }, {
      id: nanoid(),
      firstName: "Katharina",
      lastName: "Growy",
      email: "kgrowy6@redcross.org",
      images:'images/student8.jpg'
    }, {
      id: nanoid(),
      firstName: "Dottie",
     lastName: "Cupper",
      email: "dcupper7@unblog.fr",
      images: 'images/student9.jpg'
    }, {
      id: nanoid(),
      firstName: "Guthrey",
      lastName: "Eadie",
      email: "geadie8@list-manage.com",
      images: 'images/student10.jpg'

    }];
    // Add more student objects if needed
    const addStudent =(newStudent) => {
      const updatedStudents = [...allStudents, newStudent];
      setAllStudents(updatedStudents);
    }

  return (
    <div className='container'>
      
      <div className='row'>
        {allStudents && allStudents.map((student) => 
        (<div className='col-md-2' key={student.id}>
        <div className='card'>
            <img src={student.images} alt='Our Students' className='card-img-top mx-auto'/>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item text-center'>{student.firstName}</li>
              <li className='list-group-item text-center'>{student.lastName}</li>
              <li className='list-group-item text-center'>{student.email}</li>
            </ul>
          </div>
        </div>)
        )}
        
      </div>
    {!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save students</button>}
    <AddStudent addStudent={addStudent} />
    </div>
  );
}

export default App;
