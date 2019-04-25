import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader, Image, Menu } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import StuffItem from '/imports/ui/components/StuffItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Opportunities from './Opportunities';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Home extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
        <div>
          <Image centered src="http://mensho.weebly.com/uploads/1/9/6/3/19630481/1039141.png?882"/>
        </div>

    );
  }

}

export default (Home);
