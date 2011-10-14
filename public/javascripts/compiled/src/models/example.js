(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  $(function() {
    return window.Example = (function() {
      __extends(Example, Backbone.Model);
      function Example() {
        Example.__super__.constructor.apply(this, arguments);
      }
      Example.prototype.defaults = {
        title: "Hello, World"
      };
      return Example;
    })();
  });
}).call(this);
