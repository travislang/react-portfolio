import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ProjectTable from 

const styles = theme => ({
    container: {
        maxWidth: 500,
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit,
        width: 250,
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

    getTags = () => {
        this.props.dispatch({ type: 'FETCH_TAGS' });
    }

    componentDidMount() {
        this.getTags();
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="h5" gutterBottom align='center' color='textSecondary'>
                    Add New Project:
                </Typography>
                <Grid container spacing={8} direction='column' alignItems='center'>
                    <Grid item>
                        <form className={classes.container} noValidate autoComplete="off">
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
                                label="Github"
                                placeholder="link to github repo"
                                value={this.state.github}
                                onChange={this.handleChange('github')}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="standard-with-placeholder"
                                label="website URL"
                                value={this.state.website}
                                placeholder="Link to website (optional)"
                                onChange={this.handleChange('website')}
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
                                    <MenuItem key={option.id} value={option.tag_name}>
                                        {option.tag_name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="standard-multiline-flexible"
                                label="description"
                                placeholder='please enter a description of the project'
                                multiline
                                rows="4"
                                value={this.state.description}
                                onChange={this.handleChange('description')}
                                margin="normal"
                                fullWidth='true'
                                style={{ margin: 8 }}
                                variant="outlined"
                            />
                        </form>
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