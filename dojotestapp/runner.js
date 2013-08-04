require({
    // base url of the imports paths
    baseUrl: '',
    // Defines the packages to be loaded, and map them into a unique namespace
    packages: [
        { name: 'dojo', location: 'javascript/dojo/release-1.7.2/dojo'},
        { name: 'dijit', location: 'javascript/dojo/release-1.7.2/dijit'},
        { name: 'dojox', location: 'javascript/dojo/release-1.7.2/dojox'},
        // Dgrid modules
        { name: 'dgrid', location: 'javascript/dgrid'},
        { name: 'xstyle', location: 'javascript/xstyle'},
        { name: 'put-selector', location: 'javascript/put-selector'},
        // the application
        { name: 'dojotestapp', location: 'dojotestapp'}
    ],
}, 
// Finally load the application
[ 'dojotestapp' ]);