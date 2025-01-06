# WebApp
WebApp is a React Native application that allows users to send their clothes for laundry services. The app supports laundry services for men, women, kids, and household clothes. Users can select services like washing, folding, ironing, dry cleaning, and more. This app integrates Firebase for authentication and storing user details, orders, and addresses.
## Technologies
* React Native: A JavaScript framework for building mobile apps
* Redux & Redux Toolkit: For state management in the app.
* React Navigation: For navigation between screens.
* Firebase Authentication: For secure user registration and login.
* Firebase Firestore: For storing user data, order details, and addresses.
* React Native Vector Icons: For using icons in the app.
## Prerequisites
* Node.js
* React Native CLI
* Xcode (for iOS development)
* CocoaPods (for iOS dependencies)
* Android Studio (for Android development)
## Project Structure
```bash
WEBAPP/
│
├── App/                     # All app screens
│   ├── Authenticate/
│       ├── Home/
│       ├── Basket/
│       └── Component/
├── Assets/                  # Static files (images, fonts, etc.)
├── Redux/                   # Redux slices and reducers for state management
├── firebase.js              # Firebase configuration and services
├── store.js                 # Redux store configuration
├── Data.js 
├── android/                 # Android specific files
├── ios/                     # iOS specific files
├── package.json             # Project dependencies and scripts
``` 
