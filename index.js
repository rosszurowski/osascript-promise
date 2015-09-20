
var Promise = require('any-promise')
var execute = require('node-osascript').execute

module.exports = function (command) {
	return new Promise(function (resolve, reject) {
		execute(command, function (err, res) {
			if (err) return reject(err)
			resolve(res)
		})
	})
}
