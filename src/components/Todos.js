import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {todo.content}
                    <i onClick={() => {deleteTodo(todo.id)}} className="fas fa-trash red-text shadow-md cursor-pointer"></i>
                </li>
            )
        })
    ) : (
        <p className="text-center">You have no todo's left. YAY!</p>
    )

    return (
        <div className="todos row d-flex justify-content-center px-4 py-4 mt-5">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <h1 className="pink-text text-center font-weight-bold mb-4 text-6xl">Todo's</h1>
                <ul className="list-group">
                    {todoList}
                </ul>
            </div>
        </div>
    );
}

export default Todos;