
const TelegramBot = require('node-telegram-bot-api');
const token = '1022774009:AAEm0YwjwRaXV-NoqrQrexv8_yQ6S00XO-Y';

exports.handler = async (event, context) => {
    try {
        // return { statusCode: 200, body: `Hello from a serverless function!` };
        // Create a bot that uses 'polling' to fetch new updates
        const bot = new TelegramBot(token, {polling: true});

        // Matches "/echo [whatever]"
        bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message

            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"

            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);
        });

        // Listen for any kind of message. There are different kinds of
        // messages.
        bot.on('message', (msg) => {
            const chatId = msg.chat.id;

            // send a message to the chat acknowledging receipt of their message
            bot.sendMessage(chatId, 'Received your message');
        });
    } catch (err) {
        return { statusCode: 500, body: err.toString() };
    }
};



