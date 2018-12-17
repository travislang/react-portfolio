import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ProjectTable from './ProjectTable';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        maxWidth: 650,
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    longTextField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
    menu: {
        width: 200,
    },
});

class Admin extends Component {
    state = {
        name: '',
        date: '',
        github: '',
        website: '',
        description: '',
        tag: ''
    };
    //send action to saga to get projects from db
    getProjects = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }
    //send action to saga to get tags from db
    getTags = () => {
        this.props.dispatch({ type: 'FETCH_TAGS' });
    }

    componentDidMount() {
        this.getProjects();
        this.getTags();
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch({type: 'ADD_PROJECT', payload: this.state})
        this.setState({
            name: '',
            date: '',
            github: '',
            website: '',
            description: '',
            tag: ''
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="h5" gutterBottom align='center' color='textSecondary'>
                    Add New Project:
                </Typography>
                <Grid container spacing={8} direction='column' alignItems='center'>
                    <Grid item>
                        <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="standard-with-placeholder"
                                label="Name"
                                placeholder="Required"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="standard-with-placeholder"
                                label="Date"
                                placeholder="ex. 01/05/2018"
                                value={this.state.date}
                                onChange={this.handleChange('date')}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Select"
                                className={classes.textField}
                                value={this.state.tag}
                                onChange={this.handleChange('tag')}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                helperText="Please select a tag for your project"
                                margin="normal"
                                variant="outlined"
                            >
                                {this.props.reduxStore.tags.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.tag_name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="standard-with-placeholder"
                                label="Github"
                                placeholder="link to github repo"
                                value={this.state.github}
                                onChange={this.handleChange('github')}
                                className={classes.longTextField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="standard-with-placeholder"
                                label="website URL"
                                value={this.state.website}
                                placeholder="Link to website (optional)"
                                onChange={this.handleChange('website')}
                                className={classes.longTextField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="standard-multiline-flexible"
                                label="description"
                                placeholder='please enter a description of the project'
                                multiline
                                rows="4"
                                value={this.state.description}
                                onChange={this.handleChange('description')}
                                margin="normal"
                                fullWidth
                                style={{ margin: 8 }}
                                variant="outlined"
                            />
                            <Grid container justify='flex-end'>
                                <Button type='submit' variant="outlined" color='primary' className={classes.button}>
                                    Submit
                                </Button>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item>
                        <ProjectTable />
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(withStyles(styles)(Admin));