define(['backbone.marionette', './ModuleItemView', 'hbs!../templates/modules_listing'],
  function (Marionette, ModuleItemView, template) {
    'use strict';

    return Marionette.CompositeView.extend({
      tagName: 'div',
      className: 'row',
      childView: ModuleItemView,
      // childViewContainer: 'div',
      template: template
    });
  });
