import React from 'react'
import { connect } from 'react-redux'
import { ConnectedTaskList } from './TaskList'
 
export const Dashboard = ({groups}) => (
    <div className="row">
        {groups.map(group => (
            <div key={group.id}>
                <ConnectedTaskList id={group.id} name={group.name} className="col"/>
            </div>
        ))}
    </div>
);

function mapStatetoProps(state) {
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStatetoProps, null)(Dashboard);