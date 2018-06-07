# osascript-promise

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Execute Applescript from Node via Promises. A wrapper around [node-osascript](https://github.com/FWeinb/node-osascript) by [@fweinb](https://github.com/FWeinb). Pairs well with [`await` and `async`](https://ponyfoo.com/articles/understanding-javascript-async-await).

```javascript
var osascript = require('osascript-promise')

osascript('tell application "Google Chrome" to get URL of active tab of first window')
	.then(function (result) {
		console.log(result)
	})
```

Works using [any-promise](https://github.com/kevinbeaty/any-promise), so native promises, bluebird, rsvp, when, and q are all supported without any changes to your code.

## Usage

[![NPM](https://nodei.co/npm/osascript-promise.png)](https://www.npmjs.com/package/osascript-promise)

This promisifies the `execute` method from [node-osascript](https://github.com/FWeinb/node-osascript).

#### `osascript(command[, variables])`

Pass your Applescript in via the `command` variable. Multiline scripts work well using the [ES6 template string](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings) syntax:

```javascript
osascript(`
	tell application "Safari"
		activate
		open location "http://example.com"
	end tell
`).then(() => console.log('Success!'))
```

Applescript variables can be passed to the script as an object in the second argument:

```javascript
osascript('display dialog message', { message: 'Hello from Node' })
	.then(() => console.log('Success!'))
```

## License

MIT, see [LICENSE.md](http://github.com/rosszurowski/osascript-promise/blob/master/LICENSE.md) for details.
