import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components"
import {MdDeleteForever} from 'react-icons/all.js'
// import { removeUser } from '../store/slices/AdminSlice';
import { removeUser } from '../store/slices/UserSlice'; // Adjust the path if needed


const DisplayUsers = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => { // return an array
        return state.users
    })

    const DeleteUser = (index) => {
        dispatch(removeUser(index))
    }

    console.log("data", data)
  return (
    <Wrapper>
       {data.map((name, index) => {
        return(
            <li key={name}>{name}
            <button className='btn-delete' onClick={()=> DeleteUser(index)}><MdDeleteForever className="delete-icon" /></button>
            </li>
        )
       })}
    </Wrapper>
  )
}

const Wrapper = styled.section`

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    textAlign: left;
    paddingBottom: 8px;
}
`

export default DisplayUsers