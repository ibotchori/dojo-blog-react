import { useState } from "react"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Mario') // set Mario to state by default

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author } // <-- create obj from states
        console.log(blog)
    }

    return (
        <div className="create">
            <h2>Add an New Blog</h2>
            <form onSubmit={handleSubmit}> {/* <-- runs handleSubmit method on submit */}
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title} // <-- set value to input from state
                    onChange={(e) => setTitle(e.target.value)} // <-- grab value from input da set it to state
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body} // <-- set value to input from state
                    onChange={(e) => setBody(e.target.value)} // <-- grab value from input da set it to state
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author} // <-- set value to select from state
                    onChange={(e) => setAuthor(e.target.value)} // <-- grab value from select da set it to state
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
}

export default Create
