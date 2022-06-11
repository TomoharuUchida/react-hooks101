import React, { useContext } from 'react'

import AppContext from '../contexts/AppContext'
import OperationLog from './OperationLog'

const OperationLogs = () => {
    const { state } = useContext(AppContext)
    return (
        <React.Fragment>
            <h4>OperationLog List</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>OperatedAt</th>
                    </tr>
                </thead>
                <tbody>
                    {state.operationLogs.map((operationLog, index) => {
                        return <OperationLog key={index} operationLog={operationLog }/>
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default OperationLogs