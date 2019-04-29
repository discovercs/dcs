import React from 'react';
import {Card, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom';
import Interests from '/imports/api/interests/interests';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class LanguageItem extends React.Component {

    handleClick(){

    }

    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{this.props.interests.name}</Card.Header>
                    <Card.Description>{this.props.interests.description}</Card.Description>
                    <Button onClick={this.handleClick}>Add</Button>
                </Card.Content>

            </Card>
        );
    }
}

/** Require a document to be passed to this component. */
Interests.propTypes = {
    interests: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(LanguageItem);
