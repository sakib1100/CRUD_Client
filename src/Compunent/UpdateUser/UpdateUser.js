import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {

    const {id} = useParams();

const [user,setUser] = useState({});
useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setUser(data))
},[])


    const navigate = useNavigate();

    const handleUpdateUsr = (event) => {
     event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
    const updatedUser = {name,email};
    const url = `http://localhost:5000/user/${id}`;
     fetch(url, {
        method: 'PUT',
        body: JSON.stringify(
          updatedUser
        ),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(data =>{
            console.log('success',data);
            event.target.reset();
            navigate('/home')
        });
    }

    return (
        <div className='d-flex justify-content-center mt-5 align-items-center'>
           
 <form className='w-25 mt-5 shadow border rounded p-4' onSubmit={handleUpdateUsr}>
 <h3 className='bold text-primary text-center'>Update Data</h3>
 <h2>{user.length}</h2>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">User Name</label>
    <input name='name' type="text" placeholder={user.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required /> 
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1"  className="form-label">Email</label>
    <input name='email' type="email" placeholder={user.email}  className="form-control" id="exampleInputPassword1" required />
  </div>

  <button type="submit" className="btn btn-primary">Update</button>
</form>
        </div>
    );
};

export default UpdateUser;