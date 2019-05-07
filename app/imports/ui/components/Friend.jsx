import React from 'react';
import { Card, Image, Button, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Meteor } from "meteor/meteor";

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Friend extends React.Component {

  printYear() {
    switch (this.props.friend.profile.year) {
      case 1:
        return ("Freshman");
      case 2:
        return ("Sophomore");
      case 3:
        return ("Junior");
      case 4:
        return ("Senior");
      default:
        return '';
    }
  }
  constructor(props) {
    super(props);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }


  handleClickAdd() {
    if (confirm('Do you really want to add this friend?')) {
      Meteor.users.update({_id: Meteor.userId()}, {$addToSet: {"profile.friendIDs": this.props.friend._id}});
    }
  }

  handleClickRemove() {
    if (confirm('Do you really want to remove this friend?')) {
      Meteor.users.update({_id: Meteor.userId()}, {$pull: {"profile.friendIDs": this.props.friend._id}});
    }
  }


  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image size="small" circular src={this.props.friend.profile.pic} />
            <Divider/>
            <Card.Header>
              {this.props.friend.profile.first} {this.props.friend.profile.last}
            </Card.Header>
            <Card.Meta>
              {this.printYear()}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            {this.props.owned ? (<Button onClick={this.handleClickRemove}>Remove</Button>) : (<Button onClick={this.handleClickAdd}>Add</Button>)}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Friend.propTypes = {
  friend: PropTypes.object.isRequired,
  owned: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Friend);
