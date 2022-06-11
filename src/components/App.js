import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers';
import EventForm from './EventForm'
import Events from '../components/Events'
import AppContext from '../contexts/AppContext'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'hi!! iam a provider'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/>
      </div>    
    </AppContext.Provider>
  )
}

App.defaultProps = {
  name: 'サンプル',
  price: 1000
}

export default App;
