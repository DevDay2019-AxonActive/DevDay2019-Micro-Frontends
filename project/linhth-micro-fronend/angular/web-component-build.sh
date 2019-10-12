#!/bin/bash
ng build --prod --output-hashing none --single-bundle true --keep-polyfills true
mv dist/micro-frontend/main.js consumer/ngElements.js
mv dist/micro-frontend/scripts.js consumer/scripts.js # can be shared across Angular Elements
mv dist/micro-frontend/polyfills.js consumer/polyfills.js # consumer has to import it, we do not need to include it (remove keep-profills)