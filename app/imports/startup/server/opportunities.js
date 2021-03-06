import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Opportunities } from '../../api/opportunities/opportunities';

/** Initialize the database with a default data document. */
function addData(name, description, interestNames, careerNames, type, date, year, pic) {
  console.log(`  Adding: ${name} `);
  Opportunities.insert({
    name: name,
    description: description,
    interestNames: interestNames,
    careerNames: careerNames,
    type: type,
    date: Date.parse(date),
    year: year,
    pic: pic,
  });
}

/** Initialize the collection if empty. */
if (Opportunities.find().count() === 0) {
  if (Meteor.settings.defaultOpportunities) {
    console.log('Creating default opportunities.');
    Meteor.settings.defaultOpportunities.map(({name, description, interestNames, careerNames, type, date, year, pic}) => addData(name, description, interestNames, careerNames, type, date, year, pic));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Opportunities', function publish() {
    return Opportunities.find();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('OpportunitiesAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Opportunities.find();
  }
  return this.ready();
});
