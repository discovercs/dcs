import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Card, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Career extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
        this.formRef = null;
    }


    handleClickAdd() {
        if (confirm('Do you really want to add this interest?')) {
            Meteor.users.update({_id: Meteor.userId()}, {$addToSet: {"profile.careerNames": this.props.career.name}});
        }
    }

    handleClickRemove() {
        if (confirm('Do you really want to remove this interest?')) {
            Meteor.users.update({_id: Meteor.userId()}, {$pull: {"profile.careerNames": this.props.career.name}});
        }
    }

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>
              {this.props.career.name}
            </Card.Header>
            <Card.Meta>
              {this.props.career.description.substring(0, 159)}
            </Card.Meta>
            <Card.Description>
              Matching Interests
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              {this.props.owned ? (<Button onClick={this.handleClickRemove}>Remove</Button>) : (<Button onClick={this.handleClickAdd}>Add</Button>)}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Career.propTypes = {
  career: PropTypes.object.isRequired,
    owned: PropTypes.bool.isRequired
  //interests: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Career);
