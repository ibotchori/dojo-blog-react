import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data) // <-- updates blogs state
            })
    }, []) // <-- runs only first render 

    /* // same process with async
    useEffect(async () => {
        const response = await fetch('http://localhost:8000/blogs')
        const data = await response.json()
        setBlogs(data) // <-- updates blogs state

    }, []) // <-- runs only first render */

    return (
        <div className="home">
            {/* renders Bloglist after only blogs state will true, from the beginning blogs is null because we fill it from fech*/}
            {blogs && <BlogList blogs={blogs} title="All BLogs" />}
        </div>

    )
}

export default Home
