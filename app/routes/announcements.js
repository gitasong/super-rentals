import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },

  actions: {
    destroyAnnouncement(announcement) {
      console.log('hello');
      announcement.destroyRecord();
      this.transitionTo('announcements');
    }
  }
});
