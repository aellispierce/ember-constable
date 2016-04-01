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
    body: 'Hello, is it me youre looking for',
  },
  {
    id: 2,
    title: 'How are you',
    body: 'Cause I wonder where you are',
  },
  {
    id: 3,
    title: 'Its so typical of me to talk about myself, Im sorry',
    body: 'And I wonder what you do',
  },
  {
    id: 4,
    title: 'I hope',
    body: 'Are you somehwere feeling lonely',
  },
  {
    id: 5,
    title: 'That youre well',
    body: 'Or is someone loving you',
  },
  {
    id: 6,
    title: 'Did you ever make it out of that town where nothing ever happened?',
    body: 'Tell me how to win your heart',
  },
  ]
});

export default Announcement;
