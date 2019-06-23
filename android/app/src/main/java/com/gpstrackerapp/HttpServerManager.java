package com.gpstrackerapp;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.koushikdutta.async.AsyncServer;
import com.koushikdutta.async.http.server.AsyncHttpServer;
import com.koushikdutta.async.http.server.AsyncHttpServerRequest;
import com.koushikdutta.async.http.server.AsyncHttpServerResponse;
import com.koushikdutta.async.http.server.HttpServerRequestCallback;

import java.util.HashMap;

public class HttpServerManager extends ReactContextBaseJavaModule {

    private Gson mJsonParser = new GsonBuilder().create();
    private AsyncHttpServer mServer;
    private AsyncServer mAsyncServer;
    private Callback mCallReact = null;
    private String mLastTrack = "0";
    private boolean mServerStarted = false;

    public HttpServerManager (ReactApplicationContext reactContext) {
        super(reactContext);
        this.mServer = new AsyncHttpServer();
        this.mAsyncServer = new AsyncServer();
    }

    @Override
    public String getName() {
        return "HttpServer";
    }

    @ReactMethod
    public void startTrackerServer(String lastTrack, Callback startServiceCallback) {
        if (this.mServerStarted) return;
        this.startServer();
        this.mLastTrack = lastTrack;
        startServiceCallback.invoke(true);
    }

    // Set callbacks
    @ReactMethod
    public void setCallbacks(Callback callback) {
        this.mCallReact = callback;
    }

    @ReactMethod
    public void setLastTrack(Callback callback) {
        this.mCallReact = callback;
    }

    @ReactMethod
    public void lastTrack(String lastTrack) {
        this.mLastTrack = lastTrack;
    }

    private void startServer() {
        mServer.get("/tracker/last", new HttpServerRequestCallback() {
            @Override
            public void onRequest(AsyncHttpServerRequest request, AsyncHttpServerResponse response) {
                response.send(mLastTrack);
            }
        });
        mServer.post("/tracker/new-items", new HttpServerRequestCallback() {
            @Override
            public void onRequest(AsyncHttpServerRequest request, AsyncHttpServerResponse response) {
                response.send("OK");
                String body = request.getBody().toString();
                try {
                    HashMap<String, Object> jsonBody = mJsonParser.fromJson(body,  HashMap.class);
                    if (jsonBody.get("total") == null || jsonBody.get("total").equals("")) return;
                    mLastTrack = String.valueOf(((Double)jsonBody.get("total")).intValue() + Integer.parseInt(mLastTrack));
                    mCallReact.invoke(body);
                } catch (Exception e) {
                    int a = 1;
                }
            }
        });
        mServer.listen(mAsyncServer, 8080);
    }
}
