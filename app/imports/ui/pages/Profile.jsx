import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Card, Image, Divider, Header, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Profile extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <Container textAlign='center'>
          <Divider/>
          <Header as='h1' floated="right">Welcome, {this.props.currentUser.first}!</Header>
          <Divider/>
        </Container>
    );
  }

}

Profile.propTypes = {
  currentUser: PropTypes.object,
};

const ProfileContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().profile : {},
}))(Profile);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(ProfileContainer);

