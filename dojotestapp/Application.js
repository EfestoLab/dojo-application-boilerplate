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
    'dojo/on',

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
	'dijit/Dialog',

    // stores
    'dojo/store/Memory', 

    // dgrid
    'dojotestapp/widget/my_dGrid'

 ], function(declare,parser,on,template){

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
	 					{'key':'B', 'value':'Bar'},
	 					{'key':'Fa', 'value':'Foo'},
	 					{'key':'Bb', 'value':'Bar'}
	 					]
	 				});
          	},

          	doSomething: function(){
          		console.log('Doing something...');
          		console.log(this.docName)
          		this.docName.set('value', 'Button pressed')
          	},

	        // post create function call
			postCreate: function() {
	            this.inherited(arguments);

	            // connect the button to a function as event
	            // NOTE, using dojo hitch for the closure, to be able to access the widget
	            on(this.setButton,'click', dojo.hitch(this,this.doSomething))
	         },
	 			
	 		// custom function to build the menu
	 		buildMenu: function(){	
				  
				var pSubMenu = new dijit.DropDownMenu();
				pSubMenu.addChild(new dijit.MenuItem({
				  label:"Test"
				}));

				// Add the dropdown to the menubar
				this.mainMenu.addChild(new dijit.PopupMenuBarItem({
				  label:"File",
				  popup:pSubMenu
				}));
	 		},

	 		buildSidePanel: function(){
	 			var newPanel_foo = dijit.layout.ContentPane({title:'Fooo'})
	 			var newPanel_bar = dijit.layout.ContentPane({title:'Bar'})
	 			
	 			newPanel_foo.set('content', '<b>This is some content</b>')
	 			newPanel_bar.set('content', '<b>Some other stuffs here</b>')

	 			this.accordContainer.addChild(newPanel_foo)
	 			this.accordContainer.addChild(newPanel_bar)
	 		},

			// build the page this is an ovewrite to buildRendering function
	        buildRendering: function() {
	            this.inherited(arguments);
	            //force the thml, through the css to fit the page
	            // #TODO investigate further
	            this.style={'height':'100%'}
	            this.buildMenu()
	            this.buildSidePanel()
	            }
     });

 });
