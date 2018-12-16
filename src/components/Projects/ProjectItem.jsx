import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import TagChip from '../TagChip/TagChip';

const styles = {
    card: {
        maxWidth: 400,
    },
    media: {
        height: 175,
    },
};



class ProjectItem extends Component {
    
    

    render() {
        console.log(this.props.project.thumbnail)
        
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={this.props.project.thumbnail || '/images/browser-mockup.png'}
                        title="app showcase"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.project.name}
                        </Typography>
                        <Typography component="p">
                            {this.props.project.description || 'no description available'}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid container justify='space-between'>
                        <Button target="_blank" href={this.props.project.github || 'https://github.com/' } size="small" color="primary">
                            Learn More
                        </Button>
                        {this.props.project.tag_name ? <TagChip name={this.props.project.tag_name} /> : <div></div>}
                    </Grid>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(ProjectItem);