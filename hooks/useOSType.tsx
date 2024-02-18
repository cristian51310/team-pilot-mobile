import Constants from 'expo-constants';

export function useOSType() {
  const platform = Constants.platform

  if (platform?.hasOwnProperty('android')) {
    return 'android'
  }

  if (platform?.hasOwnProperty('ios')) {
    return 'ios'
  }

  return platform
}