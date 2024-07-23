import React, { useState } from 'react'
import BlogList from './BlogList';

export default function Home() {
    // some dummy data
    const blogpost = [
        { title: 'My new website', body: 'lorem ipsum...', author: 'Marouane', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Fatima', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Marouane', id: 3 }
    ]
    const [blogs, setBlogs] = useState(blogpost);
    return (
        <div className='home'>
            <h1> Home Page </h1>
            <br />
            <br />
            <br />
            <BlogList data={blogs} title="All blogs!" />
            <BlogList data={blogs.filter((blog) => {return blog.author === "Marouane"})} title="Marouane's blogs" />
        </div>
    );
}


