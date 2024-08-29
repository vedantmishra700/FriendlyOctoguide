import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const View = () => {
    const {_id}= useParams();
    const params=useParams();
    useEffect(() => {
        console.log("Vedant Mishra");
        
      console.log(params);
      
    
      
    }, [params])
    
    console.log(useParams());
    
    const [data,setData]=React.useState({});
    const getsingle = async() => {
        const response = await fetch(`http://localhost:8000/66d0528213564ea57778f9f9`);
        const result = await response.json();
        console.log(result);
        setData(result);
        
    }

    useEffect(() => {
        getsingle();
    },[]);
  return (
    <div>View</div>
  )
}

export default View