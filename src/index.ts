import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoAppInfo.web.ts
// and on native platforms to ExpoAppInfo.ts
import ExpoAppInfoModule from './ExpoAppInfoModule';
import ExpoAppInfoView from './ExpoAppInfoView';
import { ChangeEventPayload, ExpoAppInfoViewProps } from './ExpoAppInfo.types';

// Get the native constant value.
export const PI = ExpoAppInfoModule.PI;

export function hello(): string {
  return ExpoAppInfoModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoAppInfoModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoAppInfoModule ?? NativeModulesProxy.ExpoAppInfo);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoAppInfoView, ExpoAppInfoViewProps, ChangeEventPayload };
