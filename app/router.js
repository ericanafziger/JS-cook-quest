import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question', {path: '/question/:question_id'});
  this.route('all-questions');
});

export default Router;
