import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Stuffs} from '/imports/api/stuff/stuff';
import {withTracker} from 'meteor/react-meteor-data';
import {Careers} from '/imports/api/careers/careers';
import {Container, Card, Image, Divider, Header} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {Grid} from 'semantic-ui-react/dist/commonjs/collections/Grid';
import Career from '/imports/ui/components/Career';

/* eslint-disable no-console */

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AddCareers extends React.Component {

    /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
    render() {
        let arr = this.props.careers;
        console.log(arr);
        return (
            <Container textAlign='center'>
                <Header as='h1'>Careers</Header>
                <Card.Group>
                    {this.props.careers.map((careers) => <Career key={careers._id} career={careers}/>)}
                </Card.Group>
            </Container>
        );
    }

}

AddCareers.propTypes = {
    careers: PropTypes.array.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe('Careers');
    return {
        careers: Careers.find({}).fetch(),
        accountCareers: Meteor.user() ? Meteor.user().profile.careerNames : [""],
        ready: (subscription.ready()),
    };
})(AddCareers);
