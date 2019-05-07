import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Careers } from '../../api/careers/careers.js';
import allInterestNames from './interests';

/** Initialize the database with a default data document. */
export const allCareerNames = [];


function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Careers.insert(data);
  allCareerNames.push(data.name);

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
    return Careers.find();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('CareersAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Careers.find();
  }
  return this.ready();
});

