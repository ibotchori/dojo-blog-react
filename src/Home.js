import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'


const Home = () => {
    const { data: blogs, isPendign, error } = useFetch('http://localhost:8000/blogs') // use useFetch file in this component and send the url as a parameter
    // data: blogs means, grab the data but call it blogs in this context


    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPendign && <div>Loading...</div>} {/* <-- show this div only when isPending state is true */}
            {/* renders Bloglist after only blogs state will true, from the beginning blogs is null because we fill it from fech*/}
            {blogs && <BlogList blogs={blogs} title="All BLogs" />}
        </div>

    )
}

export default Home


// command for Json Server: npx json-server --watch data/db.json --port 8000