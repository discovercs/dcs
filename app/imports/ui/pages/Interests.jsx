import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import { Segment } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Interests extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <Segment.Group>
            <Segment.Group horizontal>
                <Segment>Left</Segment>
                <Segment>Middle</Segment>
                <Segment>Right</Segment>
            </Segment.Group>
            <Segment>Middle</Segment>
            <Segment>Middle</Segment>
            <Segment>Middle</Segment>
            <Segment>Bottom</Segment>
        </Segment.Group>
    );
  }

}

export default (Interests);
