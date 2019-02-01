/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module Configurator
define(
	'Configurator.List.View'
,	[ 
		'SC.Configuration'	
	,	'configurator_list.tpl'
	,	'Backbone'
	,	'Backbone.CompositeView'
	,	'Backbone.CollectionView'	
	,	'underscore'
	,	'jQuery'
	,	'Utils'
	
	]
,	function (
		Configuration
	,	configurator_list_tpl
	,	Backbone
	,	BackboneCompositeView
	,	BackboneCollectionView	
	,	_
	,	jQuery
	)
{
	'use strict';

	// @class Configurator.List.View @extends Backbone.View
	return Backbone.View.extend({

		//@property {Function} template
		template: configurator_list_tpl

		//@property {String} className
	,	className: 'ConfiguratorListView'

		//@property {String} title
	,	title: _('Configurator').translate()

		//@property {String} page_header
	,	page_header: _('Configurator').translate()

		//@property {Object} attributes
	,	attributes: {
			'class': 'ConfiguratorListView'
		}
	,	events: {
			'click .back' : 'goBack'
		}

		//@method initialize
		//@param {application:AplpicationSkeleton} options
		//@return {Void}
	,	initialize: function (options)
		{
			this.application = options.application; 			  
			this.model.on('sync', _.bind(this.render, this));
		} 
 		//@method getUrlParameter
 		//@return querystring value
	,	getUrlParameter: function(name) {
			var url = window.location.href;
		    name = name.replace(/[\[\]]/g, '\\$&');
		    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		        results = regex.exec(url);
		    if (!results) return null;
		    if (!results[2]) return '';
		    return decodeURIComponent(results[2].replace(/\+/g, ' '));
	 	}	
	 	//depricated function
	,	getItemId: function(modelId){
			//var url='https://forms.netsuite.com/app/site/hosting/scriptlet.nl?script=547&deploy=1&compid=3556903_SB1&h=a160ec1fa4d5b8c88fa0';
				var url='https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl?script=548&deploy=1&compid=3556903&h=4005793ad043ac6fc0f5';
				var obj={};
				obj.id=modelId;
				var result = '';
				 jQuery.ajax({
					 url: url,
					 type: "get",
					 data: obj,
					 async: false,
					 success: function(data) {
						 result = data;
					 },
					 error: function(e) {
						 
					 }
				 });

		 	return result;
				 
		}

	, 	goBack:function(){
		window.history.go(-1);
	}

	,	getId:function(modelId){ 
			this.model.fetch({
				data:{
					modelId:modelId
				}
			});
			if(this.model.get('itemid'))
			{
				this.model.off('sync');
			}
			return this.model.get('itemid');
	}


		// @method getContext
		// @return {Configurator.List.View.Context}
	,	getContext: function()
		{
			debugger;			 
			try{
			var custom=this.getUrlParameter('custom')
			,	sku=this.getUrlParameter('sku')
			,	modelId=sku.split('-')[1]
			,	guid=this.getUrlParameter('guid')
			,	idcs=this.getUrlParameter('idcs')
			,	scale=this.getUrlParameter('scale')
			,	size=this.getUrlParameter('size')
			,	size=size.replace(/,/g,'.')
			,	width=this.getUrlParameter('width')
			//,	itemId=this.getItemId(modelId)
			,	itemId=this.getId(modelId) || '0'
			,	itemId=Number(itemId) > 0 ? itemId : ''
			,	companyID=SC.ENVIRONMENT.companyId
			,	url='/app/site/backend/additemtocart.nl?c='+companyID+'&buyid=multi&multi=';
				url+=itemId+',1,custcol_custom_shoe_guid|'+guid+'||custcol_custom_shoe_scale|'+scale+'||custcol_custom_shoe_size|'+size+'||custcol_custom_shoe_width|'+width+'||custcol_custom_shoe_idcs|'+idcs;
				if(modelId && itemId)
				{
					 
					jQuery.get(url,function(data ,status){
						if(status=='success')
							{
							window.location.href=SC.SESSION.touchpoints.viewcart;
							}
					}); 
				}
				else{
					//window.history.go(-1);
				}
				
			}
			catch(e){
				window.location.href=SC.SESSION.touchpoints.home;
			}
			// @class Configurator.List.View.Context
			return {
				// @property {String} pageHeader
				pageHeader: this.page_header
				// @property {Array} collection
			,	name: 'Preparing to Add to cart...'
			};
			// @class Configurator.List.View
		}
	});
});