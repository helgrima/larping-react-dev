# Larping React front end developer

![dog](/public/dog.jfif)

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