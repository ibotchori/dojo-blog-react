import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPendign, setIsPending] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setBlogs(data) // <-- updates blogs state
                    setIsPending(false) // <-- after data is come, state becomes false
                })
        }, 1000);
    }, []) // <-- runs only first render 

    /* // same process with async
    useEffect(async () => {
        const response = await fetch('http://localhost:8000/blogs')
        const data = await response.json()
        setBlogs(data) // <-- updates blogs state

    }, []) // <-- runs only first render */

    return (
        <div className="home">
            {isPendign && <div>Loading...</div>} {/* <-- show this div only when isPending state is true */}
            {/* renders Bloglist after only blogs state will true, from the beginning blogs is null because we fill it from fech*/}
            {blogs && <BlogList blogs={blogs} title="All BLogs" />}
        </div>

    )
}

export default Home


// command for Json Server: npx json-server --watch data/db.json --port 8000