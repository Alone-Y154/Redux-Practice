import React from "react";
import {useDispatch} from "react-redux";
import { deleteUser } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {

  const dispatch = useDispatch() //to store the data in the slices

  const deleteAllUser =()=> {
    dispatch(deleteUser())
  }
  
  return <div onClick={() => deleteAllUser()}>DeleteAllUser</div>;
};
