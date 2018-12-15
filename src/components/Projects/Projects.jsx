import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
//allows dispatching to redux
import { connect } from 'react-redux';

class Projects extends Component {
    //dispatch to saga to get projects
    getProjects = () => {
        this.props.dispatch({type: 'FETCH_PROJECTS'});
    }
    //dispatch to saga to get tags
    getTags = () => {
        this.props.dispatch({type: 'FETCH_PROJECTS'});
    }

    componentDidMount() {
        this.getProjects();
        this.getTags();
    }

    render() {
        return (
            
        )
    }
}
//connecting redux store to Projects component
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(Projects);