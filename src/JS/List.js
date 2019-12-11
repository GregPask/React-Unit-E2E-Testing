import React, { Component } from 'react'


const List = ({todos, deleteTodo}) => {

    console.log(todos);

    const todoItem = todos.map((todo) => (
        <li key={todo.id}>
            <button data-test="delete-btn" type="button" onClick={() => deleteTodo(todo.id) }>Delete</button><span data-test="todo-text">{todo.text}</span>
        </li>
    ))


    return (
        <div>
            <h2 data-test="list-header">List Comp</h2>
            <ul id="my-list" data-test="list-list">
                {todoItem}
            </ul>
        </div>
    )



}


export default List;