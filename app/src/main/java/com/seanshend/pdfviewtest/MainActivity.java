package com.seanshend.pdfviewtest;

import android.annotation.SuppressLint;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    private WebView webView;


    //	inside this goes our pdf viewer, just a toy for this test. Requires  more work to make it production ready
    @SuppressLint("NewApi")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = (WebView) findViewById(R.id.webView1);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);

        //The default value is true for API level android.os.Build.VERSION_CDES.ICE_CREAM_SANDWICH_MR1 and below,
        //and false for API level android.os.Build.VERSION_CODES.JELLY_BEAN and above.
        if(android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.JELLY_BEAN)
            settings.setAllowUniversalAccessFromFileURLs(true);

        settings.setBuiltInZoomControls(true);
        webView.setWebChromeClient(new WebChromeClient());
        webView.loadUrl("file:///android_asset/web/viewer.html");

    }

    //	reload on resume
 /*   @Override
    protected void onResume() {
        super.onResume();
        webView.loadUrl( "javascript:window.location.reload( true )" );

    }
*/
    //	clear cache to ensure we have good reload
    @Override
    protected void onPause() {
        super.onPause();
        webView.clearCache(true);

    }
}
