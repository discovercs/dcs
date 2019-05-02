import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class User extends React.Component {

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.friend.profile.pic} />
            <Card.Header>
              {this.props.friend.profile.first} {this.props.friend.profile.last}
            </Card.Header>
            <Card.Meta>
              {this.props.friend.profile.year}
            </Card.Meta>
            <Card.Description>
              Interests
              {this.props.interests.map((interest) => <Button>{interest.name}</Button>)}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button className="ui basic">Add Friend</Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
User.propTypes = {
  friend: PropTypes.object.isRequired,
  interests: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(User);
