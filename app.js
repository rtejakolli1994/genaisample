require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sendReminder } = require('./slackBot');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

// Example route to schedule a reminder
app.post('/schedule-reminder', async (req, res) => {
    const { channelId, message } = req.body;

    if (!channelId || !message) {
        return res.status(400).send("Missing required fields: channelId and message.");
    }

    try {
        await sendReminder(channelId, message);
        res.status(200).send("Reminder scheduled successfully.");
    } catch (error) {
        res.status(500).send("Failed to schedule reminder.");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
