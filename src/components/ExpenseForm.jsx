//a form to input new expenses

import React, { useState } from 'react';

function ExpenseForm ({ onAddExpense }) {
    const [formData, setFormData ] = useState({

        date: '',
        description: '',
        category: '',
        amount: ''
    });

    const  handleChange = (e) => {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value
        });
};

 const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      ...formData,
      id: Date.now(),  // Simple ID generator
      amount: parseFloat(formData.amount)
    };

    onAddExpense(newExpense);
    setFormData({ date: '', description: '', category: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input 
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input 
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input 
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;