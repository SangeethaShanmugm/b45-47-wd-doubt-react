import logo from "./logo.svg";
import "./App.css";
//import { Counter, Hello, Hello1 } from "./Counter";//named import
import { AddColor } from "./AddColor";
import { useState, useEffect } from "react";
import LifeCycleA from "./LifeCycleA";
import Counter from "./Counter";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <AddColor /> */}
      {/* <LifeCycleA /> */}
      {/* <Hello />
      <Hello1 /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;

function Home() {
  return <div>Welcome to Home Page🥳🥳🥳</div>;
}

function Book({ bks }) {
  return (
    <div>
      <h3>{bks.name}</h3>
      <Counter />
    </div>
  );
}

function BookList() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch("https://648c23338620b8bae7ec4f03.mockapi.io/books")
      .then((res) => res.json())
      .then((data) => setBookList(data));
  }, []);

  return (
    <>
      {bookList.map((bk) => {
        return (
          <div>
            <h1>{bk.name}</h1>
          </div>
        );
      })}
    </>
  );
}

// {bookList.map((bk) => {
//   return (
//     <div>
//       <h1>{bk.name}</h1>
//     </div>
//   );
// })}

//import & export
//1. named import & export  (prefered)
//2. default import & export
