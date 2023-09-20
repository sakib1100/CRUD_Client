import React from 'react';
import { useNavigate } from "react-router-dom";

const AddData = () => {
  const navigate = useNavigate();

    const handleOnSubmit = (event) => {
     event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
    const datas = {name,email};
     fetch('http://localhost:5000/user', {
        method: 'POST',
        body: JSON.stringify(
          datas
        ),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));

if(datas){
  navigate('/home')
}
    }
    return (
        <div className='d-flex justify-content-center mt-5 align-items-center'>
         
 <form className='w-25 mt-5 shadow border rounded p-4' onSubmit={handleOnSubmit}>
  <h3 className='bold text-primary text-center'>Insert Data</h3>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">User Name</label>
    <input name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required /> 
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input name='email' type="email" className="form-control" id="exampleInputPassword1" required />
  </div>

  <button type="submit" className="btn btn-primary">Insert</button>
</form>
        </div>
    );
};

export default AddData;