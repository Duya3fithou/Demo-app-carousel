import i18next from 'i18next';
import { Alert } from 'react-native';

const AlertMessage = (message: string, title?: string, onPressOk?: any, cancel?: boolean) => {
    Alert.alert(
        title || '',
        message,
        cancel
            ? [
                  {
                      text: i18next.t('alert.button.cancel'),
                      style: 'default',
                  },
                  {
                      text: i18next.t('alert.button.ok'),
                      onPress: () => {
                          if (typeof onPressOk === 'function') {
                              onPressOk();
                          }
                      },
                      style: 'default',
                  },
              ]
            : [
                  {
                      text: i18next.t('alert.button.ok'),
                      onPress: () => {
                          if (typeof onPressOk === 'function') {
                              onPressOk();
                          }
                      },
                  },
              ],
        { cancelable: false },
    );
};
export default AlertMessage;
