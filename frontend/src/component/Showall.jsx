import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Showall = () => {
    const [data,setData]=useState([])
    const getall = async () => {
        const response = await fetch("http://localhost:8000/");
        const data = await response.json();
        setData(data);
        data.map((e) => {console.log(e)})
    }
    useEffect(() => {
        getall();
    },[]);

  return (
    <div className="row">
        <div className="col-md-6 mx-auto my-5 bg-dark p-3 rounded-5 shadow-lg table-responsive">
            <table className='table table-dark text-light '>
                <thead>
                    <tr>
                        <th> ID</th>
                        <th colSpan={2}> Name</th>
                        <th> Email</th>
                        <th>Salary</th>
                        <th colSpan={3}> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(element => (
                    <tr>
                        <td> {element._id}</td>
                        <td> {element.firstname}</td>
                        <td> {element.lastname}</td>
                        <td> {element.email}</td>
                        <td> {element.salary}</td>
                        <td> <Link to={`/view/${element._id}`}  className='btn btn-warning'>  View</Link></td>
                        <td> <Link className='btn btn-primary'>  Edit</Link></td>
                        <td> <button className='btn btn-danger'>  Delete</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Showall