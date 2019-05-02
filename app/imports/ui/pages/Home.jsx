import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Image, Container, Loader, Grid, Icon, Header } from 'semantic-ui-react';
import { Opportunities } from '/imports/api/opportunities/opportunities';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import Cards from '../components/Card';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Home extends React.Component {

  render() {
    // return (this.props.ready) ? this.renderPage() : <Loader active>Mirabela needs to add opportunities</Loader>;
    return (
        <Container>
        <Container style={{height:'300px', overflow: 'hidden'}}>
          <Image centered fluid src="/images/iot2.jpg"/>
        </Container>
          <Header as='h1' textAlign="center">Welcome, {this.props.currentUser.first}!</Header>
          <Grid style={{ margin: '50px' }} verticalAlign='middle' textAlign='center' columns = {3} container>
            <Grid.Column>
              <Header as='h1' >Announcements</Header>
              <Card centered>
                <Card.Content>
                  <Card.Header>
                    Lava Lab Open!
                  </Card.Header>
                </Card.Content>
              </Card>

              <Card centered>
                <Card.Content>
                  <Card.Header>
                    ICSpace cleaned
                  </Card.Header>
                </Card.Content>
              </Card>

              <Card centered>
                <Card.Content>
                  <Card.Header>
                    Registration Available
                  </Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Header as='h1' >Upcoming Events</Header>
              <Card centered>
                <Card.Content>
                  <Card.Header>
                    Video Game Social
                  </Card.Header>
                </Card.Content>
              </Card>

              <Card centered>
                <Card.Content>
                  <Card.Header>
                    Google Alum Speaker
                  </Card.Header>
                </Card.Content>
              </Card>

              <Card centered>
                <Card.Content>
                  <Card.Header>
                    Slack Technologies
                  </Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>

        </Container>
    )
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  // renderPage() {
  //   return (
  //         <Container>
  //           <Image centered src="http://mensho.weebly.com/uploads/1/9/6/3/19630481/1039141.png?882"/>
  //
  //           <Card.Group>
  //             {this.props.cards.map((card, index) => <Cards key={index} card={card}/>)}
  //           </Card.Group>
  //         </Container>
  //   );
  // }
}

/** Require an array of Cards documents in the props. */
Home.propTypes = {
  cards: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Contacts documents.
  const subscription = Meteor.subscribe('Cards');
  return {
    cards: Opportunities.find({}).fetch(),
    ready: (subscription.ready()),
    currentUser: Meteor.user() ? Meteor.user().profile : {},
  };
})(Home);
