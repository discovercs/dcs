import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Cards extends React.Component {

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>
              /* TODO {this.props.title} --> Use this for the title (name) */
            </Card.Header>
            <Card.Meta>
              /* TODO {this.props.subtitle} --> Use this for the subtitle (date) */
            </Card.Meta>
            <Card.Description>
              /* TODO {this.props.description} --> Use this for the description */
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Cards.propTypes = {
  card: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Cards);
