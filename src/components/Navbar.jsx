import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1>
            The React Blog
        </h1>

        <div className='links'>
            <a href='/'>Home</a>
            <a href='/create'>New Blog</a>
        </div>
    </nav>
  )
}


