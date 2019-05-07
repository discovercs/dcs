import React from 'react';
import _ from 'lodash'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Grid, Header, Dropdown, List, Search, Label, Card } from 'semantic-ui-react';
import { Opportunities } from '/imports/api/opportunities/opportunities';
import PropTypes from 'prop-types';
import Opportunity from '../components/Opportunity';

const resultRenderer = ({ name }) => <Label content={name} />;

resultRenderer.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};


const allInterestNames = ["Java","React", "Bioinformatics", "Virtual Reality", "Mathematics", "Assembler", "Biology", "Computer Vision", "Data Science", "Game Design", "Linux", "Machine Learning", "Python", "Robotics", "Teaching", "Internet of Things", "Graphic Design", "Blockchain", "C#","Unity", "Artificial Intelligence", "Cognitive Science", "Cryptography", "SQL", "Human Computer Interaction", "Javascript", "Security", "Engineering"];

const allCareerNames = [
    "IoT Architect", "Data Scientist", "Database Administrator", "Robotics Engineer", "VR-AR Engineer", "Molbile App Developer", "UX Designer", "Game Developer", "Full Stack Developer", "Security Analyst"
  ];

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListOpportunities extends React.Component {

  constructor(props) {
    super(props);
    this.selectType = this.selectType.bind(this);
    this.selectTags = this.selectTags.bind(this);

  }

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

  selectType(option, filter) {
    if (filter === "type") {
      this.setState({ results: _.filter(this.props.opportunities, opp => opp.type === option) });
    }
    if (filter === "year") {
      this.setState({ results: _.filter(this.props.opportunities, opp => opp.year === option) });
    }
  };

  findName(opp, n, iOrC) {
    if (iOrC === "i") {
      return (opp.interestNames.find((i) => i === n)) != undefined;
    }
    if (iOrC === "c") {
      return (opp.careerNames.find((c) => c === n)) != undefined;
    }

  }

  selectTags(n, iOrC) {
    //let test = allInterestNames.map((n) => <Dropdown.Item onClick={} text={n}/>);
    this.setState({ results: _.filter(this.props.opportunities, opp => this.findName(opp,n, iOrC)) });
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    const { isLoading, value, results } = this.state;

    console.log(allInterestNames);
    console.log(allCareerNames);


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
                       open={false}
                       {...this.props}
                   />
                 </List.Item>

                 <List.Item>
                   <Dropdown item text="By Type" icon="dropdown" as='h3'>
                     <Dropdown.Menu>
                       <Dropdown.Item onClick={() => {this.selectType("scholarship", "type")}}>Scholarship</Dropdown.Item>
                       <Dropdown.Item onClick={() => {this.selectType("internship", "type")}}>Internship</Dropdown.Item>
                       <Dropdown.Item onClick={() => {this.selectType("event", "type")}}>Event</Dropdown.Item>
                     </Dropdown.Menu>
                   </Dropdown>
                 </List.Item>
                 <List.Item>
                   <Dropdown item text="By Class Standing" icon="dropdown" as='h3'>
                     <Dropdown.Menu>
                       <Dropdown.Item onClick={() => {this.selectType(1, "year")}}>Freshman/Sophomore</Dropdown.Item>
                       <Dropdown.Item onClick={() => {this.selectType(2, "year")}}>Sophomore/Junior</Dropdown.Item>
                       <Dropdown.Item onClick={() => {this.selectType(3, "year")}}>Junior/Senior</Dropdown.Item>
                       <Dropdown.Item onClick={() => {this.selectType(4, "year")}}>All</Dropdown.Item>
                     </Dropdown.Menu>
                   </Dropdown>
                 </List.Item>
                 <List.Item>
                   <Dropdown item text="By Interest" icon="dropdown" as='h3'>
                     <Dropdown.Menu scrolling>
                       {allInterestNames.map((n) => <Dropdown.Item key={n} text={n} onClick={() => {this.selectTags(n, "i")}}/>)}
                     </Dropdown.Menu>
                   </Dropdown>
                 </List.Item>
                 <List.Item>
                   <Dropdown item text="By Career" icon="dropdown" as='h3'>
                     <Dropdown.Menu scrolling>
                       {allCareerNames.map((n) => <Dropdown.Item key={n} text={n} onClick={() => {this.selectTags(n, "c")}}/>)}
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
