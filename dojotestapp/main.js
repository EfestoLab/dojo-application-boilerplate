define([ 'dojo/has', 'require' ], function (has, require) {
    if (has('host-browser')) {
        require([ 'dojotestapp/Application',  'dojo', 'dojo/dom-construct', 'dojo/domReady!' ], function (Application,dojo) {
            app = new dojotestapp.Application()
            app.placeAt(dojo.body());
            app.startup();
        });
    }
    else {
        console.log('Hello from the server!');
    }
});