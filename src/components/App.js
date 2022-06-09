import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

const App = props => {
  return (
    <div className="container-fluid">
      <h4>Create Event Form</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input className="form-control" id="formEventTitle"/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody"/>
        </div>

        <button className="btn btn-primary">Add</button>
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
