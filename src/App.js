import './App.css';

function App() {
  const title = 'Welcome to the new blog'  // <-- create variable
  const likes = 50
  /* const person = { name: "John", age: 30 } */
  const link = "http://www.google.com"

  return (
    <div className="App">
      <div className="content"> {/* use the variable */}
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/*  <p>{persom}</p> */}
        <p>{10}</p>
        <p>{"Hello World"}</p>
        <p>{[1, 2, 3, 4, 5, 6]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
