This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli) for Rizon bottom sheet.

# Setup instructions

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Clone and install the app

- First, clone the repo from the github

  ```sh
  git clone https://github.com/TOU-HID/Rizon-bottom-sheet.git
  ```

- Then, go to the root directory

  ```sh
  cd Rizon-bottom-sheet
  ```

- Install dependencies, run the following command

  ```sh
  # Using npm
  npm install

  # OR using Yarn
  yarn
  ```

  ```sh
  # for ios
  cd ios
  pod install
  cd ..
  ```

- You will need to run **Metro**, the JavaScript build tool for React Native. To start the Metro dev server, run the following command from the root of the React Native project:

  ```sh
  # Using npm
  npm start

  # OR using Yarn
  yarn start
  ```

## Step 2: Build and run the app

With Metro running, open a new terminal window/pane from the root of the React Native project, and use one of the following commands to build and run the Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see the app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run the app — you can also build it directly from Android Studio or Xcode.
