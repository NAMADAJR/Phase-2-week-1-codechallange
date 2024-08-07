import React from "react";
import { useState, useEffect } from "react";
import Transaction from "./Transaction";

const Transactiondisplay = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setTransaction(data))
      .catch((error) => console.log(error));
  }, []);

  const displayTransaction = transaction.map((transaction) => {
    return (
      <div>
        <Transaction key={transaction.id} transaction={transaction} />
      </div>
    );
  });

  return <div className="transaction-display">{displayTransaction}</div>;
};

export default Transactiondisplay;
