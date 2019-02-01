/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// Configurator.Model.js
// ----------
// Handles fetching orders
define(
	'Configurator.Model'
,	[		 
	 	'SC.Model'	 
	,	'underscore'
	]
, function (SCModel) {
    return SCModel.extend({
          name: 'Configurator '
        , get: function(id) {  
			//var response=nlapiRequestURL('https://forms.netsuite.com/app/site/hosting/scriptlet.nl?script=547&deploy=1&compid=3556903_SB1&h=a160ec1fa4d5b8c88fa0&id='+id);
			var response=nlapiRequestURL('https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl?script=548&deploy=1&compid=3556903&h=4005793ad043ac6fc0f5&id='+id);
			
			var itemSearch=response.getBody();
			return {
					itemid: itemSearch                         
				}; 
      }
    });
  }	

);
