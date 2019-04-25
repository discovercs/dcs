import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

/* eslint-disable no-console */

function createUser(email, password, first, last, year, gender, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
    profile: {
      first: first,
      last: last,
      year: year,
      gender: gender,
      pic: 'images/defaultprofilepic.jpg',
      interestIDs: [''],
      opportunityIDs: [''],
      careerIDs: [''],
      friendIDs: [''],
    },
  });
  if (role === 'admin') {
    Roles.addUsersToRoles(userID, 'admin');
  }
}

/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(({ email, password, first, last, year, gender, role }) => createUser(email, password, first, last, year, gender, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
