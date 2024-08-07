import React, { useState } from "react";

const Form = () => {
  // Initialize the state to hold form data
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    amount: 0,
  });
 
  // Handle changes to input fields
  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Update the state with the new value
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
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
      .then((data) => console.log(data));
  };

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
    </div>
  );
};

export default Form;
