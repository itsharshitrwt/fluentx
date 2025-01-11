import React from 'react'

const IconButton = ({Icon, OnClick}) =>{
    <span className='cursor-pointer flex items-center space-x-2'>
      <Icon size={22}/>
    </span>
}

export default IconButton