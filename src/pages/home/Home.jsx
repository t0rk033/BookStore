import React, { useEffect, useState } from 'react'
import styles from './home.module.css'
import bookImage from '../../assets/images/BackgroundBooks.png'
function Home() {
  const [books, setBooks] = useState([])
  const FetchData = ()=>{
    fetch('http://localhost:5173/api/books.json').then((res)=> res.json()).then((data)=>{
    setBooks(data.books);
    }).catch((error)=> console.log(error.message))
  }
 
  useEffect(()=>{
    FetchData()
  },[])
  return (
    <div className={styles.homeContainer}>
      <div className={styles.firstSection}>
        <div className={styles.textContainer}>
          <h1>Book me a book</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, provident, tempore aliquid, inventore quo eius vero tempora eligendi </p>
          <input type="email" name="emailInput" className={styles.emailInput} />
          <input type="submit" value="Envia-me" />
      
        </div>
        <img src={bookImage} alt="Livros" />
      </div>
      <div className={styles.booksRoll} >
       {books.map((book)=>(
        <div className={styles.bookCard} key={book.id}>
        <img src={book.img} alt={book.name} />
        <p>{book.name}</p>
        <span>{book.price}</span>
      </div>
       ))}
      </div>
    </div>
  )
}

export default Home
