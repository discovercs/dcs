import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Card, Image, Divider, Header } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react/dist/commonjs/collections/Grid';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Careers extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <Container textAlign='center'>
          <Divider/>
          <Header as='h1' >Careers</Header>
          <Card.Group itemsPerRow={3}>
          <Card centered>
            <Card.Content>
              <Image size='medium' src='/images/arduino.jpg' />
              <Divider />
              <Card.Header>
                Robotics Programmer
              </Card.Header>
              <Card.Meta>
                Experience
              </Card.Meta>
              <Card.Description>
                Description
              </Card.Description>
            </Card.Content>
          </Card>
          <Card centered>
            <Card.Content>
              <Image size='medium' src='/images/bioinformatics.png' />
              <Divider />
              <Card.Header>
                Bioinformatics Scientist
              </Card.Header>
              <Card.Meta>
                Experience
              </Card.Meta>
              <Card.Description>
                Description
              </Card.Description>
            </Card.Content>
          </Card>
          <Card centered>
            <Card.Content>
              <Image size='medium' src='/images/cybersecurity.jpg' />
              <Divider />
              <Card.Header>
                Cyber Security Analyst
              </Card.Header>
              <Card.Meta>
                Experience
              </Card.Meta>
              <Card.Description>
                Description
              </Card.Description>
            </Card.Content>
          </Card>
          <Card centered>
            <Card.Content>
              <Image size='medium' src='/images/iot1.jpg' />
              <Divider />
              <Card.Header>
                Internet of Things Architect
              </Card.Header>
              <Card.Meta>
                Experience
              </Card.Meta>
              <Card.Description>
                Description
              </Card.Description>
            </Card.Content>
          </Card>
          <Card centered>
            <Card.Content>
              <Image size='medium' src='/images/unreal.jpg' />
              <Divider />
              <Card.Header>
                Video Game Developer
              </Card.Header>
              <Card.Meta>
                Experience
              </Card.Meta>
              <Card.Description>
                Description
              </Card.Description>
            </Card.Content>
          </Card>
          <Card centered>
            <Card.Content>
              <Image size='medium' src='/images/vr1.jpg' />
              <Divider />
              <Card.Header>
                Virtual Reality Developer
              </Card.Header>
              <Card.Meta>
                Experience
              </Card.Meta>
              <Card.Description>
                Description
              </Card.Description>
            </Card.Content>
          </Card>
          </Card.Group>
        </Container>
    );
  }

}

export default (Careers);
