import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import { Grid } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Careers extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    Hello
                </Grid.Column>
                <Grid.Column>
                    There
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    General
                </Grid.Column>
                <Grid.Column>
                    Kenobi!
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
  }

}

export default (Careers);
