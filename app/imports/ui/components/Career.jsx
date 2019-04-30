import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Career extends React.Component {

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.career.pic} />
            <Card.Header>
              {this.props.career.name}
            </Card.Header>
            <Card.Meta>
              {this.props.career.description.substring(0, 159)}
            </Card.Meta>
            <Card.Description> /* todo: only list interests associated with career */
              Matching Interests
              {this.props.interests.map((interest) => <Button>{interest.name}</Button>)}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button className="ui basic">Learn More</Button> <Button className="ui basic">Add to Profile</Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Career.propTypes = {
  career: PropTypes.object.isRequired,
  interests: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Career);
