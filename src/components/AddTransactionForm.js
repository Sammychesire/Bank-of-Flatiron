import React, {useState} from "react";

function AddTransactionForm({addTransaction}) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });

  function handleChanges(e) {
    setFormData((formData) => {
      return {...formData, [e.target.name]: e.target.value};
    });
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={(e) => addTransaction(e, formData)}>
        <div className="inline fields">
          <input type="date" name="date" onBlur={handleChanges} />
          <input type="text" name="description" placeholder="Description" onBlur={handleChanges}/>
          <input type="text" name="category" placeholder="Category" onBlur={handleChanges}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" onBlur={handleChanges}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
