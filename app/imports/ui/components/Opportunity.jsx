import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Opportunity extends React.Component {

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>
              {this.props.opportunities.name}
            </Card.Header>
            <Card.Meta>
              {this.props.opportunities.types} {this.props.opportunities.date}
            </Card.Meta>
            <Card.Description>
              {this.props.opportunities.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
             <Button className="ui basic">Add to Profile</Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Opportunity.propTypes = {
  opportunities: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Opportunity);
