import React from 'react'

const Transaction = ({transaction}) => {
  return (
    <div className='Transaction'>
      <h1>Cartegory:{transaction.category}</h1>
      <h3>Description:{transaction.description}</h3>
      <h3>Amount:{transaction.amount}</h3>
    </div>
  )
}

export default Transaction