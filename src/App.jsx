import { useState } from "react"
import "./App.css"

const books = [
  {
    author: "Collean Hoover",
    title: "It Ends With Us",
    img: "https://m.media-amazon.com/images/I/817vqET828L._SY522_.jpg",
    id: 1,
  },
  {
    author: "Collean Hoover",
    title: "It Ends With Us",
    img: "https://m.media-amazon.com/images/I/817vqET828L._SY522_.jpg",
    id: 2,
  },
]

const ExampleEvent = () => {
  const handleButtonClick = (event) => {
    alert("we clicked the button")
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  )
}

const Book = (props) => {
  const { author, title, img, number } = props

  return (
    <div className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <ExampleEvent />
      <span className="number">{`#${number + 1}`}</span>
    </div>
  )
}

const BookList = () => {
  return (
    <div className="book-list">
      {books.map((book, index) => {
        return <Book {...book} number={index} key={book.id} />
      })}
    </div>
  )
}

function App() {
  return (
    <>
      <BookList />
    </>
  )
}

export default App
