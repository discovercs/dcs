import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Interests } from '../../api/interests/interests';

/** Initialize the database with a default data document. */

function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Interests.insert(data);
}

/** Initialize the collection if empty. */
if (Interests.find().count() === 0) {
  if (Meteor.settings.defaultInterests) {
    console.log('Creating default interests.');
    Meteor.settings.defaultInterests.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Interests', function publish() {
    return Interests.find();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('InterestsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Interests.find();
  }
  return this.ready();
});

