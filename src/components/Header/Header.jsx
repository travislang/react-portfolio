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

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};
class Header extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography 
                        variant="h5"
                        align='left' 
                        color="inherit" 
                        className={classes.grow}>
                            Travis Lang
                        </Typography>
                        <Tabs value={value} 
                            onChange={this.handleChange}
                            indicatorColor="secondary"
                            textColor="secondary">
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
                        {/* <Button color="inherit"><Link to='/'>Projects</Link></Button> */}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Header));
