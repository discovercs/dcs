import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Careers = new Mongo.Collection('Careers');

/** Create a schema to constrain the structure of documents associated with this collection. */
const CareersSchema = new SimpleSchema({
  name: { type: String },
  description: { type: String },
  interestNames: { type: Array },
  'interestNames.$': { type: String },
  pic: { type: String, optional: true },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Careers.attachSchema(CareersSchema);

/** Make the collection and schema available to other code. */
export { Careers, CareersSchema };
