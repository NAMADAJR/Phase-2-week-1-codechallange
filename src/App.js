import React, { useState, useEffect } from "react";
import "./App.css";
import Inputfield from "./Components/Inputfield";
import Search from "./Components/Search";
import Transactiondisplay from "./Components/Transactiondisplay";

function App() {
  const [transactions, setTransactions] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <div>
        <Inputfield addTransaction={addTransaction} />
      </div>
      <div>
        <Transactiondisplay transactions={transactions} />
      </div>
      <div>
        <Search transactions={transactions} />
      </div>
    </div>
  );
}

export default App;

