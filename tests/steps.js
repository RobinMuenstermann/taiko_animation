"use strict";
const {
    goto,
    click,
    text,
    waitFor,
    evaluate,
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

function detectPosition(targetElement) {
    return evaluate(targetElement, (element, args) => {
        var rect = element.getBoundingClientRect();

        // TODO Could use some rounding, if the element is somehow moving by "a bit":
        /*rect.top = Math.floor(rect.top);
        rect.right = Math.floor(rect.right);
        rect.bottom = Math.floor(rect.bottom);
        rect.left = Math.floor(rect.left);
        rect.x = Math.floor(rect.x);
        rect.y = Math.floor(rect.y);
        rect.width = Math.floor(rect.width);
        rect.height = Math.floor(rect.height);*/
        return JSON.stringify(rect);
    });
}

async function waitForAnimation(targetElement) {
    const animationTimeout = 50;
    const maxAnimationTime = 1000;
    const maxIterations = Math.ceil(maxAnimationTime/animationTimeout);

    let oldPosition = await detectPosition(targetElement);
    for (let i = 0; i < maxIterations; i++) {
        await waitFor(animationTimeout);
        let newPosition = await detectPosition(targetElement);
        console.log("Position old", oldPosition);
        console.log("Position new", newPosition);
        if (oldPosition === newPosition) {
            console.log("Animation finished");
            // Animation is finished
            return;
        }
        console.log("Animation detected, waiting.");
        oldPosition = newPosition;
    }
    throw Error("Element kept moving or could not been found" , targetText);
}

// TODO has no good error handling, if the element does not exists
async function smartClickText(targetText) {
    await waitForAnimation(text(targetText));
    console.log("Animation finished, clicking: " , targetText);
    await click(targetText);
}

step("When user smart clicks <targetText>", async function (targetText) {
   await smartClickText(targetText);
});
