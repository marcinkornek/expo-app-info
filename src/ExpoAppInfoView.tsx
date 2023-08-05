import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoAppInfoViewProps } from './ExpoAppInfo.types';

const NativeView: React.ComponentType<ExpoAppInfoViewProps> =
  requireNativeViewManager('ExpoAppInfo');

export default function ExpoAppInfoView(props: ExpoAppInfoViewProps) {
  return <NativeView {...props} />;
}
