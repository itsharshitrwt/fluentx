import React from 'react'

const IconButton = ({Icon, OnClick}) =>{
    <span className='cirsor-pointer flex items-center space-x-2' onClick={onClick}>
      <Icon size={22}/>
    </span>
}

export default IconButton