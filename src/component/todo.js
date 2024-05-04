
import React from 'react'

export const Todo = ([task]) => {
    return (
        <div className='Todo'>
            <p>{task.task} </p>

            <div>
                <button className='edit'>E</button>
                <button className='trash'>D</button>
            </div>
        </div>
    )
}