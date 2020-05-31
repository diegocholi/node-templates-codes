// MapBox
package com.appmobile.mapBox;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class MapBox extends ReactContextBaseJavaModule {

    MapBox(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "MapBox";
    }

    @ReactMethod
    void navigateToHome() {
        Activity activity = getCurrentActivity();
        Intent intent = new Intent(activity, MapActivity.class);
        assert activity != null;
        activity.startActivity(intent);
    }
}