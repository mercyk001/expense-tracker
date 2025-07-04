//display expenses
import React from 'react';


function ExpenseTable  ({ expenses, handleDelete }) {

    return (
        <div className="table-responsive">
    <table className="table table-hover table-bordered">
      <thead className="table-light">
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>Ksh {expense.amount}</td>
              <td>
                <button className="btn btn-sm btn-danger"
                onClick={() => handleDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">No expenses found.</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
  );



}

export default ExpenseTable;