import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Careers } from '../../api/careers/careers.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Careers.insert(data);
}

/** Initialize the collection if empty. */
if (Careers.find().count() === 0) {
  if (Meteor.settings.defaultCareers) {
    console.log('Creating default careers.');
    Meteor.settings.defaultCareers.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Careers', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Careers.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('CareersAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Careers.find();
  }
  return this.ready();
});
