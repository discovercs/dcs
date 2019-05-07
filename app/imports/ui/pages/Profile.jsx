import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Card, Image, Divider, Header, Grid, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {Interests} from '/imports/api/interests/interests';
import InterestItem from '/imports/ui/components/InterestItem';
import {Careers} from '/imports/api/careers/careers';
import Career from '/imports/ui/components/Career';
import {Opportunities} from '/imports/api/opportunities/opportunities';
import Opportunity from '/imports/ui/components/Opportunity';



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

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  renderPage() {

    const accInterests = [];
    for (let i = 0; i < this.props.accountInterests.length; i++) {
      let a = this.props.accountInterests[i];
      let d = this.props.interests.find( (interest) => interest.name === a );
      if (d!=undefined) {
        accInterests.push(d);
      }
    }
    const accInterestsTest = accInterests.length!=0;

    const accCareers = [];
    for (let i = 0; i < this.props.accountCareers.length; i++) {
      let a = this.props.accountCareers[i];
      let d = this.props.careers.find( (career) => career.name === a );
      if (d!=undefined) {
        accCareers.push(d);
      }
    }
    const accCareersTest = (accCareers.length!=0);

    const accOpps = [];
    for (let i = 0; i < this.props.accountOpportunities.length; i++) {
      let a = this.props.accountOpportunities[i];
      let d = this.props.opportunities.find( (opp) => opp._id === a );
      if (d!=undefined) {
        accOpps.push(d);
      }
    }
    const accOppsTest = (accOpps.length!=0);
    console.log(accOpps);

    return (
        <div>
          <Divider/>
          <Image floated="left" circular size='small' src={`${this.props.currentUser.pic}`}/>
          <Header as='h1'>
            <Header.Content>
              {this.props.currentUser.first} {this.props.currentUser.last}
              <Header.Subheader>{this.printYear()}</Header.Subheader>
            </Header.Content>
          </Header>
          <Divider/>
          <Grid style={{ margin: '0px' }} textAlign='center' columns = {4}>
            <Grid.Column>
              <Header as='h1' >My Interests</Header>
              <Card.Group>
                {accInterests.map((interests) => accInterestsTest ? (<InterestItem key={`${interests._id}2`} interests={interests} owned={true}/>) : '')}
              </Card.Group>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' >My Careers</Header>
              <Card.Group>
                {accCareers.map((career) => accCareersTest ? (<Career key={`${career._id}2`} career={career} owned={true}/>) : '')}
              </Card.Group>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' >My Opportunities</Header>
              <Card.Group>
                {accOpps.map((opp) => accOppsTest ? (<Opportunity key={`${opp._id}2`} opportunities={opp} owned={true}/>) : '')}

              </Card.Group>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' >My Friends</Header>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}

Profile.propTypes = {
  currentUser: PropTypes.object,
  interests: PropTypes.array.isRequired,
  accountInterests: PropTypes.array.isRequired,
  careers: PropTypes.array.isRequired,
  accountCareers: PropTypes.array.isRequired,
  opportunities: PropTypes.array.isRequired,
  accountOpportunities: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

const ProfileContainer = withTracker(() => {
  const sub1 = Meteor.subscribe('Interests');
  const sub2 = Meteor.subscribe('Careers');
  const sub3 = Meteor.subscribe('Opportunities');

  return {
    currentUser: Meteor.user() ? Meteor.user().profile : {},
    interests: Interests.find().fetch(),
    accountInterests: Meteor.user() ? Meteor.user().profile.interestNames : [''],
    careers: Careers.find({}).fetch(),
    accountCareers: Meteor.user() ? Meteor.user().profile.careerNames : [''],
    opportunities: Opportunities.find({}).fetch(),
    accountOpportunities: Meteor.user() ? Meteor.user().profile.opportunityIDs : [''],
    ready: (sub1.ready() && sub2.ready() && sub3.ready()),
  }
})(Profile);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(ProfileContainer);

