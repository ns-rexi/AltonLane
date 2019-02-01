/*
  © 2017 NetSuite Inc.
  User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
  provided, however, if you are an authorized user with a NetSuite account or log-in, you
  may use this code subject to the terms that govern your access and use.
*/

// @module Configurator
define(
    'Configurator.Collection'
, [    
    'Backbone'
  , 'underscore'
  , 'jQuery'
  , 'Configurator.Model'
  ]
, function (
  
   Backbone
  , _
  , jQuery
  , Model
  )
{
  return Backbone.Collection.extend({
      model: Model,
      url: 'services/Configurator.Service.ss'
    });
});