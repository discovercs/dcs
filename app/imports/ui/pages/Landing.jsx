import React from 'react';
import { Grid, Image, Header, Icon, Card, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
        <div className = 'landinghero'>
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4}>
            <Image src="/images/logowhite.png"/>
          </Grid.Column>

          <Grid.Column width={8}>
            <Header as='h1' inverted>See the possibilities of Computer Science.</Header>
            <Header as='h3' inverted>Explore interests, careers, and opportunities.</Header>
          </Grid.Column>
        </Grid>
        </div>

          <Grid style={{ margin: '50px' }} verticalAlign='middle' textAlign='center' columns = {3} container>
            <Grid.Column>
              <Icon size = 'huge' name='search'/>
              <Header as='h1' >Discover Everything</Header>
              <Header as='h3' >Explore Interests, Careers, and Opportunities
                which include: Internships, Scholarships, Hackathons, and Networking Events.</Header>
            </Grid.Column>

            <Grid.Column>
              <Icon size = 'huge' name='users'/>
              <Header as='h1' >Find Friends</Header>
              <Header as='h3' >Find people and potential teammates with similar
                interests or events that you are both going to.</Header>
            </Grid.Column>

            <Grid.Column>
              <Icon size = 'huge' name='calendar check outline'/>
              <Header as='h1' >Events and Deadlines</Header>
              <Header as='h3' >Never miss a scholarship/internship deadline or feel like
                you missed the latest event around the community.</Header>
            </Grid.Column>
          </Grid>
          <Container textAlign='center'>
            <Header as='h1' >How has discoverCS helped you?</Header>
          </Container>

          <Grid style={{ margin: '50px' }} verticalAlign='middle' textAlign='center' columns = {3} container>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Image circular size='tiny' src='/images/belaprofile.jpg' />
                  <Card.Header>Bela</Card.Header>
                  <Card.Meta>Computer Science Tutor</Card.Meta>
                  <Card.Description>
                   I found my summer internship through this website!
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Card.Content>
                  <Image circular size='tiny' src='/images/brandonprofile.jpg' />
                  <Card.Header>Brandon</Card.Header>
                  <Card.Meta>IBM Software Engineer</Card.Meta>
                  <Card.Description>
                    I found some awesome teammates for an upcoming hackathon!
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Card.Content>
                  <Image circular size='tiny' src='/images/japhetprofile.jpg' />
                  <Card.Header>Japhet</Card.Header>
                  <Card.Meta>NSA Computer Engineering Intern</Card.Meta>
                  <Card.Description>
                    I met a potential employer at a networking event posted on this website!
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;
