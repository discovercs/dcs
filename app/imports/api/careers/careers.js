import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Careers = new Mongo.Collection('Careers');

/** Create a schema to constrain the structure of documents associated with this collection. */
const CareersSchema = new SimpleSchema({
  id: String,
  name: String,
  description: String,
  interestIDs: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Careers.attachSchema(CareersSchema);

/** Make the collection and schema available to other code. */
export { Careers, CareersSchema };
