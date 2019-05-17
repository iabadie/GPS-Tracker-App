package com.gpstrackerapp;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.koushikdutta.async.AsyncServer;
import com.koushikdutta.async.http.server.AsyncHttpServer;
import com.koushikdutta.async.http.server.AsyncHttpServerRequest;
import com.koushikdutta.async.http.server.AsyncHttpServerResponse;
import com.koushikdutta.async.http.server.HttpServerRequestCallback;

public class HttpServerManager extends ReactContextBaseJavaModule {

    private AsyncHttpServer mServer;
    private AsyncServer mAsyncServer;
    private Callback mCallReact = null;

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
    public void startServer(Callback callback, Callback startServerResponse) {
        if (this.mCallReact == null) return;
        this.startServer();
        this.mCallReact = callback;
        startServerResponse.invoke(true);
    }

    private void startServer() {
        mServer.get("/tracker/last", new HttpServerRequestCallback() {
            @Override
            public void onRequest(AsyncHttpServerRequest request, AsyncHttpServerResponse response) {
                response.send("Hello!!!");
            }
        });
        mServer.get("/tracker/new-item", new HttpServerRequestCallback() {
            @Override
            public void onRequest(AsyncHttpServerRequest request, AsyncHttpServerResponse response) {
                response.send("Hello!!!");
                mCallReact.invoke("INFO");
            }
        });
        mServer.listen(mAsyncServer, 8080);
    }
}
