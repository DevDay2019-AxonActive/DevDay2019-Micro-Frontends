### Install http-server
Run command: npm install -g http-server

### Run Sub Projects
Go to sub projects: angular-book-summary-tile, react-book-summary-tile. In earch sub-project, run commands:
`npm install`
`npm run publish` (⚠ **keep terminals open**)

### Run Main Project
Go to main project: book-library. Run commands:
`npm install`
`npm run start`

### Open Application
URL: [localhost:4200](localhost:4200)

### Build and deploy to server
1. Run deploy script `sh deploy.sh`
2. Copy `web-gui.zip` to your server
3. On your server, `unzip web-gui.zip`
4. Run `docker-compose stop && docker-compose rm && docker-compose build && docker-compose start`
