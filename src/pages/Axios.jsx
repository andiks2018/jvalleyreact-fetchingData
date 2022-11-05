import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function Axios() {

    //state
    const [posts, setPosts]= useState([])

    //get posts data
    const getPostData = async()=>{
        try {
            const result = await axios("https://jsonplaceholder.typicode.com/posts?_limit=10")
            return result
        } catch (error){
            return error
        }
    }

    //cdm
    useEffect(()=>{
        getPostData()
        .then((res)=>{setPosts(res.data)})
        .catch((err)=>{console.info(err)})
    }, [])


  return (
    <div className='App'>
        <h1>Axios</h1>
        {posts.map((e)=>(
            <div key={e.id}>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
            </div>
        ))}
    </div>
  )
}
