import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
//allows dispatching to redux
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class Projects extends Component {
    //dispatch to saga to get projects
    getProjects = () => {
        this.props.dispatch({type: 'FETCH_PROJECTS'});
    }
    //dispatch to saga to get tags
    getTags = () => {
        this.props.dispatch({type: 'FETCH_TAGS'});
    }

    componentDidMount() {
        this.getProjects();
        this.getTags();
    }

    render() {
        const classes = this.props;
        const projects = this.props.reduxStore.projects.map( item => {
            return (<Grid item lg={4}>
                        <ProjectItem key={item.id} project={item} />
                    </Grid>)
        })
        return (
            <div className={classes.root}>
                <Grid 
                container
                direction='row'
                spacing={40}
                justify='center'>
                    {projects}
                </Grid>
            </div>
        )
    }
}
//connecting redux store to Projects component
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(withStyles(styles)(Projects));