this["hbs"] = this["hbs"] || {};
this["hbs"]["dialog"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span>You made a new map!</span>\n\n<span>Title: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.map : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n\n<span>Budget: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.map : depth0)) != null ? stack1.budget : stack1), depth0))
    + "</span>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});