/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/newline-after-import
const { addNoteHandler } = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
];
module.exports = routes;
