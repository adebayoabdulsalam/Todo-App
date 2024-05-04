
import React from 'react'

export const Todo = ({task, togglecomplete, deleteTodo, editTodo}) => {
    return (
        <div className='Todo'>
            <p onClick={() => togglecomplete(task.id)} className={`${task.completed ?
                 'completed' :""}`}>{task.task}
            </p>

            <div>
                <button onClick={() => editTodo(task.id)} className='edit'>E</button>
                <button onClick={() => deleteTodo(task.id)} className='trash'>D</button>
            </div>
        </div>
    )
}