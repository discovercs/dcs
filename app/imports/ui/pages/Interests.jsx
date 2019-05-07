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
            <Grid.Column color='olive'>
              <Link to='/addlanguages'><Button content="Technologies" size='massive' color='olive' /></Link>
            </Grid.Column>
            <Grid.Column color='teal'>
              <Link to='/addsubjects'><Button content="Subjects" size='massive' color='teal' /></Link>
            </Grid.Column>
            <Grid.Column color='violet'>
              <Link to='/addfields'><Button content="Fields" size='massive'  color='violet' /></Link>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}

export default (Interests);
