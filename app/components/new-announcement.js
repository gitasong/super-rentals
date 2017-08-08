import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncment: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncment', true);
    }
  }
});
