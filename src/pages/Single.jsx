import React, { useEffect, useState } from 'react'
import Delete from "../img/delete.png"
import Edit from "../img/edit.png"
import {Link, useLocation} from "react-router-dom"
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment'

export const Single = () => {
  const [post,setPost] = useState({});

    const location = useLocation();

    const postId = location.pathname.split("/")[2];

    useEffect(()=>{
      const fetchData = async ()=>{
        try {
          const res = await axios.get(`/posts/${postId}`)
          setPost(res.data)
        } catch (err) {
          console.log(err)
        }
      };
      fetchData();
    },[postId]);


  return (
    <div className='single'>
      <div className="content">
      <img src={post?.img} alt="" />
      <div className="user">
      <img src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <div className="info">
        <span>{post.username}</span>
        <p>Posted {moment(post.date).fromNow}</p>
        </div>
      <div className="edit">
        <Link to={`/write?edit=2`}>
        <img src={Edit} alt="" />
        </Link>
        <img src={Delete} alt="" />
    </div>
    </div>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <Menu />
    </div>
  )
}

export default Single