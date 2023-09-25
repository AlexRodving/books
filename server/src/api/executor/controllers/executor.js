'use strict';

/**
 * executor controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::executor.executor');
