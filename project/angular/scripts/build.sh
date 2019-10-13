#!/bin/bash
ng build --prod --outputHashing=none --outputPath=dist
mv dist/main.js ../book-system/book-summary-tile.js