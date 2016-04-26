var greeter = module.exports = exports = require(__dirname + '/lib/greeter');

process.stdout.write(greeter.greet(process.argv[2] || 'Stranger') + '\n');
