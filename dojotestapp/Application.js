/*
 A generic dojo application stripped to the minimum
 
 It defines an application named Application under the dojotestapp namespace
 the application is parsed at startup ,and uses a template and a style 
 for the layout. The application inherits from a border container , the most 
 flexible of all the dijit layout.
 * */

define('dojotestapp/Application',[

    // exposed in applications 
    'dojo/_base/declare',
    'dojo/parser',

    // This is the main template of the application
    'dojo/text!dojotestapp/templates/main.html',

    // for widget & template
    'dijit/_WidgetsInTemplateMixin',
    'dijit/_TemplatedMixin',

    // widget imports
    'dijit/form/Button',
    'dijit/form/TextBox',
    'dijit/form/NumberTextBox',
    'dijit/layout/BorderContainer',
    'dijit/layout/ContentPane',
    'dijit/layout/LayoutContainer',
    'dijit/MenuBar',
    'dijit/PopupMenuBarItem',
    'dijit/DropDownMenu',
    'dijit/MenuItem',
    'dijit/layout/ContentPane',
    'dijit/layout/AccordionContainer',
    'dijit/form/Textarea',
    'dijit/form/TextBox',
	'dijit/Tooltip',

    // expermiental features
    'dojox/data/FileStore',
    'dojox/socket',
    'dojox/socket/Reconnect',
    'dojox/grid/DataGrid',
    'dojox/layout/GridContainer',
    'dojox/widget/Portlet',

    // stores
    'dojo/store/Observable',
    'dojo/data/ItemFileWriteStore',
    "dojo/store/Memory", 
    'dojo/store/Cache',
    'dojo/data/ObjectStore',
    'dojo/store/JsonRest',

    // dgrid
    'dgrid/Grid'

 ], function(declare,parser,template){

     declare("dojotestapp.Application", 
     		// inherited from :
     		// border container as main layout
     		// TemplatedWidget and WIdgetInTemplateMixin for the templated widget
     		//
     		[dijit.layout.BorderContainer,
             dijit._TemplatedMixin,
             dijit._WidgetsInTemplateMixin], {
 			
 			// widget in template settings and template
 			widgetsInTemplate:true,
	 		templateString: template,
	 		
	 		// Border container settings
	        design: 'sidebar',
    	    liveSplitters: false,
	 		gutters: false,
	 		
	 		// custom class variable
 			name:'Dojo Application Boilerplate',
	 		
	 		// init & super call
	 		constructor: function(args) {
	 			dojo.safeMixin(this, args);
	 			this.createStores();
	 		},

          	createStores: function(){
				// Create store and populate with default data
	 			this.memoryStore = new dojo.store.Memory({
	 				data:[
	 					{'key':'F', 'value':'Foo'},
	 					{'key':'B', 'value':'Bar'}
	 					]
	 				});
	 			// the grid is an old implementation and should be replaced with dgid
	 			// #TODO replace dataGrid with dGrid
				this.adapterStore = new dojo.data.ObjectStore({objectStore:this.memoryStore});
				
          	},

          	doSomething: function(){

          		console.log('Doing something...');
          	},

	        // post create function call
			postCreate: function() {
	            this.inherited(arguments);
	            console.log('postcreate')

	            // connect the button to a function as event
	            dojo.connect(this.setButton,'onClick', this, this.doSomething)

				// define the fields of the grid
				var structure = [
					{ name: "key", field: "key", width: "45px"},
			        { name: "value", field: "value", width: "300px"},
			    ];
			    
			    // attach store and structure to the grid
			    this.gridNotify.set('structure',structure)
	            this.gridNotify.set('store',this.adapterStore)
	         },
	 			
	 		// custom function to build the menu
	 		buildMenu: function(){	
	 		  
		      var pSubMenu = new dijit.DropDownMenu({});
		      pSubMenu.addChild(new dijit.MenuItem({
		          label:"Test"
		      }));
			 			
		      this.mainMenu.addChild(new dijit.PopupMenuBarItem({
		          label:"File",
		          popup:pSubMenu
		      }));
	 			
	 		},

			// build the page
	        buildRendering: function() {
	            this.inherited(arguments);
	            //force the thml, through the css to fit the page
	            // #TODO investigate further
	            this.style={'height':'100%'}
	            this.buildMenu()
	            },
     });

 });
