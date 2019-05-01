import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Opportunities = new Mongo.Collection('Opportunities');

/** Create a schema to constrain the structure of documents associated with this collection. */
const OpportunitiesSchema = new SimpleSchema({
  name: { type: String },
  description: { type: String },
  interestNames: { type: Array, optional: true  },
  'interestNames.$': { type: String },
  careerNames: { type: Array, optional: true  },
  'careerNames.$': { type: String },
  type: { type: String, allowedValues: ['internship', 'scholarship', 'event'] },
  date: { type: Date },
  year: { type: Number, optional: true },
  pic: { type: String, optional: true },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Opportunities.attachSchema(OpportunitiesSchema);

/** Make the collection and schema available to other code. */
export { Opportunities, OpportunitiesSchema };
