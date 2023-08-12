import {showMessage} from 'react-native-flash-message';

export const errorMessage = (msg, title = 'Error') => {
    showMessage({
      message: title,
      description: msg,
      type: 'danger',
    });
  };
  export const successMessage = (msg, title = 'Success') => {
    showMessage({
      message: title,
      description: msg,
      type: 'success',
    });
  };