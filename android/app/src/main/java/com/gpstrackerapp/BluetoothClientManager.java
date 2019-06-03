package com.gpstrackerapp;

import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothGatt;
import android.bluetooth.BluetoothGattCallback;
import android.bluetooth.BluetoothGattCharacteristic;
import android.bluetooth.BluetoothGattService;
import android.bluetooth.BluetoothProfile;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Set;
import java.util.UUID;

public class BluetoothClientManager extends ReactContextBaseJavaModule {

    private static final String ONCONFIG_SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
    private static final String ONCONFIG_CHARACTERISTIC_UUID = "7fb78cd6-4fa2-4289-8da4-fa4785e90657";
    private static final String SSID_SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914c";
    private static final String SSID_CHARACTERISTIC_UUID = "7fb78cd6-4fa2-4289-8da4-fa4785e90658";
    private static final String PASSWORD_SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914d";
    private static final String PASSWORD_CHARACTERISTIC_UUID = "7fb78cd6-4fa2-4289-8da4-fa4785e90659";
    private BluetoothAdapter mAdapter;
    private BluetoothGatt mGatt;
    private Queue<CharacteristicDTO> mCharacteristicsToWrite;
    private Callback mCallback;
    private boolean isWriting;

    public BluetoothClientManager(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mAdapter = BluetoothAdapter.getDefaultAdapter();
        this.mCharacteristicsToWrite = new LinkedList<CharacteristicDTO>();
    }

    @Override
    public String getName() {
        return "BluetoothClient";
    }

    @ReactMethod
    public void startSearchDevices(Callback startSearchCallback) {
        if (!mAdapter.isEnabled()) {
            // VERSION DE LO SIGUIENTE EN REACT
            // Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
            // startActivityForResult(enableBtIntent, REQUEST_ENABLE_BT);
            startSearchCallback.invoke(false);
            return;
        }

        Set<BluetoothDevice> pairedDevices = mAdapter.getBondedDevices();
        if (pairedDevices.size() > 0) {
            for (BluetoothDevice device : pairedDevices) {
                if ("GPS Tracker Config".equals(device.getName())) {
                    connectToDevice(device, startSearchCallback);
                    return;
                }
            }
        }
        startSearchCallback.invoke(false);
    }


    @ReactMethod
    public void applyConfig(String ssid, String password, Callback applyConfigCallback) {
        this.mCallback = applyConfigCallback;
        CharacteristicDTO ssidCharacteristicDTO = new CharacteristicDTO(SSID_SERVICE_UUID, SSID_CHARACTERISTIC_UUID, ssid);
        mCharacteristicsToWrite.add(ssidCharacteristicDTO);
        CharacteristicDTO passwordCharacteristicDTO = new CharacteristicDTO(PASSWORD_SERVICE_UUID, PASSWORD_CHARACTERISTIC_UUID, password);
        mCharacteristicsToWrite.add(passwordCharacteristicDTO);
        CharacteristicDTO onConfigCharacteristicDTO = new CharacteristicDTO(ONCONFIG_SERVICE_UUID, ONCONFIG_CHARACTERISTIC_UUID, "False");
        mCharacteristicsToWrite.add(onConfigCharacteristicDTO);
        writeNextValueFromQueue();
    }

    private boolean writeCharacteristic(BluetoothGatt gatt, CharacteristicDTO characteristicDTO) {
        BluetoothGattService service = gatt.getService(characteristicDTO.serviceUUID);
        if (service != null) {
            BluetoothGattCharacteristic characteristic = service.getCharacteristic(characteristicDTO.characteristicUUID);
            if (characteristic != null) {
                characteristic.setValue(characteristicDTO.value);
                return gatt.writeCharacteristic(characteristic);
            }
        }
        return false;
    }

    private void writeNextValueFromQueue() {
        if (isWriting || mCharacteristicsToWrite.size() == 0) {
            return;
        }
        isWriting = true;
        CharacteristicDTO characteristicDTO = mCharacteristicsToWrite.poll();
        writeCharacteristic(mGatt, characteristicDTO);
        if (mCharacteristicsToWrite.size() == 0) {
            mCallback.invoke(true);
        }
    }

    private void connectToDevice(BluetoothDevice device, Callback startSearchCallback) {
        mGatt = device.connectGatt(null, true, new BluetoothGattCallback() {

            @Override
            public void onServicesDiscovered(BluetoothGatt gatt, int status) {
                if (status == BluetoothGatt.GATT_SUCCESS) {
                    CharacteristicDTO configCharacteristicDTO = new CharacteristicDTO(ONCONFIG_SERVICE_UUID, ONCONFIG_CHARACTERISTIC_UUID, "True");
                    mCharacteristicsToWrite.add(configCharacteristicDTO);
                    mCallback = startSearchCallback;
                    writeNextValueFromQueue();
                }
            }

            @Override
            public void onConnectionStateChange(BluetoothGatt gatt, int status, int newState) {
                if (newState == BluetoothProfile.STATE_CONNECTED) {
                    gatt.discoverServices();
                }
            }

            @Override
            public void onCharacteristicWrite(BluetoothGatt gatt, BluetoothGattCharacteristic characteristic, int status) {
                if (status == BluetoothGatt.GATT_SUCCESS) {
                    isWriting = false;
                    writeNextValueFromQueue();
                }
            }
        });
    }

    private class CharacteristicDTO {

        private final UUID serviceUUID;
        private final UUID characteristicUUID;
        private final String value;

        private CharacteristicDTO(String serviceUUID, String characteristicUUID, String value) {
            this.serviceUUID = UUID.fromString(serviceUUID);
            this.characteristicUUID = UUID.fromString(characteristicUUID);
            this.value = value;
        }
    }
}
