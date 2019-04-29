import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Opportunities = new Mongo.Collection('Opportunities');

/** Create a schema to constrain the structure of documents associated with this collection. */
const OpportunitiesSchema = new SimpleSchema({
  name: { type: String },
  description: { type: String },
  interestIDs: { type: Array },
  'interestIDs.$': { type: String },
  careerIDs: { type: Array },
  'careerIDs.$': { type: String },
  types: { type: Array },
  'types.$': { type: String },
  date: { type: Date },
  year: { type: Number },
  pic: { type: String },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Opportunities.attachSchema(OpportunitiesSchema);

/** Make the collection and schema available to other code. */
export { Opportunities, OpportunitiesSchema };
