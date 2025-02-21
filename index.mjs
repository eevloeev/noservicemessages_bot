import { createServer } from 'node:http';

const config = {
  port: process.env.PORT || 3000,
  telgramBotToken: process.env.TELEGRAM_BOT_TOKEN,
};

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end({ message: 'Hello, world!' });
});

server.listen(config.port, 'localhost', () => {
  console.log(`Server is running on port: ${config.port}`);
});