import React, { useEffect, useState } from 'react';
import Datas from '../Datas/Datas';

const Home = () => {
    const [users,setUser] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUser(data))  
    },[])
    const handleDelete = id => {
    const proced = window.confirm('Are you sure you want to delete?');
    if(proced){
        console.log('data delete successfully',id)
     const url = `http://localhost:5000/user/${id}`;
     fetch(url,{
        method: 'DELETE'
     })
     .then(res => res.json())
     .then(data => {
        if(data.deletedCount > 0){
            const remain = users.filter(user => user._id !== id);
           setUser(remain);
            
        }
                   }
    )

    }
    }
    return (
        <div className='container'>
            <div className='row '>
            <h1>Total Users: {users.length}</h1> 
           {
            users.map(data => <Datas
             key={data._id}
             handleDelete={handleDelete}
             data={data}></Datas>)
           }
           
            </div>
       
        </div>
    );
};

export default Home;