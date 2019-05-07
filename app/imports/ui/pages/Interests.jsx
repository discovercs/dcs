import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import { Grid, Button, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Interests extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <div>
          <Image centered fluid src="https://advising.utah.edu/_images/discover-your-interests-1030x300-cropped.jpg"/>
          <Header as='h1' textAlign="center">Find Interests</Header>
          <Grid verticalAlign='middle' textAlign='center' columns = {3}>
            <Grid.Column>
              <Link to='/addlanguages'><Button content="Technologies" /></Link>
            </Grid.Column>
            <Grid.Column>
              <Link to='/addsubjects'><Button content="Subjects" /></Link>
            </Grid.Column>
            <Grid.Column>
              <Link to='/addfields'><Button content="Fields" /></Link>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}

export default (Interests);
