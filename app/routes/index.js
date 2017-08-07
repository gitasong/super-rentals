import Ember from 'ember';

var announcements = [{
  id: 1,
  location: "Acapulco, Mexico",
  message: "Tropical storm warning; residents told to evacuate"
}, {
  id: 2,
  location: "Pago Pago, American Samoa",
  message: "Smoke signals seen in distance"
}, {
  id: 3,
  location: "Canberra, Australia",
  message: "Town overrun by koala bears"
}];

export default Ember.Route.extend({
  model() {
    return announcements;
    return this.store.findAll('rental');
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
