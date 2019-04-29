import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AddFields extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <Grid container columns={2}>
            <Grid.Column>
                Fields to be added
            </Grid.Column>
            <Grid.Column>
                Users Fields
            </Grid.Column>
        </Grid>
    );
  }

}

export default (AddFields);
