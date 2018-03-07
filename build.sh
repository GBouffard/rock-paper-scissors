#!/bin/bash

echo "Installing node packages"
npm install
echo "Installing node packages complete"

echo "Running unit tests"
npm test
echo "Unit testsing comlete"

echo "Starting Guillaume Rock Paper Scissors"
npm start