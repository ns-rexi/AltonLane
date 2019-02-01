/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Configurator
define(
		'Configurator.Router'
,	[
		'Configurator.Model'
	,	'Configurator.Collection'
	,	'Configurator.List.View'
	,	'AjaxRequestsKiller'
	,	'Backbone'
	,	'jQuery'
	]
,	function (
		Model
	,	Collection
	,	ConfiguratorListView
	,	AjaxRequestsKiller
	,	Backbone
	,	jQuery
	)
{
	'use strict';

	// @class Configurator.Router @extends Backbone.Router
	return Backbone.Router.extend({

		//@property {Object} routes
		routes: {
			'configurator': 'configurator' 
		}

		//@method initialize
		//@param {ApplicationSkeleton} application
		//@return {Void}
	,	initialize: function (application)
		{
			this.application = application;
		}

		//@method configurator Handle the Configurators route and show the Configurator List View
		//@return {Void}
	,	configurator: function ()
		{
			//debugger;
			//var x=location;
			var model = new Model();
			var view = new ConfiguratorListView({
					application: this.application
				,	model: model
				});
			view.showContent();
		}
 
	});
});
