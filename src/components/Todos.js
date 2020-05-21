import React from 'react';

const Todos = ({todos}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {todo.content}
                    <span class="badge badge-danger badge-pill cursor-pointer">
                        <i className="fas fa-trash"></i>
                    </span>
                </li>
            )
        })
    ) : (
        <p className="text-center">You have no todo's left. YAY!</p>
    )

    return (
        <div className="todos row d-flex justify-content-center px-4 py-4">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <ul className="list-group">
                    {todoList}
                </ul>
            </div>
        </div>
    );
}

export default Todos;