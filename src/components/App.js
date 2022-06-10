import React, { useReducer,useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers';
import Event from './Event'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body,setBody] = useState('')

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  return (
    <div className="container-fluid">
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

        <button className="btn btn-primary" onClick={addEvent}>Add</button>
        <button className="btn btn-danger">Delete All Events</button>

        <h4>Events List</h4>
        <table className="table table-hover">
          <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {state.map((event, index) =>  (<Event key={index} event={event} dispatch={dispatch}/>))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

App.defaultProps = {
  name: 'サンプル',
  price: 1000
}

export default App;
