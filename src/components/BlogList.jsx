import React, { useState } from 'react'

export default function Bloglist({data, title}) {
    
    return (
        <div className='bog-list'>
            <h2>{title}</h2>
            {data.map((post) => (
                <div className='blog-preview' key={post.id}>
                    <h2>{post.title}</h2>
                    <p> Written by: {post.author} </p>
                </div>

            ))}
        </div>
    )
}
