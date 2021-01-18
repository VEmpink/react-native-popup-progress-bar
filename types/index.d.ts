export type PopupProgressBarOptions = {
  /**
   * A native theme from Android ProgressDialog.
   */
  theme?:
    | 'classic'
    | 'holoLight'
    | 'holoDark'
    | 'defaultDeviceLight'
    | 'defaultDeviceDark';
  title?: string;
  message?: string;

  /**
   * Set the progress bar style in spinner style or horizontal style.
   */
  isSpinner?: boolean;

  /**
   * Enable/Disable the indeterminate mode for the progress.
   *
   * In indeterminate mode, the progress is ignored and the dialog shows
   * an infinite animation instead.
   *
   * **NOTE**: This property only effected if `isSpinner` is `false`
   */
  isIndeterminate?: boolean;

  /**
   * Sets the maximum allowed progress value.
   *
   * **NOTE**: This property only effected if `isSpinner` is `false`.
   */
  maxProgress?: number;

  /**
   * Make a progress dialog is cancelable when user press
   * outside the dialog box.
   */
  isCancelable?: boolean;

  /**
   * When user press outside the dialog box and `isCancelable` is
   * `true` this property/function will be trigger.
   */
  onDismiss?: () => void;
};

export interface PopupProgressBarStatic {
  /**
   * Show the progress dialog.
   */
  show(options?: PopupProgressBarOptions): void;

  /**
   * Set percentage of the current progress bar,
   * a value between `0` and `maxProgress`.
   *
   * **NOTE**: Only effected if `isSpinner` is `false` AND
   * `isIndeterminate` is `false`
   */
  setProgress(progress: number): void;

  /**
   * Set title of the progress.
   * This is useful when you need displaying progress but only for the title.
   */
  setTitle(title: string): void;

  /**
   * Set message of the progress.
   * This is useful when you need displaying progress but only for the message.
   */
  setMessage(message: string): void;

  /**
   * Hide/Dismiss the progress dialog
   */
  dismiss(): void;
}

declare const PopupProgressBar: PopupProgressBarStatic;
export default PopupProgressBar;
