import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id) // <-- filter blogs
        setBlogs(newBlogs) // save filtered blogs to newBlogs
    }

    useEffect(() => {
        // command to use Json Server: npx json-server --watch data/db.json --port 8000
    }, []) // <-- runs only first render

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All BLogs" handleDelete={handleDelete} /> {/* <-- pass blogs to BlogList component */}
        </div>

    )
}

export default Home
