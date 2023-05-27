import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

    return (
        <>
            <h1>Quais seus planos para hoje?</h1>
            <TodoForm />
            <Todo />
        </>
    );
}

export default TodoList;