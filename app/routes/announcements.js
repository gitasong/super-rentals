import Ember from 'ember';

var announcements = [{
  id: 1,
  type: "warning",
  location: "Acapulco, Mexico",
  message: "Tropical storm warning; residents told to evacuate"
}, {
  id: 2,
  type: "info",
  location: "Pago Pago, American Samoa",
  message: "Smoke signals seen in distance"
}, {
  id: 3,
  type: "warning",
  location: "Canberra, Australia",
  message: "Town overrun by koala bears"
}];

export default Ember.Route.extend({
  model() {
    return announcements;
  },
});
