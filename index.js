import {NativeModules} from 'react-native';

const {PopupProgressBar} = NativeModules;

const ProgressDialog = {
  show: function (options) {
    /**
     * "holoLight"
     */
    let THEME_TYPE = 3,
      TITLE,
      MESSAGE,
      IS_SPINNER = true,
      IS_INDETERMINATE = false,
      MAX_PROGRESS = 100,
      IS_CANCELABLE = true,
      ON_DISMISS = () => {};

    if (typeof options === 'object' && options !== null) {
      const {
        theme,
        title,
        message,
        isSpinner,
        isIndeterminate,
        maxProgress,
        isCancelable,
        onDismiss,
      } = options;

      switch (theme) {
        case 'classic':
          THEME_TYPE = 1;
          break;

        case 'holoDark':
          THEME_TYPE = 2;
          break;

        case 'holoLight':
          THEME_TYPE = 3;
          break;

        case 'defaultDeviceDark':
          THEME_TYPE = 4;
          break;

        case 'defaultDeviceLight':
          THEME_TYPE = 5;
          break;
      }

      if (typeof title === 'string') TITLE = title;
      if (typeof message === 'string') MESSAGE = message;
      if (typeof isSpinner === 'boolean') IS_SPINNER = isSpinner;

      if (typeof isIndeterminate === 'boolean') {
        IS_INDETERMINATE = isIndeterminate;
      }

      if (typeof maxProgress === 'number') MAX_PROGRESS = maxProgress;
      if (typeof isCancelable === 'boolean') IS_CANCELABLE = isCancelable;
      if (typeof onDismiss === 'function') ON_DISMISS = onDismiss;
    }

    PopupProgressBar.show(
      {
        theme: THEME_TYPE,
        title: TITLE,
        message: MESSAGE,
        isSpinner: IS_SPINNER,
        isIndeterminate: IS_INDETERMINATE,
        maxProgress: MAX_PROGRESS,
        isCancelable: IS_CANCELABLE,
      },
      ON_DISMISS
    );
  },

  setProgress: function (progress) {
    if (typeof progress !== 'number') {
      console.warn('The parameter of .setProgress(); MUST be a number!');
      return;
    }

    PopupProgressBar.setProgress(progress);
  },

  setTitle: function (title) {
    if (typeof title !== 'string') {
      console.warn('The parameter of .setTitle(); MUST be a string!');
      return;
    }

    PopupProgressBar.setTitle(title);
  },

  setMessage: function (message) {
    if (typeof message !== 'string') {
      console.warn('The parameter of .setMessage(); MUST be a string!');
      return;
    }

    PopupProgressBar.setMessage(message);
  },

  dismiss: function () {
    PopupProgressBar.dismiss();
  },
};

export default ProgressDialog;
