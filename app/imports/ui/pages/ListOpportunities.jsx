import React from 'react';
import _ from 'lodash'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {  Divider, Grid, Header, Dropdown, Search, Label, Card, Menu } from 'semantic-ui-react';
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
    this.selectDate = this.selectDate.bind(this);
    this.isOwned = this.isOwned.bind(this);
  }

  componentWillMount() {
    this.resetComponent();
  }

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
      });
    }, 300);
  };

  isOwned(opp) {
    const i = opp._id;
    const arr = this.props.accountOpportunities;
    const b = arr.find((o) => (o === i));
    return b !== undefined;
  }

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
    this.setState({ results: _.filter(this.props.opportunities, opp => this.findName(opp,n, iOrC)) });
  }

  selectDate(aOrD) {
    if (aOrD === "a") {
      this.setState({ results: this.props.opportunities});
    }
    if (aOrD === "d") {
      this.setState({ results:  this.props.opportunities.reverse()});
    }
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    const { isLoading, value, results } = this.state;
    const arr = [];
    for (let i = 0; i < this.props.accountOpportunities.length; i++) {
      let a = this.props.accountOpportunities[i];
      let d = this.props.opportunities.find( (opp) => opp._id === a );
      if (d!=undefined) {
        arr.push(d);
      }
    }
    const test = arr.length != 0;


    return (
       <div>
         <Divider/>
           <Header as='h1' textAlign="center">Find Opportunities</Header>
           <Menu secondary fluid>
             <Menu.Item>
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
             </Menu.Item>
             <Menu.Item>
               <Dropdown item text="By Type" icon="dropdown" as='h3'>
                 <Dropdown.Menu>
                   <Dropdown.Item onClick={() => {this.selectType("scholarship", "type")}}>Scholarship</Dropdown.Item>
                   <Dropdown.Item onClick={() => {this.selectType("internship", "type")}}>Internship</Dropdown.Item>
                   <Dropdown.Item onClick={() => {this.selectType("event", "type")}}>Event</Dropdown.Item>
                 </Dropdown.Menu>
               </Dropdown>
             </Menu.Item>
             <Menu.Item>
               <Dropdown item text="By Class Standing" icon="dropdown" as='h3'>
                 <Dropdown.Menu>
                   <Dropdown.Item onClick={() => {this.selectType(1, "year")}}>Freshman/Sophomore</Dropdown.Item>
                   <Dropdown.Item onClick={() => {this.selectType(2, "year")}}>Sophomore/Junior</Dropdown.Item>
                   <Dropdown.Item onClick={() => {this.selectType(3, "year")}}>Junior/Senior</Dropdown.Item>
                   <Dropdown.Item onClick={() => {this.selectType(4, "year")}}>All</Dropdown.Item>
                 </Dropdown.Menu>
               </Dropdown>
             </Menu.Item>
             <Menu.Item>
               <Dropdown item text="By Interest" icon="dropdown" as='h3'>
                 <Dropdown.Menu>
                   {allInterestNames.map((n) => <Dropdown.Item key={n} text={n} onClick={() => {this.selectTags(n, "i")}}/>)}
                 </Dropdown.Menu>
               </Dropdown>
             </Menu.Item>
             <Menu.Item>
               <Dropdown item text="By Career" icon="dropdown" as='h3'>
                 <Dropdown.Menu>
                   {allCareerNames.map((n) => <Dropdown.Item key={n} text={n} onClick={() => {this.selectTags(n, "c")}}/>)}
                 </Dropdown.Menu>
               </Dropdown>
             </Menu.Item>
             <Menu.Item>
               <Dropdown item text="By Date" icon="dropdown" as='h3'>
                 <Dropdown.Menu>
                   <Dropdown.Item onClick={() => {this.selectDate(a)}}>Ascending</Dropdown.Item>
                   <Dropdown.Item onClick={() => {this.selectDate(d)}}>Descending</Dropdown.Item>
                 </Dropdown.Menu>
               </Dropdown>
             </Menu.Item>
           </Menu>
           <Grid columns={2} celled verticalAlign='top' textAlign='center'>
             <Grid.Column>
               <Header as='h2' textAlign="center">Search Results</Header>
               <Card.Group itemsPerRow={2}>
                 {results.map((opps) => <Opportunity key={opps._id} opportunities={opps} owned={false}/>)}
               </Card.Group>
             </Grid.Column>
             <Grid.Column>
               <Header as='h2' textAlign="center">My Opportunities</Header>
               {arr.map((opps) => test ? (<Opportunity key={`${opps._id}2`} opportunities={opps} owned={() => { this.isOwned(opps) } }/>) : '')}
             </Grid.Column>
           </Grid>
       </div>
    );
  }

}

ListOpportunities.propTypes = {
  opportunities: PropTypes.array.isRequired,
  accountOpportunities: PropTypes.array.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe('Opportunities');
  return {
    opportunities: Opportunities.find().fetch(),
    accountOpportunities: Meteor.user() ? Meteor.user().profile.opportunityIDs : [""],
    ready: (subscription.ready()),
  };
})(ListOpportunities);
