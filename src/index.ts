import ExpoAppInfoModule from './ExpoAppInfoModule';

export function getBuildNumber(): string {
  return ExpoAppInfoModule.getBuildNumber();
}

export function getBundleId(): string {
  return ExpoAppInfoModule.getBundleId();
}

export function getAppVersion(): string {
  return ExpoAppInfoModule.getAppVersion();
}
