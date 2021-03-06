import React from 'react';
import _ from 'lodash'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Card, Container, Grid, Header, Dropdown, List, Search } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Friend from '../components/Friend';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Friends extends React.Component {

  constructor(props) {
    super(props);
    this.selectType = this.selectType.bind(this);
  }

  componentWillMount() {
    this.resetComponent()
  };

  selectType(option) {
    this.setState({ results: _.filter(this.props.accounts, acc => acc.profile.year === option) });
  };

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) => this.setState({ value: result.profile.first });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.profile.first);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.accounts, isMatch),
      })
    }, 300)
  };

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    const { isLoading, value, results } = this.state;

    return (
        <Container>
          <Grid style={{ margin: '50px' }} verticalAlign='top' textAlign='center' columns = {2} container>
            <Grid.Column>
              <Header as='h1' >Find Friends</Header>

              <List>
                <List.Item>
                  <Search
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                    results={results}
                    value={value}
                    open={false}
                    {...this.props}
                  />
                </List.Item>

                <List.Item>
                  <Dropdown item text="Class Standing" icon="dropdown" as='h3'>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => {this.selectType(1)}}>Freshman</Dropdown.Item>
                      <Dropdown.Item onClick={() => {this.selectType(2)}}>Sophomore</Dropdown.Item>
                      <Dropdown.Item onClick={() => {this.selectType(3)}}>Junior</Dropdown.Item>
                      <Dropdown.Item onClick={() => {this.selectType(4)}}>Senior</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <Card.Group itemsPerRow={2}>
                {results.map((friends) => <Friend key={friends._id} friend={friends} owned={false}/>)}
              </Card.Group>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }

}

Friends.propTypes = {
  accounts: PropTypes.array.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe('userList');
  return {
    accounts: Meteor.users.find({}).fetch(),
    ready: (subscription.ready()),
  };
})(Friends);
