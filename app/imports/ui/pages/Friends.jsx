import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import { Card, Container, Grid, Header, Image } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Careers extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <Container>
          <Grid style={{ margin: '50px' }} verticalAlign='middle' textAlign='center' columns = {3} container>
            <Grid.Column>
              <Header as='h1' >Find Friends</Header>
            </Grid.Column>

            <Grid.Column>
              <Card centered>
                <Card.Content>
                  <Image circular size='tiny' src='/images/belaprofile.jpg' />
                  <Card.Header>
                    Bela M
                  </Card.Header>
                  <Card.Meta>
                    Junior
                  </Card.Meta>
                  <Card.Description>
                    Same interests: Javascript, C
                  </Card.Description>
                </Card.Content>
              </Card>

              <Card centered>
                <Card.Content>
                  <Image circular size='tiny' src='/images/brandonprofile.jpg' />
                  <Card.Header>
                    Brandon W
                  </Card.Header>
                  <Card.Meta>
                    Senior
                  </Card.Meta>
                  <Card.Description>
                    Same interests: Python, Swift
                  </Card.Description>
                </Card.Content>
              </Card>

              <Card centered>
                <Card.Content>
                  <Image circular size='tiny' src='/images/japhetprofile.jpg' />
                  <Card.Header>
                    Japhet Y
                  </Card.Header>
                  <Card.Meta>
                    Junior
                  </Card.Meta>
                  <Card.Description>
                    Same interests: Algorithms
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }

}

export default (Careers);
