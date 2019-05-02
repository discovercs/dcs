import React from 'react';
import _ from 'lodash'
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import { Card, Container, Grid, Header, Dropdown, List, Search } from 'semantic-ui-react';
import { opportunities } from '../../api/opportunities/opportunities';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Opportunities extends React.Component {

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.name })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.name)

      this.setState({
        isLoading: false,
        results: _.filter(opportunities, isMatch),
      })
    }, 300)
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    const { isLoading, value, results } = this.state

    return (
       <div>
         <Container>
           <Grid style={{ margin: '50px' }} verticalAlign='middle' textAlign='center' columns = {3} container>
             <Grid.Column>
               <Header as='h1' >Find Opportunities</Header>

               <List>
                 <List.Item>
                   <Search
                       loading={isLoading}
                       onResultSelect={this.handleResultSelect}
                       onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                       results={results}
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
               <Card centered>
                 <Card.Content>
                   <Card.Header>
                     Raytheon Internship
                   </Card.Header>
                   <Card.Meta>
                     Summer 2019
                   </Card.Meta>
                   <Card.Description>
                     Description
                   </Card.Description>
                 </Card.Content>
               </Card>

               <Card centered>
                 <Card.Content>
                   <Card.Header>
                     NSA Internship
                   </Card.Header>
                   <Card.Meta>
                     Summer 2019
                   </Card.Meta>
                   <Card.Description>
                     Description
                   </Card.Description>
                 </Card.Content>
               </Card>

               <Card centered>
                 <Card.Content>
                   <Card.Header>
                     Google Scholarship
                   </Card.Header>
                   <Card.Meta>
                     Summer 2020
                   </Card.Meta>
                   <Card.Description>
                     Description
                   </Card.Description>
                 </Card.Content>
               </Card>
             </Grid.Column>
           </Grid>
         </Container>
       </div>
    );
  }

}

export default (Opportunities);
