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
      id: Date.now(),  
      amount: parseFloat(formData.amount)
    };

    onAddExpense(newExpense);
    setFormData({ date: '', description: '', category: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          name="date"
          className="form-control"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <input
          type="text"
          name="category"
          className="form-control"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          name="amount"
          className="form-control"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-dark w-100">Submit</button>
    </form>
  );
}

export default ExpenseForm;