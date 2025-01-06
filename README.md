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
## Installation
1.Clone the Repository
```bash
https://github.com/Indu-Devarapalli/LaundaryApp.git
```
2.Install Dependencies
```bash
npm install
#Or 
yarn install
```
3.Install iOS Dependencies
```bash
cd ios
pod install
cd ..
```
## Running the App
1.Start Metro Bundler
```bash
yarn start
#or
npm start
```
2.Run on Android
```bash
yarn 
#or
npx react-native run-android
```
3.Run on iOS
```bash
yarn ios
#or
npx react-native run-ios
```
## App Features
### Authentication
* **Register**: Users can create a new account by providing a username, email, and password. Firebase Authentication ensures secure credential storage and validation.
* **Login**: Existing users can log in securely using their registered credentials.
### Laundry List
Users are redirected to a laundry list page where they can select:
* **Categories**: Men, Women, Kids, Household.
* **Services**: Wash, Fold, Iron, Dry Clean, Combo.
* **Clothes Type**: For each category, a set of clothes types are available (e.g., Pants, Shirts, Kurtas, Frocks, Aprons, etc.).
### Laundry Service
* **Price Calculation**: Based on the selected category, clothes type, and services, the price is displayed for the user.
* **Address and Time Selection**: Users can add their address, and select pick-up and delivery dates and times.
* **Place Orde**r: After selecting the service and providing the required details, users can place an order.
### Firebase Integration
* **User Authentication**: Firebase Authentication ensures secure login and registration.
* **User Data Storage**: Firebase Firestore is used to store user login credentials, addresses, and orders.
## Demo Video
https://github.com/user-attachments/assets/02ee70fe-32cd-400b-bb9b-5ee47cfb04b3


