import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
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

  return (
    <div>
      <HeroSection
        title="Track Your Expenses"
        description="View, add, and manage your expenses all in one place!"
      />
      <div className="container my-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Add Expense</h5>
                <ExpenseForm onAddExpense={handleAddExpense} />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ExpenseTable expenses={filteredExpenses} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackIt;