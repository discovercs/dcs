import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Meteor } from "meteor/meteor";

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Opportunity extends React.Component {

  constructor(props) {
    super(props);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }

  handleClickAdd() {
    if (confirm('Do you really want to add this opportunity?')) {
      Meteor.users.update({_id: Meteor.userId()}, {$addToSet: {"profile.opportunityIDs": this.props.opportunities._id}});
    }
  }

  handleClickRemove() {
    if (confirm('Do you really want to remove this opportunity?')) {
      Meteor.users.update({_id: Meteor.userId()}, {$pull: {"profile.opportunityIDs": this.props.opportunities._id}});
    }
  }

  render() {

    let d = this.props.opportunities.date.toString();
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>
              {this.props.opportunities.name}
            </Card.Header>
            <Card.Meta>
              {this.props.opportunities.types} {d}
            </Card.Meta>
            <Card.Description>
              {this.props.opportunities.description.substring(0,159)}
            </Card.Description>
            {this.props.owned ? (<Button onClick={this.handleClickRemove}>Remove</Button>) : (<Button onClick={this.handleClickAdd}>Add</Button>)}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Opportunity.propTypes = {
  opportunities: PropTypes.object.isRequired,
  owned: PropTypes.bool.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Opportunity);
