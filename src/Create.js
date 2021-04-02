import { useState } from "react"
import { useHistory } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Mario') // set Mario to state by default
    const [isPending, setIsPending] = useState(false)
    const history = useHistory() // <-- hook for redirect pages

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author } // <-- create obj from states

        setIsPending(true) // <-- to set loading message, while send data to server

        fetch('http://localhost:8000/blogs', {
            method: 'POST',  // <-- set post method to fetch
            headers: { "Content-Type": "application/json" }, // <--  telling the server that we sending json data
            body: JSON.stringify(blog) // <-- actual data which we sending with this request, before sending transform data to JSON
        }).then(() => {
            console.log('new blog added')
            setIsPending(false) // <--  to hide loading message after data is sent
            //history.go(-1) // <-- goes to prev page
            history.push('/') // <-- goes to home page
        })

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
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled >Adding blog...</button>} {/* <-- show this button while data is sending to server */}
            </form>
        </div>
    )
}

export default Create
