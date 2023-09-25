'use strict';

/**
 * executor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::executor.executor');
