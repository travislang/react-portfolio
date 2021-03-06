import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
//allows dispatching to redux
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
            return (<Grid item justify='center' lg={5}>
                        <Grid container justify='center'>
                            <ProjectItem key={item.id} project={item} />
                        </Grid>
                        
                    </Grid>)
        })
        return (
            <div className={classes.root}>
                <Typography variant="h2" gutterBottom align='center' color='textSecondary'>
                    Projects
                </Typography>
                <Grid 
                container
                justify='center'>
                    <Grid
                        container
                        direction='row'
                        justify='center'
                        xs={10}
                        spacing={40}>
                        {projects}
                    </Grid>
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