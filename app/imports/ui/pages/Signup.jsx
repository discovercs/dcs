import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

const yearOptions = [
  { key: 1, text: 'Freshman', value: 1 },
  { key: 2, text: 'Sophomore', value: 2 },
  { key: 3, text: 'Junior', value: 3 },
  { key: 4, text: 'Senior', value: 4 },
];

const style = {
  backgroundImage: 'url(/images/bg2.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

/**
 * Signup component is similar to signin component, but we attempt to create a new user instead.
 */
export default class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '' };
    // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  /** Handle Signup submission using Meteor's account mechanism. */
  handleSubmit() {
    const { email, password, first, last, year, gender } = this.state;
    Accounts.createUser({
      username: email,
      email: email,
      password: password,
      profile: {
        first: first,
        last: last,
        year: year,
        gender: gender,
        pic: '/images/def.png',
        interestIDs: [''],
        opportunityIDs: [''],
        careerIDs: [''],
        friendIDs: [''],
      },
    }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
  //
      }
    });
  }

  /** Display the signup form. */
  render() {
    return (
        <div style={style}><Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header inverted as="h2" textAlign="center">
                Register your account
              </Header>
              <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                 <Form.Group widths='equal'>
                  <Form.Input fluid
                      label="First Name"
                      name="first"
                      placeholder="First Name"
                      onChange={this.handleChange}
                  />
                  <Form.Input fluid
                      label="Last Name"
                      name="last"
                      placeholder="Last Name"
                      onChange={this.handleChange}
                  />
                 </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Select fluid
                        label="Gender"
                        name="gender"
                        options={genderOptions}
                        placeholder="Gender"
                        onChange={this.handleChange}
                    />
                    <Form.Select fluid
                        label="Class Standing"
                        name="year"
                        options={yearOptions}
                        placeholder="Freshman"
                        onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Input
                      label="Email"
                      icon="user"
                      iconPosition="left"
                      name="email"
                      type="email"
                      placeholder="E-mail address"
                      onChange={this.handleChange}
                  />

                  <Form.Input
                      label="Password"
                      icon="lock"
                      iconPosition="left"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={this.handleChange}
                  />
                  <Form.Button content="Submit"/>

                </Segment>
              </Form>
              <Message>
                Already have an account? Login <Link to="/signin">here</Link>
              </Message>
              {this.state.error === '' ? (
                  ''
              ) : (
                  <Message
                      error
                      header="Registration was not successful"
                      content={this.state.error}
                  />
              )}
            </Grid.Column>
          </Grid>
        </Container></div>
    );
  }
}
