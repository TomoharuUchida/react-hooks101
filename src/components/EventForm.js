import React,{ useContext,useState } from 'react';

import {
    CREATE_EVENT,
    EDELETE_ALL_EVENTS
} from '../actions'
import AppContext from '../contexts/AppContext'

const EventForm = () => {
    const {state,dispatch} = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body,setBody] = useState('')

    const addEvent = (e) => {
        e.preventDefault();
        dispatch({
        type: CREATE_EVENT,
        title,
        body
        })
        setTitle('')
        setBody('')
    }

    const deleteAllEvents = (e) => {
        e.preventDefault()
        const result = window.confirm('Are you sure you want to delete all events?')
        if(result)dispatch({ type: EDELETE_ALL_EVENTS})
    }

    const unCreatable = title === '' || body === ''

    return (
        <React.Fragment>
            <h4>Create Event Form</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">Title</label>
                    <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="formEventBody">Body</label>
                    <textarea className="form-control" id="formEventBody" value={ body} onChange={e =>setBody(e.target.value)}/>
                </div>

                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>Add</button>
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length ===0}>Delete All Events</button>
            </form>
        </React.Fragment>
    )

};

export default EventForm