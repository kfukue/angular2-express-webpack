# Angular2 Express Webpack Starter


### Quick start
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts) or `server.ts` inside [`/server/server.ts`](/server/server.ts)

```bash
# clone our repo
git clone https://github.com/marc-harry/angular2-express-webpack.git 

# change directory to our repo
cd angular2-webpack

# install the repo with npm
npm install

# install the typescript typings with tsd
tsd install

# start the server
npm start 
```
go to [http://localhost:3000](http://localhost:3000) in your browser

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.1.1`+ and NPM `2.10.0`+

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server. Changes to the angular 2 front end will be build and available after browser refresh

Use `gulp` for the express app and the frontend to both be listen to for changes.
 
### server
```bash
npm run server
```

## Other commands 

### build files
```bash
npm run build  # or webpack  # or gulp
```

### run tests 
```bash
npm run test  # or karma start
```

### run webdriver (for end-to-end)
```bash
npm run webdriver-start  # or webdriver-manager start
```

### run end-to-end tests
```bash
# make sure you have webdriver running and a sever for the client app
npm run e2e  # or protractor
```

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 1.5 includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## .d.ts Typings
The TSD typings in `tsd_typings/` are autogenerated.

```
npm install --global tsd
```


