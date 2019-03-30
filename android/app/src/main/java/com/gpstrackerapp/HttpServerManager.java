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

    private AsyncHttpServer server;
    private AsyncServer mAsyncServer;

    public HttpServerManager (ReactApplicationContext reactContext) {
        super(reactContext);
        this.server = new AsyncHttpServer();
        this.mAsyncServer = new AsyncServer();
    }

    @Override
    public String getName() {
        return "HttpServer";
    }

    @ReactMethod
    public void startServer(Callback callback) {
        this.startServer();
        callback.invoke("NATIVE MODULES RULES");
    }

    private void startServer() {
        server.get("/", new HttpServerRequestCallback() {
            @Override
            public void onRequest(AsyncHttpServerRequest request, AsyncHttpServerResponse response) {
                response.send("Hello!!!");
            }
        });
        server.listen(mAsyncServer, 8080);
    }
}
