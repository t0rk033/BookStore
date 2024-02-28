import React, { useEffect, useState } from 'react'
import styles from './shopping.module.css'
function Romance() {
    const [shopping, setShopping] = useState([])

const FetchData = ()=>{
    fetch('http://localhost:5173/api/books.json').then((res)=> res.json()).then((data)=>{
        setShopping(data.romance)
    }).catch((error)=> console.log(error.message))
}

useEffect(()=>{
    FetchData()
},[])
  return (
    <div className={styles.shoppingContainer}>
      {shopping.map((book)=>(
        <div key={book.id} className={styles.cardBook}>
            <img src={book.img} alt="" />
            <p>{book.name}</p>
            <span>{book.price}</span>
            <button>Adicionar ao carrinho</button>
        </div>
      ))}
    </div>
  )
}

export default Romance
