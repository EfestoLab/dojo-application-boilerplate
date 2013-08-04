require({
    // base url of the imports paths
    baseUrl: '',
    // Defines the packages to be loaded, and map them into a unique namespace
    packages: [
        { name: 'dojo', location: 'dojo/release-1.7.2/dojo'},
        { name: 'dijit', location: 'dojo/release-1.7.2/dijit'},
        { name: 'dojox', location: 'dojo/release-1.7.2/dojox'},
        { name: 'dgrid', location: 'dgrid'},
        { name: 'dojotestapp', location: 'dojotestapp'}
    ],
}, 
// Finally load the application
[ 'dojotestapp' ]);