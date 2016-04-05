const greeter = module.exports = function(name) {
  this.name= name;
};

greeter.prototype.greet = function(name) {
  return "Hello " + name;
};
