package com.gpstrackerapp;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import java.util.Set;

public class BluetoothClientManager extends ReactContextBaseJavaModule {

    private BluetoothAdapter mBluetoothAdapter;

    public BluetoothClientManager (ReactApplicationContext reactContext) {
        super(reactContext);
        this.mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
    }

    @Override
    public String getName() {
        return "BluetoothClient";
    }

    @ReactMethod
    public void startSearchDevices(Callback startSearchCallback) {
        if (true){
            startSearchCallback.invoke("Respuesta");
            return;
        }
        if (!mBluetoothAdapter.isEnabled()) {
            // VERSION DE LO SIGUIENTE EN REACT
            // Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
            // startActivityForResult(enableBtIntent, REQUEST_ENABLE_BT);
            startSearchCallback.invoke(false);
            return;
        }

        Set<BluetoothDevice> pairedDevices = mBluetoothAdapter.getBondedDevices();

        if (pairedDevices.size() > 0) {
            // There are paired devices. Get the name and address of each paired device.
            for (BluetoothDevice device : pairedDevices) {
                String deviceName = device.getName();
                String deviceHardwareAddress = device.getAddress(); // MAC address
            }
        }

        //BluetoothChatService bluetoothChatService = new BluetoothChatService();
        startSearchCallback.invoke(true);
    }
}
