import { useParams } from "react-router"
import useFetch from "./useFetch"

const BlogDetails = () => {
    const { id } = useParams() // <-- grab id from route
    const { data: blog, error, isPendign } = useFetch(`http://localhost:8000/blogs/${id}`) // <-- reuse useFetch custom hook
    return (
        <div className="blog-details" >
            {isPendign && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
