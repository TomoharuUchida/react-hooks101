import React,{ useContext} from "react";

import {
    ADD_OPERATION_LOG,
    DELETE_EVENT
} from '../actions'
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const Event = ({ event}) => {
    const { dispatch} = useContext(AppContext)
    const id = event.id
    const handleClickDeleteButton = () => {
        const result = window.confirm(`Are you sure you want to delete id=${id} event?`)
        if (result) {
            dispatch({ type: DELETE_EVENT, id })
            dispatch({
                type: ADD_OPERATION_LOG,
                description: `Deleted an event(id=${id})`,
                operatedAt:timeCurrentIso8601()
            })
        } 
    }
    return (
        <tr>
        <td>{event.id }</td>
        <td>{event.title }</td>
        <td>{event.body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>Delete</button></td>
        </tr>
    )
}

export default Event