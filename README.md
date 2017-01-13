# CookQuest

#Description
This app hosts questions and answers on cooking related topics. Users can answer previously posted questions or post questions of their own.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd JS-cook-quest`
* `npm install`
* `bower install`
* create apiKey.js file within the config folder
* Put the following into the apiKey.js file:
  exports.apiKey = {
    apiKey: "Your API Key Here",
}
* Create an account with firebase.google.com and create new project
* Select the add firebase to your web app button to view your API key and replace it in the exports file.
* Also replace authDomain, databaseURL, and storageBucket info in the environment.js file. 


## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
