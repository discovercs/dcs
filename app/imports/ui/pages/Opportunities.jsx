import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import { Menu } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Opportunities extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (
       <div>
           <Menu inverted widths={3}>
               <Menu.Item>Test3</Menu.Item>
               <Menu.Item>Test3</Menu.Item>
               <Menu.Item>Test3</Menu.Item>
           </Menu>
       </div>
    );
  }

}

export default (Opportunities);
