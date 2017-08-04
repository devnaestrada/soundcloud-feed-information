var questions = module.exports = [
  {
    type: 'input',
    name: 'hometitle',
    message: 'Please type the parameter: home-title'
  },
  {
    type: 'checkbox',
    name: 'type',
    message: 'Episode Type',
    choices: [
      {
        name: 'Pauta'
      },
      {
        name: 'Entrevista'
      }
    ]
  },
  {
    type: 'input',
    name: 'tags',
    message: 'Write all tags, example: [\'Pocast, Front-end\']'
  }
];
