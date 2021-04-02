import { useHistory, useParams } from "react-router"
import useFetch from "./useFetch"

const BlogDetails = () => {
    const { id } = useParams() // <-- grab id from route
    const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`) // <-- reuse useFetch custom hook
    const history = useHistory()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, { // <-- request to delete blog
            method: 'DELETE', // <-- set delete method to fetch
        }).then(() => {
            history.push('/') // <-- goes to home page
        })
    }

    return (
        <div className="blog-details" >
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
