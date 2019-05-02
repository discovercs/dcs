import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Card, Image, Divider, Header, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Profile extends React.Component {

  printYear() {
    switch (this.props.currentUser.year) {
      case 1:
        return (<Header as='h3' >Freshman</Header>);
      case 2:
        return (<Header as='h3' >Sophomore</Header>);
      case 3:
        return (<Header as='h3' >Junior</Header>);
      case 4:
        return (<Header as='h3' >Senior</Header>);
      default:
        return '';
    }
  }


  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <Container>
          <Divider/>
          <Image floated="left" circular size='small' src={`${this.props.currentUser.pic}`}/>
          <Header as='h1'>
            <Header.Content>
              {this.props.currentUser.first} {this.props.currentUser.last}
              <Header.Subheader>{this.printYear()}</Header.Subheader>
            </Header.Content>
          </Header>
          <Grid style={{ margin: '0px' }} textAlign='center' columns = {4} container>
            <Grid.Column>
              <Header as='h1' >My Interests</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' >My Careers</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' >My Opportunities</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' >My Friends</Header>
            </Grid.Column>
          </Grid>
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

