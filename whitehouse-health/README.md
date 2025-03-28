# White House Health Systems React Website

This project is a React-based implementation of the White House Health Systems website, designed for deployment on Firebase hosting.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher recommended)
- Firebase CLI (for deployment)

### Installation

1. Clone the repository:
   ```
   git clone [repository URL]
   cd whitehouse-health
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Install the Firebase CLI (if you haven't already):
   ```
   npm install -g firebase-tools
   ```

### Development

To run the application in development mode:

```
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Firebase Setup and Deployment

1. Create a Firebase project:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the instructions to create a new project

2. Update Firebase configuration:
   - In the Firebase console, go to Project Settings > General
   - Scroll down to "Your apps" and click on the web app icon (</>) to register a new app
   - Follow the steps to register your app
   - Copy the Firebase configuration object
   - Open `src/firebase.ts` and replace the placeholder configuration with your actual Firebase configuration

3. Login to Firebase:
   ```
   firebase login
   ```

4. Update the `.firebaserc` file:
   - Open `.firebaserc` in the project root
   - Replace `"your-firebase-project-id"` with your actual Firebase project ID

5. Build and deploy the application:
   ```
   npm run deploy
   ```

This will build the production version of the app and deploy it to Firebase hosting.

## Project Structure

- `/src`: Source code
  - `/components`: Reusable React components
  - `/pages`: Page components
    - `/services`: Service page components
  - `/styles`: Global and component-specific styles
  - `App.tsx`: Main application component
  - `firebase.ts`: Firebase configuration
- `/public`: Static assets

## Adding New Service Pages

To add a new service page:

1. Create a new file in `/src/pages/services/` using the existing pages as templates
2. Use the `ServicePage` component with appropriate props
3. Add the new route in `App.tsx`

## Firebase Analytics

This project includes Firebase Analytics setup. The app logs page views automatically.

To track additional events, use the `logEvent` function from Firebase Analytics.

## License

This project is licensed under the MIT License - see the LICENSE file for details.