import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Card, Image, Header } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react/dist/commonjs/collections/Grid';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Careers extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <Container>
        </Container>

    );
  }

}

export default (Careers);
