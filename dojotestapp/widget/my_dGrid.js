define(['dojo/_base/declare',
        'dgrid/OnDemandGrid', 
        'dgrid/tree',
        'dgrid/editor',
        'dgrid/Selection',
        'dgrid/Keyboard',

        // This is required to make the dGrid usable with dijit widget out of the box.
        'dgrid/extensions/DijitRegistry',

        // test dgrid store
        'dgrid/test/data/base'
       	],

    function(declare, OnDemandGrid, tree, editor, Selection ,Keyboard, DijitRegistry, testStore){
    return declare('my_dGrid', [OnDemandGrid, Selection, Keyboard, DijitRegistry], {    

        // Use the testCountryStore in dgrid/test/data/base
        store: testCountryStore,

        // Set other grid attributes
        query: {type: "continent"},	// query to the store
    	loadingMessage: "Loading data...", // message while loading
    	noDataMessage: "No results found.", // message on error
 		selectionMode: "single", // for Selection; only select a single row at a time
        cellNavigation: true,// for Keyboard; allow only row-level keyboard navigation
		columns: {
					countries: tree({label: "Name", field:"name", sortable: false}),
					visited: editor({label: "Visited", field: "bool", sortable: false}, "checkbox"),
					type: {label:"Type", field:"type", sortable: false},
					population: {label:"Population", field:"population"},
					timezone: {label:"Timezone", field:"timezone"}
				},

        constructor: function(args) {
            dojo.safeMixin(this, args);
            // PRINT THE QUERY RESULTS FOR DEBUG PURPOSES
            var conts = this.store.query({type:'continent'}).then(function(results){
            	for (result in results){
            		console.log('restult:', results[result])

            	}
            	console.log('results:', results.length)	
            })
        	
        },

    })
});