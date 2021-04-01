import { useParams } from "react-router"

const BlogDetails = () => {
    const { id } = useParams() // <-- grab id from route
    return (
        <div className="blog-details" >
            <h2>Blog details {id}</h2> {/* <-- output id to the template */}
        </div>
    )
}

export default BlogDetails
