# Forge Issue Panel Opener

This project is a [Forge](https://developer.atlassian.com/platform/forge/) app for Jira that automatically opens a custom issue panel by default when a new issue is created.

## Features

- Adds a custom issue panel ("Open By Default") to Jira issues.
- Uses a trigger to set an entity property on issue creation, ensuring the panel is open by default.
- Built with Forge, using React for the frontend and Node.js for backend logic.

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
