/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// OrderHistory.ServiceController.js
// ----------------
// Service to manage placed orders requests
define(
	'Configurator.ServiceController'
,	[
		'ServiceController'
	,	'Configurator.Model'
	]
,	function(
		ServiceController
	,	ConfiguratorModel
	)
	{
		'use strict';
		console.log('ConfiguratorModel',ConfiguratorModel);
		// @class Configurator.ServiceController Manage placed orders requests
		// @extend ServiceController
		return ServiceController.extend({

			// @property {String} name Mandatory for all ssp-libraries model
			name: 'Configurator.ServiceController'

			 
			// @method get The call to ConfiguratorModel.Service.ss with http method 'get' is managed by this function
			// @return {ConfiguratorModel.Model.Attributes | Array<ConfiguratorModel.Model.Attributes>} one or all user ConfiguratorModeles
		,	get: function()
			{
				var id = this.request.getParameter('modelId');			
				return ConfiguratorModel.get(id);
			} 
		});
	}
);