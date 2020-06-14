var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/word/:myword', function(req, res, next) {
  console.log(`the word is ${req.params.myword}`);
  res.render('index', { title: `Word=${req.params.myword}` });
});


router.post("/", function(req, res, next) {
    let payload = req.body;
    res.sendStatus(200);

    if (payload.event.type === "app_mention") {
        if (payload.event.text.includes("tell me a joke")) {
            // Make call to chat.postMessage using bot's token
        }
    }
    if (payload.event.type === "message") {
        let response_text;
        if (payload.event.text.includes("Who's there?")) {
            response_text = "A bot user";
        }
        if (payload.event.text.includes("Bot user who?")) {
            response_text = "No, I'm a bot user. I don't understand jokes.";
        }
        if (response_text !== undefined) {
            // Make call to chat.postMessage sending response_text using bot's token
        }
    }
});

module.exports = router;
