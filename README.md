# REPL.it calls testing

## Setup :
Create a file named `api-token.js` with the following content:

```js
const API_TOKEN={/*YOUR TOKEN*/};
```

## generator.py
As the assertions must be sent to REPL with the user-submited code, the challenge source code files are converted to Javascript strings.

Use `python generator.py` to generate the test and challenge js files.

## License
This is licensed under the MIT license. See LICENSE for more information.
