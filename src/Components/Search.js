import React, { useState } from "react";

const Search = ({ transactions }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle changes to the search input field
  const handleSearchChange = (event) => {
    const value = event.target.value; // Get the value of the input field
    setSearchQuery(value); // Update the search query state
  };

  // Filter transactions based on the search query
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Search Transactions by Category</h2>
      <input
        type="text"
        placeholder="Search by category"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {searchQuery && (
        <div>
          <h2>Transactions</h2>
          <ul>
            {filteredTransactions.map((transaction) => (
              <li key={transaction.id}>
                {transaction.category}: {transaction.description} - ${transaction.amount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;