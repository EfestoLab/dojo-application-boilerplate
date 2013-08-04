define(['dojo/_base/declare',
        'dgrid/OnDemandGrid', 
        'dgrid/Selection',
        'dgrid/Keyboard',
        // This is required to make the dGrid parentable with dijit widget out of the box.
        'dgrid/extensions/DijitRegistry',],
    function(declare, OnDemandGrid, Selection, Keyboard, DijitRegistry){
    return declare('my_dGrid',[OnDemandGrid, Selection, Keyboard, DijitRegistry],{    
        selectionMode: 'single',
    });
});