import { DeleteOutlined, EditFilled, HeartOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, { useReducer, useState } from 'react'

import { BlackHeartIcon, HeartIcon, SavedIcon } from '../assets/images/icon';

const TYPES = {
    create: 'CREATE',
    delete: 'DELETE',
    save: 'SAVE',
    like: 'LIKE'
}

function reducer(state, action) {
    switch (action.type) {
        case TYPES.create:
            return {
                todos: [...state.todos, action.payload],
                saved: state.saved,
                liked: state.liked
            }
        case TYPES.delete:
            return {
                todos: state.todos.filter(todo => todo.id != action.payload),
                saved: state.saved.filter(item => item.id != action.payload),
                liked: state.liked.filter(item => item.id != action.payload)
            }
        case TYPES.save:
            const filteredSaved = state.todos.map(item => item.id === action.payload ? { ...item, isSaved: !item.isSaved } : item)
            return {
                todos: filteredSaved,
                saved: filteredSaved.filter(item => item.isSaved === true),
                liked: state.liked
            }
        case TYPES.like:
            const filteredLikes = state.todos.map(item => item.id === action.payload ? { ...item, isLiked: !item.isLiked } : item)
            return {
                todos: filteredLikes,
                saved: state.saved,
                liked: filteredLikes.filter(item => item.isLiked === true)
            }
        default:
            return state
    }
}


function Todos() {

    

    const initialState = {
        todos: [],
        saved: [],
        liked: []
    }

    const [data, dispatch] = useReducer(reducer, initialState)
    const [currentView, setCurrentView] = useState("all")
    const [todo,setTodo] = useState("")
    const filtredTodos = currentView === 'all' ? data.todos : currentView === 'saved' ? data.saved : data.liked;


    function handleTodoSubmit(e) {
        e.preventDefault()
        const newValue = {
            id: data.todos.length ? data.todos[data.todos.length - 1].id + 1 : 1,
            title: todo,
            isSaved: false,
            isLiked: false
        }
        dispatch({ type: TYPES.create, payload: newValue })
        setTodo('')
    }



    return (
        <>
            <form autoComplete='off' onSubmit={handleTodoSubmit} className='w-[600px] mx-auto mt-10 bg-slate-800 rounded-lg p-4 flex items-center justify-between'>
                <Input value={todo} onChange={(e) => setTodo(e.target.value)} className='w-[80%] placeholder:text-slate-300 bg-transparent hover:bg-transparent border-slate-500 focus:bg-transparent text-white' size='large' name='todo' placeholder='Add todo' />
                <Button className='w-[17%]'  type='primary' size='large' htmlType='submit'>Add</Button>
            </form>
            <div className='flex mx-auto mt-5 items-center justify-between w-[600px] rounded-lg p-2 bg-slate-800'>
                <button onClick={() => setCurrentView('all')} className='w-[33%] rounded-lg bg-[#306df110] text-white py-2 hover:opacity-70 duration-300'>All <span>{data.todos.length}</span></button>
                <button onClick={() => setCurrentView('saved')} className='w-[33%] rounded-lg  bg-[#306df110] text-white hover:opacity-70 duration-300  py-2'>Saved <span>{data.saved.length}</span></button>
                <button onClick={() => setCurrentView('liked')} className='w-[33%] rounded-lg  bg-[#306df110] text-white  py-2 hover:opacity-70 duration-300'>Liked <span>{data.liked.length}</span></button>
            </div>
            <ul className='w-[500px]  space-y-2
            uslate-100 rounded-lg mx-auto mt-4'>
                {filtredTodos.length ? filtredTodos.map((item, index) => (
                    <li key={item.id} className='flex items-center justify-between p-2 rounded-lg bg-slate-800 text-slate-200'>
                        <h3 className='text-lg'>{index + 1}. {item.title}</h3>
                        <div className='flex items-center space-x-4'>
                            <button className='hover:scale-125 duration-300' onClick={() => dispatch({ type: TYPES.like, payload: item.id })}>{item.isLiked ? <HeartIcon/> : <BlackHeartIcon/>} </button>
                            <button  className={`${item.isSaved ? "text-yellow-500" : ""} scale-125 hover:scale-150 duration-300`}  onClick={() => dispatch({ type: TYPES.save, payload: item.id })}><SavedIcon/></button>
                            <button className='scale-125  hover:scale-150 duration-300'><EditFilled /></button>
                            <button className='scale-125 hover:scale-150 duration-300 hover:text-red-500' onClick={() => dispatch({ type: TYPES.delete, payload: item.id })}><DeleteOutlined /></button>
                        </div>
                    </li>
                )) : <li className='mt-5 text-center text-lg text-white'>No {currentView == 'all' ? 'todos' : currentView == 'saved' ? 'saved' : 'liked'} avialable</li>}
            </ul>
        </>
    )
}

export default Todos
