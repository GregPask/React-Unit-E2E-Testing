import React from 'react';


const AddTodo = ({ submitTodo, inputChanged, disableBtn }) => {

    // console.log(disableBtn);
    let input;
    // console.log(input);
    // console.log(disableBtn);
    return (

    <div>
    <h2>Add todo component</h2>


        <form data-test="my-form" onSubmit={(e) => {
            e.preventDefault();
            submitTodo(input.value);
            input.value = "";
        } }>


            <input data-test="add-input" onChange={() => inputChanged(input.value)} ref={(element) => input = element} type="text" placeholder="What is your todo" />

            <button className="todo-submit" data-test="add-btn" disabled={disableBtn} type="submit">Add Todo</button>




        </form>




    </div>
    )


};


export default AddTodo;
