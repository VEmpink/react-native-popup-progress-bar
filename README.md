# react-native-popup-progress-bar

Android native progress dialog (modal progress, or popup progress bar) for React Native

## Getting started

`$ npm install react-native-popup-progress-bar --save`

For `react-native v0.60+` no need to run command `$ react-native link react-native-popup-progress-bar`

## Usage

```js
import PopupProgressBar from 'react-native-popup-progress-bar';

/**
 * Default options
 */
const options = {
  theme: 'defaultDeviceLight',
  title: 'title',
  message: 'message',
  isSpinner: true,
  isIndeterminate: false,
  maxProgress: 100,
  isCancelable: true,
};

function handdleDismiss() {
  console.log('Popup Progress is dismissed :(');
}

/**
 * Without options
 */
PopupProgressBar.show();

/**
 * Only callback
 */
PopupProgressBar.show(handleDissmiss);

/**
 * With options
 */
PopupProgressBar.show(options);

/**
 * With options and a callback
 */
PopupProgressBar.show(options, handleDissmiss);
```

## Options

- **`theme`** (optional) - A native theme from Android `ProgressDialog`, values: `"defaultDeviceLight"` (default), `"defaultDeviceDark"`, `"holoLight"`, `"holoDark"`, `"classic"`.

- **`title`** (optional) - Popup progress title, type: `string`.

- **`message`** (optional) - Popup progress message, type: `string`.

- **`isSpinner`** (optional) - Set the progress bar style in spinner style or horizontal style, type: `boolean`.

- **`isIndeterminate`** (optional) - Enable/Disable the indeterminate mode for the progress. In indeterminate mode, the progress is ignored and the dialog shows an infinite animation instead. **NOTE:** This property only effected if **`isSpinner`** is `false`, type: `boolean`.

- **`maxProgress`** (optional) - Sets the maximum allowed progress value. **NOTE:** This property only effected if **`isSpinner`** is `false`, type: `number`.

- **`isCancelable`** (optional) - Whether the dialog should be canceled when touched outside of the view progress.

## Methods

- **`.show(options)`** - Show the dialog.

- **`.setProgress(number)`** - Set percentage of the current progress bar, a value between 0 and **`maxProgress`**. **NOTE:** Only effected if **`isSpinner`** is `false` AND **`isIndeterminate`** is `false`

- **`.setTitle(string)`** - Set title of the progress. This is useful when you need displaying progress but only for the title.

- **`.setMessage(string)`** - Set message of the progress. This is useful when you need displaying progress but only for the message.

- **`.dismiss()`** - Hide/Dismiss the progress.
