# Weather App

This is a simple weather app built with React Native and Expo. It allows users to search for a city, view current weather conditions, and see the weather forecast for that city.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) (optional, but recommended)

## Setup

### 1. Clone the repository

Clone the repository to your local machine:

```
git clone https://github.com/yourusername/weather-app.git
cd weather-app
2. Install dependencies

```

### 2. Install the necessary dependencies using either npm or yarn:

```
# Using npm

npm install
```

```
# Or using yarn

yarn install
```

### 3. Run the app

To start the app in development mode, use the following command:

```
# Using npx

npx expo start
```

This will start the Expo development server. Follow the on-screen instructions to run the app on a simulator or your physical device using the Expo Go app.

You can also use expo run:android or expo run:ios to run the app directly on an emulator, if you have Android Studio or Xcode set up.

### 4. Running the app on a physical device

Install the Expo Go app from the App Store (iOS) or Google Play Store (Android).
Scan the QR code displayed in your terminal or browser after running npm start or yarn start.
Running Tests
To run the tests for this project, make sure you have Jest and React Native Testing Library installed.

#### 1. Install testing dependencies

Make sure you have all the testing dependencies installed. If not, install them by running:

```
# Using npm

npm install --save-dev jest @testing-library/react-native @testing-library/jest-native jest-expo
```

```
# Or using yarn

yarn add --dev jest @testing-library/react-native @testing-library/jest-native jest-expo 2. Add test scripts
```

#### 2. Make sure your package.json includes the following test script:

```
"scripts": {
"test": "jest"
}
```

# Running tests

### 1. You can now run the tests using the following command:

```
# Using npm

npm test
```

```
# Or using yarn
yarn test
```

This will run all the tests in the **tests** folder.

# Folder Structure

Here is an overview of the main folder structure:

```
├── **tests**/ # Test files
│ ├── SearchBar.test.tsx # Tests for the SearchBar component
│ ├── WeatherInfo.test.tsx # Tests for the WeatherInfo component
│ ├── Forecast.test.tsx # Tests for the Forecast component
│ └── Home.test.tsx # Tests for the Home page
├── components/ # React components
│ ├── SearchBar/ # SearchBar component and styles
│ ├── WeatherInfo/ # WeatherInfo component and styles
│ └── Forecast/ # Forecast component and styles
├── hooks/ # Custom hooks
│ ├── useCitySearch.ts # Hook to handle city search
│ └── useWeatherData.ts # Hook to fetch weather and forecast data
├── navigation/ # Navigation logic (if any)
├── assets/ # Assets like images, icons, etc.
├── App.tsx # Main App entry point
└── package.json # Project dependencies and scripts
```

# License

This project is licensed under the MIT License - see the LICENSE file for details.
