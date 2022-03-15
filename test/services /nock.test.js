const nock = require('nock');

var testNock = nock("http://127.0.0.1:3000");

it('should give status 200 for showinf results', () => {

      testNock.get('/')
      .reply(200, {
        results: [{ name: 'Dominic' }],
      });

    // return query
    //   .then(res => res.results[0].name)
    //   .then(res => expect(res).toEqual('Dominic'));
  });

it('should give status 200 for creating an entry', () => {

    testNock.post('/')
    .reply(201, 'entry created in database!');
  // return query
  //   .getRandomUser()
  //   .then(res => res.results[0].name)
  //   .then(res => expect(res).toEqual('Dominic'));
});

it('should give status 200 for updating an entry', () => {

    testNock.patch('/:id')
    .reply(204, 'entry changed in database');
});

it('should give status 200 for deleting an entry', () => {

    testNock.delete('/:id')
    .reply(204, 'entry deleted from database');
});