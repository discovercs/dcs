import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Grid, Loader, Card, Header} from 'semantic-ui-react';
import {Interests} from '/imports/api/interests/interests';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import InterestItem from '/imports/ui/components/InterestItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AddFields extends React.Component {

    render() {
        return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
    }

    /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
    renderPage() {
        let arr = [];
        let arr2 = this.props.interests;
        for (let i = 0; i < this.props.accountInterests.length; i++) {
            let a = this.props.accountInterests[i];
            let d = this.props.interests.find( (interest) => interest.name === a );
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
        let test = arr.length!=0;
        let test2 = arr2.length!=0;
        return (
            <Grid container columns={2}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">Fields</Header>
                    <Card.Group>
                        {arr2.map((interests) => test2 ? <InterestItem key={interests._id} interests={interests} owned={false}/> : '')}
                    </Card.Group>
                </Grid.Column>
                <Grid.Column>
                    <Header as="h2" textAlign="center">Users Fields</Header>
                    <Card.Group>
                        {arr.map((interests) => test ? (<InterestItem key={`${interests._id}2`} interests={interests} owned={true}/>) : '')}
                    </Card.Group>
                </Grid.Column>
            </Grid>
        );
    }

}

AddFields.propTypes = {
    interests: PropTypes.array.isRequired,
    accountInterests: PropTypes.array.isRequired,
    ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe('Interests');
    return {
        interests: Interests.find({type: "field"}).fetch(),
        accountInterests: Meteor.user() ? Meteor.user().profile.interestNames : [""],
        ready: subscription.ready(),
    };
})(AddFields);
