"use strict";
const {
    goto,
    click,
    text,
    waitFor,
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

step("Open <website> website", async function (website) {
    await goto(website);
});

step("When user clicks <targetText>", async function (targetText) {
    await click(targetText);
});

step("Then page contains <targetText>", async function (targetText) {
    assert.ok(await text(targetText).exists());
});

step("Wait for <seconds> seconds", async function (seconds) {
    await waitFor(seconds * 1000);
});
