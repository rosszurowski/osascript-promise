
var test = require('tape').test
var Promise = require('any-promise')
var osascript = require('./')

test ('osascript-promise', function (t) {
	t.plan(5)

	t.assert(osascript('5 + 5') instanceof Promise, 'returns promise')

	osascript('8 ^ 2')
		.then((result) => t.equal(result, 64.0, 'returns script result'))

	osascript('dsklfjs + dlkdl')
		.catch((err) => t.assert(err != 'undefined', 'returns errors on script failure'))

	osascript('display dialog message', { message: 'Hello from Node' })
		.then(() => t.ok(true, 'allows variable substitution'))

	osascript(`
		display dialog "Press Any Button" buttons {"A", "B", "C"}
		set DlogResult to result
		return result
	`).then((result) => {
			t.assert(result["button returned"].length > 0, 'returns dialog results')
		})

})
