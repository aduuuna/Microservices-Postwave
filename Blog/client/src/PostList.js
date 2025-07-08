import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CommentCreate from './CommentCreate'

export default function PostList() {
  const [posts, setPosts] = useState({}); // I am using an object because in my post server I stored all the lists of posts as an object and not list

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    
    setPosts(res.data)
  }

  // Now I want to run fetchPost only when my component is displayed on the screen..so I am using useEffect

  useEffect(() => {
    fetchPosts();
  }, []);


  
  const renderedPosts = Object.values(posts).map(post => {
    return(
      <div className="card" 
      style={{width: '30%', marginBottom: '20px'}}
      key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id}/>
        </div>
      </div>
    )
  })

  return (
    <div className=" d-flex flex-row flex-wrap justify-content-between">
      
      {renderedPosts}
    </div>
  )
}