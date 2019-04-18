import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import {Grid, List, Segment} from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Interests extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <Grid columns={2} divided>
            <Grid.Row>
                <Segment>
                <Grid.Column>
                    Languages
                    <List as='ul'>
                        <List.Item as='li'>C</List.Item>
                        <List.Item as='li'>C++</List.Item>
                        <List.Item as='li'>Java</List.Item>
                        <List.Item as='li'>Javascript</List.Item>
                    </List>
                </Grid.Column>
                </Segment>
                <Segment>
                <Grid.Column>
                    Subjects
                    <List as='ul'>
                        <List.Item as='li'>Art</List.Item>
                        <List.Item as='li'>Biology</List.Item>
                        <List.Item as='li'>Astronomy</List.Item>
                        <List.Item as='li'>Social Networking</List.Item>
                    </List>
                </Grid.Column>
                </Segment>
            </Grid.Row>

            <Grid.Row>
                <Segment>
                <Grid.Column>
                    Computer Science Fields
                    <List as='ul'>
                        <List.Item as='li'>Computer Science</List.Item>
                        <List.Item as='li'>Data Science</List.Item>
                        <List.Item as='li'>Compiler Designer</List.Item>
                        <List.Item as='li'>Computer Networking</List.Item>
                    </List>
                </Grid.Column>
                </Segment>
                <Segment>
                <Grid.Column>
                    Personal
                    <List as='ul'>
                        <List.Item as='li'>Team Collaboration</List.Item>
                        <List.Item as='li'>Leadership</List.Item>
                        <List.Item as='li'>Mentoring</List.Item>
                        <List.Item as='li'>Analysis</List.Item>
                    </List>
                </Grid.Column>
                </Segment>
            </Grid.Row>
        </Grid>
    );
  }

}

export default (Interests);
