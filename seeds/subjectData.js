const { Subject } = require('../models');

// for testing
const subjectData = [
  {
   title: 'HTML Elements',
   definition: 'is defined by a start tag, some content, and an end tag.',
   example: '<tagname>Content goes here...</tagname>',
   refID: 1,
  },
  {
    title: 'HTML Attributes',
    definition: 'provide additional information about HTML elements.',
    example: '<tagname>Content goes here...</tagname>',
    refID: 1,
  },
  {
    title: 'HTML Heading ',
    definition: 'are defined with the <h1> to <h6> tags, <h1> defines the most important heading, and <h6> defines the least important heading',
    example: '<tagname>Content goes here...</tagname>',
    refID: 1,
  },
  {
    title: 'HTML Elements ',
    definition: 'is defined by a start tag, some content, and an end tag.',
    example: 'Heading 1 \nHeading 2 \nHeading 3 \nHeading 4 \nHeading 5 \nHeading 6',
    refID: 1,
  },
  {
    title: 'HTML Elements ',
    definition: 'is defined by a start tag, some content, and an end tag.',
    example: '<tagname>Content goes here...</tagname>',
    refID: 1,
  },
  {
    title: 'HTML Elements ',
    definition: 'is defined by a start tag, some content, and an end tag.',
    example: '<tagname>Content goes here...</tagname>',
    topic_id: 2,
  },
  {
    title: 'HTML Elements ',
    definition: 'is defined by a start tag, some content, and an end tag.',
    example: '<tagname>Content goes here...</tagname>',
    topic_id: 3,
  },
];

const seedSubjects = () => Subject.bulkCreate(subjectData);

module.exports = seedSubjects;

