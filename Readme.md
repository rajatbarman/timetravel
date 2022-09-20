# timetravel

This repo uses Archive.org apis to see how webpages looked like across time.

[Figma Designs](https://www.figma.com/file/T1C4gLq24BTXqwoQZAMRQz/Time-Travel?node-id=0%3A1)

Steps
- Install node.js lts (Do a node -v, 16.13.x - 16.7.x should be fine)
- Intall git
- Intall Watchman, only for Mac or Linux (brew install watchman) 
- Run `npx expo -h`
- Run `npx expo whoami`
- Install Expo Go App (in your mobile phone)
- Run `npx create-expo-app expo-timetravel`
- Setup development environment - enable linting, prettier, module resolvers etc. Run

`npx expo install metro-react-native-babel-preset @react-native-community/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-plugin-module-resolver metro-react-native-babel-preset eslint react-native-svg-transformer typescript -- --save-dev`

- Setup the project dependencies - stack based routing, svg handler, webview, datepicker, type declarations for react-native and react. Run

`npx expo install react-native-modern-datepicker react-native-svg react-native-webview react-native-screens react-native-safe-area-context @types/react @types/react-native @react-navigation/native @react-navigation/native-stack`

- Copy over .editorconfig, .eslintrc.js, .prettierrc.js, App.js, tsconfig.json, metro.config.js


##### Internal Notes 
- StatusBar, View, Styles, Text
- Keyboard shifting, put "android.softwareKeyboardLayoutMode": "pan",
- ToastAndroid and AlertIOS (and Platform.OS === 'android' | 'ios')
- Stack based routing, how it affects useEffect lifecycle.
- SVG 
- Webview
- Pressable, TouchaleHighlight
