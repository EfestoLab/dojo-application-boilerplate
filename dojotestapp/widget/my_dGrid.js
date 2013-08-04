define(['dojo/_base/declare',
        'dgrid/OnDemandGrid', 
        'dgrid/tree',
        'dgrid/editor',
        'dgrid/Selection',
        'dgrid/Keyboard',
        // This is required to make the dGrid parentable with dijit widget out of the box.
        'dgrid/extensions/DijitRegistry',
        // test store
        'dgrid/test/data/base'],
    function(declare, OnDemandGrid, tree, editor, Selection, Keyboard, DijitRegistry, testStore){
    return declare('my_dGrid',[OnDemandGrid, Selection, Keyboard, DijitRegistry],{    
        store: testCountryStore,

        selectionMode: 'single',
       //    columns: [
					// { field: "key", label: "key"},
			  //       { field: "value", label: "value"},
			 	//     ],
		columns: [ tree({label: "Name", field:"name", sortable: false}),
						editor({label: "Visited", field: "bool", sortable: false}, "checkbox"),
						{label:"Type", field:"type", sortable: false},
						{label:"Population", field:"population"},
						{label:"Timezone", field:"timezone"}],
    });
});