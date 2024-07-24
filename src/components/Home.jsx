import React, { useState, useEffect } from 'react'
import BlogList from './BlogList';

export default function Home() {
    // some dummy data
    const [blogs, setBlogs] = useState(null);

    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        // fetching data
        // promise
        fetch("http://localhost:8000/blogs/").then(res => {
            return res.json();
        }).then(data => {
            setBlogs(data);
        })
    }, []);
    return (
        <div className='home'>
            {blogs && <BlogList data={blogs} title="All blogs!" handleDelete={handleDelete} />}
            {/* <BlogList data={blogs.filter((blog) => {return blog.author === "Marouane"})} title="Marouane's blogs" /> */}
        </div>
    );
}


