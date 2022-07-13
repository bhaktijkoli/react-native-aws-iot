package com.reactnativeawsiot.mqtt;

import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import software.amazon.awssdk.crt.io.SocketOptions;
import software.amazon.awssdk.iot.AwsIotMqttConnectionBuilder;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import java.util.Map;
import java.util.HashMap;
import java.util.concurrent.CompletableFuture;

import software.amazon.awssdk.crt.CRT;
import software.amazon.awssdk.crt.mqtt.MqttClientConnection;
import software.amazon.awssdk.crt.mqtt.MqttClientConnectionEvents;

public class MqttModule extends ReactContextBaseJavaModule {
    final String TAG = "MqttModule";

    MqttModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "MqttModule";
    }

    @ReactMethod
    public void connect(ReadableMap options) {
        String endpoint = options.getString("endpoint");
        Short port = (short) options.getInt("port");
        String clientId = options.getString("clientId");
        String certificate = options.getString("certificate");
        String privateKey = options.getString("privateKey");
        String authorityCertificate = options.getString("authorityCertificate");

        MqttClientConnectionEvents callbacks = new MqttClientConnectionEvents() {
            @Override
            public void onConnectionInterrupted(int errorCode) {
                if (errorCode != 0) {
                    System.out.println("Connection interrupted: " + errorCode + ": " + CRT.awsErrorString(errorCode));
                }
            }

            @Override
            public void onConnectionResumed(boolean sessionPresent) {
                System.out.println("Connection resumed: " + (sessionPresent ? "existing session" : "clean session"));
            }
        };

        MqttClientConnection connection = AwsIotMqttConnectionBuilder.newMtlsBuilder(certificate, privateKey)
                .withEndpoint(endpoint)
                .withPort(port)
                .withCertificateAuthority(authorityCertificate)
                .withClientId(clientId).withCleanSession(true)
                .withProtocolOperationTimeoutMs(60000)
                .withConnectionEventCallbacks(callbacks)
                .build();

        CompletableFuture<Boolean> connected = connection.connect();
        try {
            boolean sessionPresent = connected.get();
            Log.d(TAG, "Connected to " + (!sessionPresent ? "new" : "existing") + " session!");
        } catch (Exception ex) {
            throw new RuntimeException("Exception occurred during connect", ex);
        }


    }

}