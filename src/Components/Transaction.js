import React from 'react'

const Transaction = ({transaction}) => {
  return (
    <div className="transaction">
      <h2>Cartegory:{transaction.category}</h2>
      <h3>Description:{transaction.description}</h3>
      <h3>Amount:{transaction.amount}</h3>
    </div>
  )
}

export default Transaction