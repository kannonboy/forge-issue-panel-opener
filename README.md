# Forge Issue Panel Opener

This project is a [Forge](https://developer.atlassian.com/platform/forge/) app for Jira that ensures a custom issue panel is expanded by default (i.e. will not require the user to click the button in the action button in the toolbar). 

This is a workaround for https://ecosystem.atlassian.net/browse/FRGE-734 and based on the approach pioneered by Vladislav Bykouski & David Pinn described in the comments.

## Features

- Adds a custom issue panel ("Open By Default") to Jira issues.
- Uses a trigger to set a special entity property on issue creation, ensuring the panel is open by default.
- Built with Forge, using UI Kit for the frontend and Node.js for backend logic.

## Requirements

- [Forge CLI](https://developer.atlassian.com/platform/forge/getting-started/)
- Node.js 18 or later

## Quick Start

0. **Register your own copy of the app**
   ```
   forge register
   ```

1. **Install dependencies**  
   ```
   npm install
   ```

2. **Build and deploy your app**
   ```
   forge deploy
   ```

3. **Install your app in an Atlassian site**
   ```
   forge install
   ```

4. **Develop locally with tunnel**
   ```
   forge tunnel
   ```

5. **Modify the app**
   - Frontend: `src/frontend/index.jsx`
   - Backend/trigger: `src/trigger.js`
   - Manifest: `manifest.yml`

## How it Works

- The app registers an [issue panel module](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-issue-panel/) and a [trigger](https://developer.atlassian.com/platform/forge/manifest-reference/modules/trigger/) for issue creation.
- When a new issue is created, the trigger sets a property to ensure the panel is open by default.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
