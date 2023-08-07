## expo-app-info

Native module created using [Expo Modules](https://docs.expo.dev/modules/overview/).

### This simple module implements 3 methods:
* getBuildNumber - uses `CFBundleVersion` value from your app's `Info.plist` in iOS and `versionCode` from `build.gradle` in Android.
* getBundleId - uses `CFBundleIdentifier` value from your app's `Info.plist` in iOS and `applicationId` from `build.gradle` in Android. 
* getAppVersion - uses `CFBundleShortVersionString` value from your app's `Info.plist` in iOS and `versionName` from `build.gradle` in Android.

### Running the example app:
* Install dependencies:
```bash
$ yarn
```

* Navigate to the example folder:
```bash
$ cd example
```

* Run the app on iOS:
``` bash
$ npx expo run:ios
```

* Run the app on Android:
``` bash
$ npx expo run:android
```

### Debugging
Navigate to the module directory and then open the Android and/or iOS example project by running the following commands:
```bash
$ npm run open:android # opens Android Studiu
$ npm run open:ios # opens Xcode
```
