import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('announcements', {path: "/"}, function() {
    this.route('announcement', {path: "/announcement/:id"});
    this.route('new', { path: '/announcements/new'});
  });
});

export default Router;
