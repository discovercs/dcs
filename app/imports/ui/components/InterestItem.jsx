import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Card, Button, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom';
import Interests from '/imports/api/interests/interests';
import { Bert } from 'meteor/themeteorchef:bert';

/* eslint-disable no-console */

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class InterestItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
        this.formRef = null;
    }


    handleClickAdd() {
        if (confirm('Do you really want to add this interest?')) {
            Meteor.users.update({_id: Meteor.userId()}, {$addToSet: {"profile.interestNames": this.props.interests.name}});
        }
    }

    handleClickRemove() {
        if (confirm('Do you really want to remove this interest?')) {
            Meteor.users.update({_id: Meteor.userId()}, {$pull: {"profile.interestNames": this.props.interests.name}});
        }
    }

    render() {
        return (
            <Card>
                <Image src={this.props.interests.pic} />
                <Card.Content>
                    <Card.Header>{this.props.interests.name}</Card.Header>
                    <Card.Description>{this.props.interests.description}</Card.Description>
                    {this.props.owned ? (<Button onClick={this.handleClickRemove}>Remove</Button>) : (<Button onClick={this.handleClickAdd}>Add</Button>)}
                </Card.Content>

            </Card>
        );
    }
}

/** Require a document to be passed to this component. */
Interests.propTypes = {
    interests: PropTypes.object.isRequired,
    owned: PropTypes.bool.isRequired
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(InterestItem);
