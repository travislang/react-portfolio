import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

class TagChip extends Component {
    render() {
        return (
            <Chip
                icon={<FaceIcon />}
                label={this.props.name}
                color="primary"
            />
        )
    }
}

export default TagChip;