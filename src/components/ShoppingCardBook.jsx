import React from 'react'

function ShoppingCardBook() {
    
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

export default ShoppingCardBook
