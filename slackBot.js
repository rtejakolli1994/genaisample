const { WebClient } = require('@slack/web-api');

const slackBot = new WebClient(process.env.SLACK_BOT_TOKEN);

// Function to send a reminder message to a Slack channel
async function sendReminder(channelId, message) {
    try {
        await slackBot.chat.postMessage({
            channel: channelId,
            text: message,
        });
        console.log("Reminder sent successfully!");
    } catch (error) {
        console.error("Error sending reminder:", error);
    }
}

// Export the bot functionality
module.exports = {
    sendReminder,
};
