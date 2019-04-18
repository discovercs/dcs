import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Interests = new Mongo.Collection('Stuffs');

/** Create a schema to constrain the structure of documents associated with this collection. */
const InterestsSchema = new SimpleSchema({
  id: String,
  name: String,
  description: String,
  types: {
    type: String,
    allowedValues: ['personal', 'technical', 'subject', 'field'],
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Interests.attachSchema(InterestsSchema);

/** Make the collection and schema available to other code. */
export { Interests, InterestsSchema };
