import DS from 'ember-data';

const { attr } = DS;

const Announcement = DS.Model.extend({
  title: attr('string'),
  body: attr('string'),
  interestNames: attr('string')
});

Announcement.reopenClass({
  FIXTURES: [
  {
    id: 1,
    title: 'Hello',
    body: 'Goodbye'
  },
  {
    id: 2,
    title: 'How are you',
    body: 'Goodbye',
  },
  {
    id: 3,
    title: 'Its so typical of me to talk about myself, Im sorry',
    body: 'Goodbye',
  },
  {
    id: 4,
    title: 'I hope',
    body: 'Goodbye',
  },
  {
    id: 5,
    title: 'That youre well',
    body: 'Goodbye',
  },
  {
    id: 6,
    title: 'Did you ever make it out of that town where nothing ever happened?',
    body: 'Goodbye',
  },
  ]
});

export default Announcement;
