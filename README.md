# UdaciCards

UdaciCards is a mobile flashcards app, developed using React Native, for the final project of the Udacity React Nanodegree.

The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## Specification

### Specific Requirements
- Use create-react-native-app to build your project.
- Allow users to create a deck which can hold an unlimited number of cards.
- Allow users to add a card to a specific deck.
- The front of the card should display the question.
- The back of the card should display the answer.
- Users should be able to quiz themselves on a specific deck and receive a score once they're done.
- Users should receive a notification to remind themselves to study if they haven't already for that day.

### Required Views
- Deck List View (Default View).
- Individual Deck View.
- Quiz View.
- New Deck View.
- New Question View.

## Pre-Requisites

Before getting started you will need to make sure Node.js is downloaded and installed. The latest version of Node.js can be downloaded from [nodejs.org](https://nodejs.org/en/) and it's recommended to use the LTS version.

*Note: It is recommended to use Node.js version 12.9.1 or version 10 LTS (see [known issues](#knownissues)).*

## Getting Started

### Step 1: Download the Repository
Either clone, fork or download the repository to a local folder. The repository can be found on GitHub [here](https://github.com/Neehi/UdaciCards).

### Step 2: Navigate to the Project Folder
```
$ cd /path/to/repo
```

### Step 3: Install Dependencies
From within the project folder, install all dependencies using NPM.
```
$ npm install
```

### Step 4: Start the Server
Next, simply start the server using NPM.
```
$ npm start
```

You can also use `expo start`.

### Step 5: Run the Simulator
Once the server has started you will be presented with several options:
- Scan the QR code above with the Expo app (Android) or the Camera app (iOS).
- Press a for Android emulator.
- Press e to send a link to your phone with email/SMS.
- Press s to sign in and enable more options.

It's recommended to select `a` as at this time the project has only been tested on Android.

## <a name="knownissues"></a>Known Issues

### Node.js version
```
Expo DevTools is running at http://localhost:19002
Opening DevTools in the browser... (press shift-d to disable)

Invalid regular expression: /(node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class
```
If you see a message similar to above, it is likely caused by an issue with the version of Node.js you're using. To fix this, downgrade to Node.js version 12.9.1 or version 10 LTS.

See: [https://github.com/expo/expo-cli/issues/1074](https://github.com/expo/expo-cli/issues/1074) for further details.

## Acknowledgements

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
