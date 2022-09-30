import {PermissionsAndroid, Platform} from 'react-native';

export const checkAppPermission = (message: string, permission: any) => {
  const isAndroid = Platform.OS === 'android';
  return new Promise((resolve, reject) => {
    const requestPermission = async () => {
      if (isAndroid) {
        const rationale = message
          ? {
              title: 'Permission Required',
              message: message,
              buttonPositive: 'OK',
            }
          : undefined;
        await PermissionsAndroid.request(permission, rationale)
          .then(status => {
            if (status === PermissionsAndroid.RESULTS.GRANTED) {
              resolve(true);
            } else {
              resolve(false);
            }
          })
          .catch(error => {
            resolve(false);
          });
      } else {
        resolve(true); // ios
      }
    };
    requestPermission();
  });
};
