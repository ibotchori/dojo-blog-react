import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    const [name, setName] = useState('Mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id) // <-- filter blogs
        setBlogs(newBlogs) // save filtered blogs to newBlogs
    }

    useEffect(() => {
        console.log("use effect ran")
        console.log(name)
    }, [name]) // <-- runs only when name state is changed

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All BLogs" handleDelete={handleDelete} /> {/* <-- pass blogs to BlogList component */}
            <button onClick={() => setName('Luigi')} >Change name</button>
            <p>{name}</p>
        </div>

    )
}

export default Home
