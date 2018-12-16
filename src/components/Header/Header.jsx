import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import LaptopMac from '@material-ui/icons/LaptopMac';
import Build from '@material-ui/icons/Build';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        fontWeight: 500,
    },
    colorPrimary: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderTop: `2px solid ${theme.palette.primary.main}`
    },
    logo: {
        fontWeight: 300,
        color: theme.palette.primary.dark,
    },
});

class Header extends Component {
    //sets a local state to keep track of the view
    state = {
        value: 0,
    };

    //this is setting our local state page ref to match the current page on reload
    componentDidMount() {
        if (this.props.history.location.pathname === '/') {
            this.setState({
                value: 0
            })
        }
        else if (this.props.history.location.pathname === '/admin') {
            this.setState({
                value: 1
            })
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    
    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.colorPrimary}>
                    <Toolbar>
                        <Typography 
                        variant="h5"
                        align='left' 
                        color="textSecondary" 
                        className={classes.grow}>
                            Travis<span className={classes.logo}>Lang</span>
                        </Typography>
                        <Tabs value={value}
                            onChange={this.handleChange}
                            indicatorColor='primary'
                            textColor="primary">
                            <Tab 
                            icon={<LaptopMac />}
                            label="Projects"
                            component={Link}
                            to='/'
                             />
                            <Tab 
                            icon={<Build />}
                            label="Admin"
                            component={Link}
                            to='/admin' />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Header));
