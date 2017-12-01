'use strict';

var method = require('./../method');
var assign = require('lodash.assign');

/**
 * @memberof jobs
 * @method destroy
 * @description Destroy the job with the given id. When this action is performed,
 * the job is immediately stopped and marked for deletion.
 * Access to the job is terminated immediately and billing for the job is prorated to the minute.
 * This action can only be performed by the user who owns the job, or in the case of
 * a team, the team administrator.
 * @param {object} params - Job destroy parameters
 * @param {string} params.jobId - The id of the job to destroy
 * @param {function} cb - Node-style error-first callback function
 * @example
 * paperspace.jobs.destroy({
 *   jobId: 'j123abc',
 * }, function(err, resp) {
 *   // handle error or http response
 * });
 * @example
 * $ paperspace jobs destroy --jobId "j123abc"
 * @example
 * # HTTP request:
 * https://api.paperspace.io
 * POST /jobs/j123abc/destroy
 * x-api-key: 1ba4f98e7c0...
 * # Returns 204 on success
 */

function destroy(params, cb) {
	return method(destroy, params, cb);
}

assign(destroy, {
	auth: true,
	group: 'jobs',
	name: 'destroy',
	method: 'post',
	route: '/jobs/:jobId/destroy',
	requires: {
		jobId: 'string',
	},
	returns: {},
});

module.exports = destroy;