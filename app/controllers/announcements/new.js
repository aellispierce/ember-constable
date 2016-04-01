import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createAnnouncement(model) {
      if(model.title === "" || model.title === "") {
        this.set('error', 'Title and body are required');
      } else {
        const announcement = this.store.createRecord('announcement', model);
        announcement.save().then((announcement) => {
          this.transitionToRoute('announcements.announcement', announcement);
        });
      }
    },
  },
});
