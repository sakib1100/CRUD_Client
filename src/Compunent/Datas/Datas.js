import React from 'react';
import { Link } from 'react-router-dom';

const Datas = ({data,handleDelete}) => {
    const {_id,name,email} = data;
    return (
        <div className='col-ml-4 col-sm-1 col-md-3'>

<div className="card m-2 mt-5 shadow">
  <div className="card-body">
    <h5 className="card-title">Name:- {name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Email- {email}</h6>
    <Link className='text-decoration-none' to={`/update/${data._id}`}><a  className='btn-sm btn-dark text-decoration-none '>Update</a></Link>
    <a onClick={() => handleDelete(_id)} className='btn-sm btn-danger m-1 text-decoration-none cursor-pointer'>Delete</a><br></br>
    <a href="#" className="card-link">Card link</a>

  </div>
</div>


        </div>
    );
};

export default Datas;