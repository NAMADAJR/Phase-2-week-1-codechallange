import React, { useState } from "react";

const Search = ({ transactions }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search">
      <h2>Search Transactions by description</h2>
      <input
        type="text"
        placeholder="Search by description"
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
