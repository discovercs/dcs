import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Opportunities = new Mongo.Collection('Opportunities');

/** Create a schema to constrain the structure of documents associated with this collection. */
const OpportunitiesSchema = new SimpleSchema({
  id: String,
  name: String,
  description: String,
  interestIDs: {
    type: String,
    // TODO: list: []
  },
  careerIDs: {
    type: String,
    // TODO: list: []
  },
  types: {
    type: String,
    // TODO: list: []
  },
  date: Date,
  year: Number,
  picture: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Opportunities.attachSchema(OpportunitiesSchema);

/** Make the collection and schema available to other code. */
export { Opportunities, OpportunitiesSchema };
