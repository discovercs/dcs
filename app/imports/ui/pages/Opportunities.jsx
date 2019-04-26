import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import { Card, Container, Grid, Header, Menu, Input, Button, Icon, Dropdown, List } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Opportunities extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
       <div>
         <Container>
           <Grid style={{ margin: '50px' }} verticalAlign='middle' textAlign='center' columns = {3} container>
             <Grid.Column>
               <Header as='h1' >Find Opportunities</Header>

               <List>
                 <List.Item><Input placeholder="Search..."/>
                   <Button><Icon name='search'/></Button></List.Item>

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
