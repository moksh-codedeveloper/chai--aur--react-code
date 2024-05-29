import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/moksh-codedeveloper")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers:  {data.followers}
      <img src={data.avatar_url} alt="Git pictures" width={300}/>
    </div>
  )
}

export default Github

//optimized way of loading data visit main.jsx file for more info 
export const githubInfoLoader = async () => {
   const response =  await fetch("https://api.github.com/users/moksh-codedeveloper");
   return response.json();
}