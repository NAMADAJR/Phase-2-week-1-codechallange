import React, { useState } from "react";

const Search = ({ transactions }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

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
                {transaction.category}: {transaction.description} - $
                {transaction.amount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;