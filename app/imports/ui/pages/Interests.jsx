import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import { Segment, List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Interests extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <Segment.Group>
            <Segment.Group horizontal>
               <Segment><Link to='/addlanguages'><Button content="Languages" /></Link>
                <List as='ol'>
                    <List.Item as='li' value='-'>C</List.Item>
                    <List.Item as='li' value='-'>C++</List.Item>
                    <List.Item as='li' value='-'>Java</List.Item>
                    <List.Item as='li' value='-'>JavaScript</List.Item>
                </List>
               </Segment>
                <Segment><Link to='/addsubjects'><Button content="Subjects" /></Link>
                    <List as='ol'>
                        <List.Item as='li' value='-'>Biology</List.Item>
                        <List.Item as='li' value='-'>Art</List.Item>
                        <List.Item as='li' value='-'>Chemistry</List.Item>
                        <List.Item as='li' value='-'>Astronomy</List.Item>
                    </List>
                </Segment>
            </Segment.Group>
            <Segment.Group horizontal>
                <Segment><Link to='/addfields'><Button content="Fields" /></Link>
                    <List as='ol'>
                        <List.Item as='li' value='-'>Data Science</List.Item>
                        <List.Item as='li' value='-'>Computer Security</List.Item>
                        <List.Item as='li' value='-'>Algorithm Analysis</List.Item>
                        <List.Item as='li' value='-'>Web Development</List.Item>
                    </List>
                </Segment>
                <Segment><Link to='/addpersonal'><Button content="Personal" /></Link>
                    <List as='ol'>
                        <List.Item as='li' value='-'>Team Collaborator</List.Item>
                        <List.Item as='li' value='-'>Leadership Roles</List.Item>
                        <List.Item as='li' value='-'>Community Builder</List.Item>
                        <List.Item as='li' value='-'>Innovator</List.Item>
                    </List>
                </Segment>
            </Segment.Group>
        </Segment.Group>
    );
  }

}

export default (Interests);
