if (!process.env.BOT_TOKEN) {
  throw new Error('BOT_TOKEN is required');
}

if (!process.env.ALLOWED_CHATS) {
  throw new Error('ALLOWED_CHATS is required');
}

const config = {
  botToken: process.env.BOT_TOKEN,
  allowedChats: process.env.ALLOWED_CHATS.split(',').map(chatId => parseInt(chatId, 10)),
};

export default config;