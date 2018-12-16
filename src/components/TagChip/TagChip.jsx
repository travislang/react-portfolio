import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import Check from '@material-ui/icons/Check';

class TagChip extends Component {
    render() {
        return (
            <Chip
                icon={<Check />}
                label={this.props.name}
                color="secondary"
            />
        )
    }
}

export default TagChip;