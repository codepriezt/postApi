/**
 * Job.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title: {
      type: "string",
      required: true
    },

    jobDetail: {
      model: "JobDetail",
      columnName: 'JobDetailId',
      required: true
    },

    company: {
      model: 'Company',
      columnName: "companyId",
      required: true
    },
    candidate: {
      collection: 'candidate',
      via: 'job',
      through: 'Application'
    }
  }
};
