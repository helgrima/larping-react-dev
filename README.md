# Larping React front end developer

![dog](/public/dog.jfif)

use nodejs version > 16.13.2

To install `npm install`

To update `npm update`

To run `npm start`

To debug, use following `launch.json`
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Chrome",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}/src",
            "sourceMapPathOverrides": {
                "webpack:///src/*": "${webRoot}/*"
            }
        }
    ]
}
```
See this all in action straight from `release` https://full-of-dogs.netlify.app/
