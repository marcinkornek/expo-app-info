import * as AppInfo from 'expo-app-info';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Build number: {AppInfo.getBuildNumber()}</Text>
      <Text>Build bundle id: {AppInfo.getBundleId()}</Text>
      <Text>App version: {AppInfo.getAppVersion()}</Text>
    </View>
  );
}
