//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';


function App() {
 
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(
    exp =>
      exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <div className="container my-4">
      <h1 className="text-center mb-4">Expense Tracker</h1>
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
  );





}

export default App;
