# ADB Project

## Overview
This project is a React Native application that features a bottom tab navigation system. It includes various screens such as Home, Category, and Profile, allowing users to navigate through different sections of the app seamlessly.

## Project Structure
```
ADB
├── app
│   ├── (tabs)
│   │   └── index.tsx
│   ├── navigation
│   │   └── BottomTabNavigator.tsx
│   ├── screens
│   │   ├── HomeScreen.tsx
│   │   ├── CategoryScreen.tsx
│   │   └── ProfileScreen.tsx
│   └── App.tsx
├── assets
│   └── images
│       ├── burger.png
│       ├── chicken.png
│       ├── pizza.png
│       ├── soup.png
│       ├── arrow.png
│       └── logo.jpg
├── package.json
└── README.md
```

## Installation
To get started with the project, ensure you have the necessary dependencies installed. Run the following command in your project directory:

```
npm install @react-navigation/native @react-navigation/bottom-tabs react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

## Screens
- **HomeScreen**: Displays a header, a banner with images, food categories, and a view-all button.
- **CategoryScreen**: Will display detailed information about food categories.
- **ProfileScreen**: Will show user profile information.

## Navigation
The application uses a bottom tab navigator to switch between the Home, Category, and Profile screens. The navigation structure is defined in `BottomTabNavigator.tsx`.

## Usage
To run the application, use the following command:

```
npm start
```

Make sure to test the navigation to ensure that all screens are accessible and functioning as expected.

## Future Enhancements
- Implement additional features in the Category and Profile screens.
- Improve the UI/UX design for better user engagement.
- Add state management for handling user data and preferences.

## License
This project is open-source and available for modification and distribution.