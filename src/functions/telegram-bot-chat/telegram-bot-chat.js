

const fetch = require("node-fetch");
exports.handler = async (event, context) => {
    try {
        /*return { statusCode: 200, body: `Hello from a serverless function!` };*/

        const telegram = require('telegram-bot-api');
        const botToken = '1022774009:AAEm0YwjwRaXV-NoqrQrexv8_yQ6S00XO-Y';


        const api = new telegram({
            token: botToken,
            updates: {
                enabled: true
            }
        });

        api.on('message', function(message)
        {
            // Received text message
            console.log(message);
            api.sendMessage(`YOU SAID : ${message}`);
        });

        api.on('inline.query', function(message)
        {
            // Received inline query
            console.log(message);
        });

        api.on('inline.result', function(message)
        {
            // Received chosen inline result
            console.log(message);
        });

        api.on('inline.callback.query', function(message)
        {
            // New incoming callback query
            console.log(message);
        });

        api.on('edited.message', function(message)
        {
            // Message that was edited
            console.log(message);
        });

        api.on('update', function(message)
        {
            // Generic update object
            // Subscribe on it in case if you want to handle all possible
            // event types in one callback
            console.log(message);
        });
    } catch (err) {
        return { statusCode: 500, body: err.toString() };
    }
};
