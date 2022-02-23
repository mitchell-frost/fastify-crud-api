const fastify = require('fastify');
const PORT = process.env.PORT || 3000;
const app = fastify({ 
  logger: true 
});

const dbconnector = require('./db');
const route = require('./routes');

app.register(dbconnector);
app.register(route);

// Run the server
const start = () => {
  app.listen(PORT, (err, address) => {
    if (err) {
      fastify.log.error(err);
      // console.log("The process id is ", process.pid);
      process.exit(1);
    }
  });
};

start();