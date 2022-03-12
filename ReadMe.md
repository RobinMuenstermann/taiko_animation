# Taiko Animation

This small Gauge Taiko presents an example, that Taiko has problems with animations, which leads to flakiness.
However, since the system performance influences the time until an element is clicked, the test sometimes work and sometimes do not work.



# Installation
Install NodeJs

Install Gauge:
https://docs.gauge.org/getting_started/installing-gauge.html?os=windows&language=javascript&ide=vscode

Perform `npm install` in the root directory

# Run examples
Run `npm run test-animation-fails` and see, that the wrong animated button "Option 2" instead of "Option 2" is clicked, depending on execution speed.

Run `test-with-wait` to see a stable test, but it would be nice, if Taiko does the wait implicitely, if as long as an element is changing its position.
