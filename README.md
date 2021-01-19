# react-native-popup-progress-bar

Android progress dialog, modal progress, or popup progress bar for React Native.

Based on [Android ProgressDialog](https://developer.android.com/reference/android/app/ProgressDialog).

## Getting started

`$ yarn add react-native-popup-progress-bar`

Or

`$ npm i react-native-popup-progress-bar`

In `react-native v0.60+` no need to run command `$ react-native link react-native-popup-progress-bar`

## Usage

```js
import PopupProgressBar from 'react-native-popup-progress-bar';

/**
 * Default options
 */
const options = {
  theme: 'defaultDeviceLight',
  isSpinner: true,
  isIndeterminate: false,
  maxProgress: 100,
  isCancelable: true,
  onDismiss: () {}
};

PopupProgressBar.show(options);
```

## Options (optional)

- **`theme`** - A native theme from Android `ProgressDialog`.
  | Type | Required | Value |
  | --- | --- | --- |
  | `string` | No, default: `"holoLight"` | `"classic"`, `"holoDark"`, `"holoLight"`, `"defaultDeviceDark"`, `"defaultDeviceLight"` |

- **`title`** - Title of Progress Dialog.
  | Type | Required |
  | --- | --- |
  | `string` | No, default: `undefined` |

- **`message`** - Message of Progress Dialog.
  | Type | Required |
  | --- | --- |
  | `string` | No, default: `undefined` |

- **`isSpinner`** - Set the progress bar style in spinner style or horizontal style.
  | Type | Required |
  | --- | --- |
  | `boolean` | No, default: `true` |

- **`isIndeterminate`** - Enable/Disable the indeterminate mode for the progress. In indeterminate mode, the progress is ignored and the dialog shows an infinite animation instead.
  **NOTE:** This property only effected if **`isSpinner`** is `false`.
  | Type | Required |
  | --- | --- |
  | `boolean` | No, default: `false` |

- **`maxProgress`** - Sets the maximum allowed progress value.
  **NOTE:** This property only effected if **`isSpinner`** is `false`.
  | Type | Required |
  | --- | --- |
  | `number` | No, default: `100` |

- **`isCancelable`** - Whether the dialog should be canceled when touched outside of the view progress.
  | Type | Required |
  | --- | --- |
  | `boolean` | No, default: `true` |

## Methods

- **`.show(options)`** - Show the dialog.

- **`.setProgress(number)`** - Set percentage of the current progress bar, a value between 0 and **`maxProgress`**. **NOTE:** Only effected if **`isSpinner`** is `false` AND **`isIndeterminate`** is `false`

- **`.setTitle(string)`** - Set title of the progress. This is useful when you need displaying progress but only for the title.

- **`.setMessage(string)`** - Set message of the progress. This is useful when you need displaying progress but only for the message.

- **`.dismiss()`** - Hide/Dismiss the Progress Dialog.
