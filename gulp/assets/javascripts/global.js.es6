/**
 * Main js starting point for regular users
 */

require('angular');
require('./../../../bower_components/angular-truncate/src/truncate');
var cbrwizard = require('./application/angular/modules/cbrwizard');
var cbrwizardFilters = require('./application/angular/modules/cbrwizard_filters');
var ArticlesModel = require('./application/angular/services/articles_model');
var PagesIndexController = require('./application/angular/controllers/pages_index_controller');
var ArticlesDirective = require('./application/angular/directives/articles_directive');
var TagsDirective = require('./application/angular/directives/tags_directive');
var LocaleConfig = require('./application/config/locale');
var register = require('./../../../vendor/assets/javascripts/angular/register');

var TrianglesEffect = require('./application/effects/three_js/triangles_effect');

register('cbrwizard')
  .controller('PagesIndexController', PagesIndexController)
  .service('ArticlesModel', ArticlesModel)
  .directive('articlesDirective', ArticlesDirective)
  .directive('tagsDirective', TagsDirective);

/**
 * Configures app and bootstraps angular
 */
$(function(){
  LocaleConfig.updateLocales();
  angular.bootstrap(angular.element(document.body), ['cbrwizard', 'truncate', 'cbrwizardFilters']);

  // todo: launch with angular, not here
  new TrianglesEffect(
    $('.main-footer')[0]
  );
});

// todo: convert all comments to good styling