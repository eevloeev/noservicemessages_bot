# No Service Messages Bot

A bot that removes service messages from Telegram chats.

You can find this bot on Telegram: [@noservicemessages_bot](https://t.me/noservicemessages_bot).

Stack: Vanilla JavaScript, ES Modules, Node.js, zero dependencies.

## Usage

Deploy the bot as a Docker container with following environment variables:

- `BOT_TOKEN` - Telegram bot token
- `ALLOWED_CHATS` - comma-separated list of chat IDs where the bot should work

For example, you can use ready-made Docker image [eevloeev/noservicemessages_bot](https://hub.docker.com/r/eevloeev/noservicemessages_bot) from Docker Hub for quick deployment:

```bash
docker run -d --name no-service-messages-bot \
  -e BOT_TOKEN='<YOUR_TOKEN>' \
  -e ALLOWED_CHATS='<YOUR_CHATS>' \
  eevloeev/noservicemessages_bot
```

## Support

If you like this project, you can support it by starring 🌟.

If you have any questions, feel free to contact me on Telegram: [@eevloeev](https://t.me/eevloeev).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
