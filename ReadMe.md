# Taiko Animation Problem

This small Gauge/Taiko project presents should demonstrate, that Taiko has problems with animations, which leads to flakiness.
Since the system performance influences the time until an element is clicked, the test sometimes work and sometimes do not work.



# Installation
Install NodeJs

Install Gauge:
https://docs.gauge.org/getting_started/installing-gauge.html?os=windows&language=javascript&ide=vscode

Perform `npm install` in the root directory

# Run examples
Run `npm run test-animation-fails` and see, that the wrong animated button "Option 2" instead of "Option 1" is clicked, depending on execution speed.

Run `npm run test-with-wait` to see a stable test, but it would be nice, if Taiko does the wait implicitely as long as an element is changing its position.

Run `npm run smart-click` to see an example, how an animation could be detected. However, the error handling is not good here.

