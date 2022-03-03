const { TestWatcher } = require('jest');
const { execMap } = require('nodemon/lib/config/defaults');
const setupTestEnvironment = require('../setupTestEnvironment');

const fastify = setupTestEnvironment();

test('should create an entry in the db through POST', async() => {
    const requestPayload = {
        name: 'Mariam',
        dueDate: '2022-05-12T09:52:20.000Z'
    }

    const serverResponse = await fastify.inject({
        url:'/',
        method: 'POST',
        payload: requestPayload
    });

    expect(serverResponse.json().name).toEqual(requestPayload.title)
    expect(serverResponse.json().dueDate).toEqual(requestPayload.dueDate)

    console.warn(serverResponse.payload)
});