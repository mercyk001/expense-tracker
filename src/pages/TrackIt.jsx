import React, { useState } from "react";
import ExpenseTable from "../components/ExpenseTable";
import ExpenseForm from "../components/ExpenseForm";
import SearchBar from "../components/SearchBar";

const TrackIt = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(
    (exp) =>
      exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Styles
  const pageStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/747113/pexels-photo-747113.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    paddingTop: "4rem", // Move content up
    paddingBottom: "2rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    color: "white",
  };

  const contentStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "10px",
    padding: "2rem",
    maxWidth: "1000px",
    margin: "0 auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "2rem",
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <div style={headingStyle}>
          <h1>Track Your Expenses</h1>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "normal" }}>
            View, add, and manage your expenses all in one place!
          </h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">Add Expense</h5>
                <ExpenseForm onAddExpense={handleAddExpense} />
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3 mt-md-0">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ExpenseTable expenses={filteredExpenses} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackIt;
