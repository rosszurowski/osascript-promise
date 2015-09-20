
var Promise = require('any-promise')
var execute = require('node-osascript').execute

module.exports = function (command, opts) {
	return new Promise(function (resolve, reject) {
		execute(command, opts, function (err, res) {
			if (err) return reject(err)
			resolve(res)
		})
	})
}
