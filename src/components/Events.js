import React, {useContext} from 'react';

import Event from './Event'
import AppContext from '../contexts/AppContext';

const Events = ({ state, dispatch }) => {
    const value = useContext(AppContext)
    return (
        <React.Fragment>
            <div>{value }</div>
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
        </React.Fragment>
    )
}

export default Events