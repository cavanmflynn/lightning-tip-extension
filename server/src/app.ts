import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { UserController } from './controllers/UserController';

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

/**
 * Create a new express server instance.
 */
const expressApp = createExpressServer({
  controllers: [UserController],
});

/**
 * Start the express app.
 */
expressApp.listen(3000);

console.log('Server is up and running at port 3000');
