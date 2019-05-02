import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Stuffs} from '/imports/api/stuff/stuff';
import {withTracker} from 'meteor/react-meteor-data';
import {Careers} from '/imports/api/careers/careers';
import {Grid, Container, Card, Image, Divider, Header} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Career from '/imports/ui/components/Career';

/* eslint-disable no-console */

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AddCareers extends React.Component {

    /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
    render() {
        // stuff for listing
        let arr = [];
        let arr2 = this.props.careers;
        for (let i = 0; i < this.props.accountCareers.length; i++) {
            let a = this.props.accountCareers[i];
            let d = this.props.careers.find( (interest) => interest.name === a );
            if (d!=undefined) {
                arr.push(d);
            }
        }

        for(let i = 0; i < arr.length; i++){
            for(let j = 0;j < arr2.length;j++){
                if(arr2[j].name === arr[i].name){
                    arr2.splice(j,1);
                }
            }
        }

        let test = (arr.length!=0);
        let test2 = (arr2.length!=0);
        // end of stuff for listing
        

        return (
            <Grid container columns={2} celled centered>
                <Grid.Column>
                    <Header as="h2" textAlign="center">Careers</Header>
                    <Card.Group>
                        {arr2.map((career) => test2 ? <Career key={career._id} career={career} owned={false}/> : '')}
                    </Card.Group>
                </Grid.Column>
                <Grid.Column>
                    <Header as="h2" textAlign="center">Users Careers</Header>
                    <Card.Group>
                        {arr.map((career) => test ? (<Career key={`${career._id}2`} career={career} owned={true}/>) : '')}
                    </Card.Group>
                </Grid.Column>
            </Grid>
        );
    }
}

AddCareers.propTypes = {
    careers: PropTypes.array.isRequired,
    accountCareers: PropTypes.array.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
    const subscription = Meteor.subscribe('Careers');
    return {
        careers: Careers.find({}).fetch(),
        accountCareers: Meteor.user() ? Meteor.user().profile.careerNames : [""],
        ready: (subscription.ready()),
    };
})(AddCareers);
