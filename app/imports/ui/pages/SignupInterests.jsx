import React from 'react';
import { Container, Form, Grid, Header, Segment, Checkbox } from 'semantic-ui-react';

const style = {
  backgroundImage: 'url(/images/bg2.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

export default class SignupInterests extends React.Component {

  render() {
    return (
        <div style={style}><Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header inverted as="h2" textAlign="center">
                Select some interests (min. 3)
              </Header>
              <Form>
                <Segment stacked>
                  <Checkbox label='C++' />
                  <Checkbox label='Java' />
                  <Checkbox label='Virtual Reality' />
                  <Checkbox label='Cyber Security' />
                  <Checkbox label='Networking' />
                  <Checkbox label='Data Science' />
                  <Form.Button content="Submit"/>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </Container></div>
    );
  }
}
