# osascript-promise

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Execute Applescript from Node via Promises. A wrapper around [node-osascript](https://github.com/FWeinb/node-osascript) by [@fweinb](https://github.com/FWeinb). Pairs well with [tj/co](https://github.com/tj/co).

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




## License

MIT, see [LICENSE.md](http://github.com/rosszurowski/osascript-promise/blob/master/LICENSE.md) for details.
