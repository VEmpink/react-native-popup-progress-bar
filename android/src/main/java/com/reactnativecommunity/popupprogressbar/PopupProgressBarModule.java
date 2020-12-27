package com.reactnativecommunity.popupprogressbar;

import android.app.Activity;
import android.app.ProgressDialog;
import android.content.DialogInterface;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;

public class PopupProgressBarModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    private ProgressDialog progressDialog;

    public PopupProgressBarModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "PopupProgressBar";
    }

    @ReactMethod
    public void show(final ReadableMap options, final Callback onCancel) {
        Activity currentActivity = getCurrentActivity();

        this.progressDialog = new ProgressDialog(currentActivity, options.getInt("theme"));

        if (options.hasKey("title")) {
            this.progressDialog.setTitle(options.getString("title"));
        }

        if (options.hasKey("message")) {
            this.progressDialog.setMessage(options.getString("message"));
        }

        this.progressDialog.setProgressStyle(options.getBoolean("isSpinner") ? 0 : 1);

        this.progressDialog.setIndeterminate(options.getBoolean("isIndeterminate"));

        this.progressDialog.setMax(options.getInt("maxProgress"));

        this.progressDialog.setCancelable(options.getBoolean("isCancelable"));

        this.progressDialog.setOnDismissListener(new DialogInterface.OnDismissListener() {
            @Override
            public void onDismiss(DialogInterface dialogInterface) {
                onCancel.invoke();
            }
        });

        this.progressDialog.show();
    }

    @ReactMethod
    public void setProgress(Integer n) {
        if (this.progressDialog.isShowing()) {
            this.progressDialog.setProgress(n);
        }
    }

    @ReactMethod
    public void setTitle(String t) {
        if (this.progressDialog.isShowing()) {
            this.progressDialog.setTitle(t);
        }
    }

    @ReactMethod
    public void setMessage(String t) {
        if (this.progressDialog.isShowing()) {
            this.progressDialog.setMessage(t);
        }
    }

    @ReactMethod
    public void  dismiss() {
        if (this.progressDialog.isShowing()) {
            this.progressDialog.dismiss();
        }
    }

}
