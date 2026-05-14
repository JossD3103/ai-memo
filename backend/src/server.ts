import Fastify, { FastifyInstance } from 'fastify';

const server: FastifyInstance = Fastify({
  logger: true
});

// Test endpoint
server.get('/', async (request, reply) => {
  return { status: 'ok', message: 'Hello from Fastify & TypeScript!' };
});

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
    server.log.info(`Server running at http://localhost:3000/`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
