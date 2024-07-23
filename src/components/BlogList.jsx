import React, { useState } from 'react'

export default function Bloglist({data, title, handleDelete}) {

    
    
    return (
        <div className='bog-list'>
            <h2>{title}</h2>
            {data.map((post) => (
                <div className='blog-preview' key={post.id}>
                    <h2>{post.title}</h2>
                    <p> Written by: {post.author} </p>
                    <button onClick={() => {handleDelete(post.id)}}>delete Blog</button>
                </div>

            ))}
        </div>
        
    )

    
}
