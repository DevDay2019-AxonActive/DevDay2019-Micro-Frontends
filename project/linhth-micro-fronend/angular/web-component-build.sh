#!/bin/bash
ng build --prod --output-hashing none --single-bundle true
mv dist/micro-frontend/main.js ../book-system/book-summary-tile.js