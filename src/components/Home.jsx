import React, { useState } from 'react'

export default function Home() {
    // some dummy data

    const blogpost = [
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]
    const [blogs, setBlogs] = useState(blogpost)
    return (
        <div className='home'>
        <h1> Home Page </h1>
        {blogs.map((post) => (
            <div className='blog-preview' key={post.id}>
                <h2>{post.title}</h2>
                <p> {post.author} </p>
            </div>

        ))}
        </div>
    );
}


