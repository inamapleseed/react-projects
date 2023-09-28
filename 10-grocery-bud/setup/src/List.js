import React from 'react'
import { FaEdit, FaTractor, FaTrash } from 'react-icons/fa'

const List = ({items}) => {
  return <div  className='grocery-list'>
    {items.map((item, index)=>{
      return <article key={index} className='grocery-item'>
        {item}
        <div className='btn-container'>
          <button className='edit-btn' onClick=''><FaEdit/></button>
          <button className='delete-btn'><FaTrash /></button>
        </div>
      </article>;
    })}
  </div>
}

export default List
