// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FaceIcon from 'material-ui-icons/Face';
import grey from 'material-ui/colors/grey';
import uxecoImage from '../../../../../assets/img/uxec.jpg';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
  },
  svgIcon: {
    color: grey[800],
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

function handleRequestDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function Chips(props) {
  const classes = props.classes;
  return (
    <div className={classes.row}>
      <Chip label="Basic Chip" className={classes.chip} />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Chip"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar src={uxecoImage} />}
        label="Deletable Chip"
        onRequestDelete={handleRequestDelete}
        className={classes.chip}
      />
      <Chip
        avatar={
          <Avatar>
            <FaceIcon className={classes.svgIcon} />
          </Avatar>
        }
        label="Clickable Deletable Chip"
        onClick={handleClick}
        onRequestDelete={handleRequestDelete}
        className={classes.chip}
      />
    </div>
  );
}

Chips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chips);