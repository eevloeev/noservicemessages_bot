import config from '#config.mjs';
import { request } from '#botApiClient.mjs';

let offset = 0;
while (true) {
  const response = await request('getUpdates', {
    offset,
    limit: 100,
    timeout: 60, // 1 minute
    allowed_updates: ['message'],
  });

  for (const update of response.data.result) {
    if (
      'message' in update
      && config.allowedChats.includes(update.message.chat.id)
      && ('left_chat_member' in update.message || 'new_chat_members' in update.message)
    ) {
      await request('deleteMessage', {
        chat_id: update.message.chat.id,
        message_id: update.message.message_id,
      });
    }
    offset = Math.max(offset, update.update_id + 1);
  }
};