import React, { useState, useEffect } from "react";
import Search from "./Search";

const Form = () => {
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    amount: 0,
  });
  const [transactions, setTransactions] = useState([]);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setTransactions([...transactions, data]);
        setFormData({ category: "", description: "", amount: 0 });
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div className="form">
      <div>
        <h1>Add Transaction</h1>
      </div>

      <div>
        <form onSubmit={handleOnSubmit}>
          <div>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <button type="submit">Add Transaction</button>
          </div>
        </form>
      </div>

      <Search transactions={transactions} />
    </div>
  );
};

export default Form;
