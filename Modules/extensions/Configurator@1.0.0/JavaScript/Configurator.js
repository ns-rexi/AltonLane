/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Configurator
define('Configurator'
,	[	
		'Configurator.Router'

	,	'underscore'
	,	'Utils'
	]
,	function (
		ConfiguratorRouter

	,	_
	)
{
	'use strict';

	//@class Configurator @extend ApplicationModule
	return	{ 
		//@method mountToApp
		//@param {ApplicationSkeleton} application
		//@return {ConfiguratorRouter} Returns an instance of the Configurator router used by the current module
	 	mountToApp: function (application)
		{
			return new ConfiguratorRouter(application);
		}
	};
});
