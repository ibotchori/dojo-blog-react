const Home = () => {
    const handleClick = (e) => {
        console.log("Hello React", e.target)
    }

    const handleClickAgain = (name, e) => {
        console.log(`Hello ${name}, ${e.target}`)
        console.log("hello " + name, e.target)
    }


    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('John', e)}>Click me again</button>
        </div>
    )
}

export default Home
