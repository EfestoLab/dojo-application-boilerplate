define(['dojo/_base/declare',
        'dgrid/OnDemandGrid', 
        'dgrid/tree',
        'dgrid/editor',
        'dgrid/selector',
        'dgrid/Selection',
        'dgrid/Keyboard',
        // This is required to make the dGrid parentable with dijit widget out of the box.
        'dgrid/extensions/DijitRegistry',

        // test store
        'dgrid/test/data/base',
       	'dijit/form/DateTextBox'],

    function(declare, OnDemandGrid, tree, editor, selector, Selection, Keyboard,DijitRegistry, testStore){
    return declare('my_dGrid',[OnDemandGrid, Selection, Keyboard, DijitRegistry],{    
        store: testCountryStore,
		query: {type: "continent"},
		columns: [ 
			tree({label: "Name", field:"name", sortable: false}),
			editor({label: "Visited", field: "bool", sortable: false}, "checkbox"),
			{label:"Type", field:"type", sortable: false},
			{label:"Population", field:"population"},
			editor({label:"Timezone", field:"timezone"}, dijit.form.DateTextBox)],
    });
});