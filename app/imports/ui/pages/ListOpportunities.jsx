import React from 'react';
import _ from 'lodash'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Grid, Header, Dropdown, List, Search, Label, Card } from 'semantic-ui-react';
import { Opportunities } from '/imports/api/opportunities/opportunities';
import PropTypes from 'prop-types';
import Opportunity from '../components/Opportunity';
import Career from '../components/Career';

const resultRenderer = ({ name }) => <Label content={name} />

resultRenderer.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
}

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListOpportunities extends React.Component {

  componentWillMount() {
    this.resetComponent()
  };

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) => this.setState({ value: result.name });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.name);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.opportunities, isMatch),
      })
    }, 300)
  };

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    const { isLoading, value, results } = this.state;

    for(let o of this.props.opportunities) {
      console.log(o);
    }

    return (
       <div>
         <Container>
           <Grid style={{ margin: '50px' }} verticalAlign='top' textAlign='center' columns = {3} container>
             <Grid.Column>
               <Header as='h1' >Find Opportunities</Header>

               <List>
                 <List.Item>
                   <Search
                       loading={isLoading}
                       onResultSelect={this.handleResultSelect}
                       onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                       results={results}
                       resultRenderer={resultRenderer}
                       value={value}
                       {...this.props}
                   />
                 </List.Item>

                 <List.Item>
                   <Dropdown item text="By Type" icon="dropdown" as='h3'>
                     <Dropdown.Menu>
                       <Dropdown.Item>Scholarship</Dropdown.Item>
                       <Dropdown.Item>Internship</Dropdown.Item>
                       <Dropdown.Item>Hackathon</Dropdown.Item>
                       <Dropdown.Item>Event</Dropdown.Item>
                     </Dropdown.Menu>
                   </Dropdown>
                 </List.Item>
                 <List.Item>
                   <Dropdown item text="By Class Standing" icon="dropdown" as='h3'>
                     <Dropdown.Menu>
                       <Dropdown.Item>Freshman</Dropdown.Item>
                       <Dropdown.Item>Sophomore</Dropdown.Item>
                       <Dropdown.Item>Junior</Dropdown.Item>
                       <Dropdown.Item>Senior</Dropdown.Item>
                     </Dropdown.Menu>
                   </Dropdown>
                 </List.Item>
                 <List.Item>
                   <Dropdown item text="By Interest" icon="dropdown" as='h3'>
                     <Dropdown.Menu>
                       <Dropdown.Item>Javascript</Dropdown.Item>
                       <Dropdown.Item>React</Dropdown.Item>
                       <Dropdown.Item>HTML/CSS</Dropdown.Item>
                       <Dropdown.Item>Python</Dropdown.Item>
                     </Dropdown.Menu>
                   </Dropdown>
                 </List.Item>
                 <List.Item>
                   <Dropdown item text="By Career" icon="dropdown" as='h3'>
                     <Dropdown.Menu>
                       <Dropdown.Item>Data Scientist</Dropdown.Item>
                       <Dropdown.Item>Mobile App Programmer</Dropdown.Item>
                       <Dropdown.Item>Security Analyst</Dropdown.Item>
                     </Dropdown.Menu>
                   </Dropdown>
                 </List.Item>
                 <List.Item>
                   <Dropdown item text="By Date" icon="dropdown" as='h3'>
                     <Dropdown.Menu>
                       <Dropdown.Item>May</Dropdown.Item>
                       <Dropdown.Item>June</Dropdown.Item>
                       <Dropdown.Item>July</Dropdown.Item>
                     </Dropdown.Menu>
                   </Dropdown>
                 </List.Item>
               </List>
             </Grid.Column>

             <Grid.Column>
               <Card.Group>
                 {results.map((opportunity) => <Opportunity key={opportunity._id} opportunities={opportunity}/>)}
               </Card.Group>
             </Grid.Column>
           </Grid>
         </Container>
       </div>
    );
  }

}

// accountOpportunities (array of strings that have the opportunityIDs)
// check if the opportunity._id from the results (array of opportunity objects)  EXISTS inside accountOpportunities
// access it with this.props.accountOpportunities
// return true if exists, false otherwise


ListOpportunities.propTypes = {
  opportunities: PropTypes.array.isRequired,
  accountOpportunities: PropTypes.array.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe('Opportunities');
  return {
    opportunities: Opportunities.find({}).fetch(),
    accountOpportunities: Meteor.user() ? Meteor.user().profile.opportunityIDs : [""],
    ready: (subscription.ready()),
  };
})(ListOpportunities);
