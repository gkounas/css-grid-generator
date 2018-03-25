var data = {
	
	grids:[],
	
	view:"desktop",
	
	breakpoints:{
		
		"desktop":"1280px",
		
		"tablet":"960px",
		
		"mobile":"640px"
		
	},
	
	gridTypes: [
	
          { text: 'grid', value: 'grid'},
		  
          { text: 'inline-grid', value: 'inline-grid' }
		  
    ],
	
	alignTypes: [
	
          { text: 'stretch', value: 'stretch'},
		  
		  { text: 'start', value: 'start'},
		  
		  { text: 'end', value: 'end'},
		  
		  { text: 'center', value: 'center'}
		  
    ],
	
	justifyTypes: [
	
          { text: 'stretch', value: 'stretch'},
		  
		  { text: 'start', value: 'start'},
		  
		  { text: 'end', value: 'end'},
		  
		  { text: 'center', value: 'center'}
		  
    ],
	
	areaTypes: [
	
          { text: 'header', value: 'header'},
		  
		  { text: 'main', value: 'main'},
		  
		  { text: 'aside', value: 'aside'},
		  
		  { text: 'footer', value: 'footer'},
		  
		  { text: 'empty', value: 'empty'},
		  
		  { text: 'custom', value: 'custom'}
		  
    ],
	
	elementTypes: [
	
          { text: 'header', value: 'header'},
		  
		  { text: 'main', value: 'main'},
		  
		  { text: 'section', value: 'section'},
		  
		  { text: 'aside', value: 'aside'},
		  
		  { text: 'footer', value: 'footer'},
		  
		  { text: 'div', value: 'div'},
		  
		  { text: 'grid', value: 'grid'}
		  
    ],	
	
	
	elementIterations: [
	
          { text: '1', value: ''},
		  
		  { text: '2', value: '2'},
		  
		  { text: '3', value: '3'},
		  
		  { text: '4', value: '4'},
		  
		  { text: '5', value: '5'},
		  
		  { text: '6', value: '6'},
		  
		  { text: '7', value: '7'},
		  
		  { text: '8', value: '8'},
		  
		  { text: '9', value: '9'},
		  
		  { text: '10', value: '10'},
		  
		  { text: 'infinite', value: 'infinite'},
		  
    ],	
	
	animationTypes: [
			{ text: 'No Animation', value: ''},
			{ text: 'bounce', value: 'bounce'},
			{ text: 'flash', value: 'flash'},
			{ text: 'pulse', value: 'pulse'},
			{ text: 'rubberBand', value: 'rubberBand'},
			{ text: 'shake', value: 'shake'},
			{ text: 'headShake', value: 'headShake'},
			{ text: 'swing', value: 'swing'},
			{ text: 'tada', value: 'tada'},
			{ text: 'wobble', value: 'wobble'},
			{ text: 'jello', value: 'jello'},
			{ text: 'bounceIn', value: 'bounceIn'},
			{ text: 'bounceInDown', value: 'bounceInDown'},
			{ text: 'bounceInLeft', value: 'bounceInLeft'},
			{ text: 'bounceInRight', value: 'bounceInRight'},
			{ text: 'bounceInUp', value: 'bounceInUp'},
			{ text: 'bounceOut', value: 'bounceOut'},
			{ text: 'bounceOutDown', value: 'bounceOutDown'},
			{ text: 'bounceOutLeft', value: 'bounceOutLeft'},
			{ text: 'bounceOutRight', value: 'bounceOutRight'},
			{ text: 'bounceOutUp', value: 'bounceOutUp'},
			{ text: 'fadeIn', value: 'fadeIn'},
			{ text: 'fadeInDown', value: 'fadeInDown'},
			{ text: 'fadeInDownBig', value: 'fadeInDownBig'},
			{ text: 'fadeInLeft', value: 'fadeInLeft'},
			{ text: 'fadeInLeftBig', value: 'fadeInLeftBig'},
			{ text: 'fadeInRight', value: 'fadeInRight'},
			{ text: 'fadeInRightBig', value: 'fadeInRightBig'},
			{ text: 'fadeInUp', value: 'fadeInUp'},
			{ text: 'fadeInUpBig', value: 'fadeInUpBig'},
			{ text: 'fadeOut', value: 'fadeOut'},
			{ text: 'fadeOutDown', value: 'fadeOutDown'},
			{ text: 'fadeOutDownBig', value: 'fadeOutDownBig'},
			{ text: 'fadeOutLeft', value: 'fadeOutLeft'},
			{ text: 'fadeOutLeftBig', value: 'fadeOutLeftBig'},
			{ text: 'fadeOutRight', value: 'fadeOutRight'},
			{ text: 'fadeOutRightBig', value: 'fadeOutRightBig'},
			{ text: 'fadeOutUp', value: 'fadeOutUp'},
			{ text: 'fadeOutUpBig', value: 'fadeOutUpBig'},
			{ text: 'flipInX', value: 'flipInX'},
			{ text: 'flipInY', value: 'flipInY'},
			{ text: 'flipOutX', value: 'flipOutX'},
			{ text: 'flipOutY', value: 'flipOutY'},
			{ text: 'lightSpeedIn', value: 'lightSpeedIn'},
			{ text: 'lightSpeedOut', value: 'lightSpeedOut'},
			{ text: 'rotateIn', value: 'rotateIn'},
			{ text: 'rotateInDownLeft', value: 'rotateInDownLeft'},
			{ text: 'rotateInDownRight', value: 'rotateInDownRight'},
			{ text: 'rotateInUpLeft', value: 'rotateInUpLeft'},
			{ text: 'rotateInUpRight', value: 'rotateInUpRight'},
			{ text: 'rotateOut', value: 'rotateOut'},
			{ text: 'rotateOutDownLeft', value: 'rotateOutDownLeft'},
			{ text: 'rotateOutDownRight', value: 'rotateOutDownRight'},
			{ text: 'rotateOutUpLeft', value: 'rotateOutUpLeft'},
			{ text: 'rotateOutUpRight', value: 'rotateOutUpRight'},
			{ text: 'hinge', value: 'hinge'},
			{ text: 'jackInTheBox', value: 'jackInTheBox'},
			{ text: 'rollIn', value: 'rollIn'},
			{ text: 'rollOut', value: 'rollOut'},
			{ text: 'zoomIn', value: 'zoomIn'},
			{ text: 'zoomInDown', value: 'zoomInDown'},
			{ text: 'zoomInLeft', value: 'zoomInLeft'},
			{ text: 'zoomInRight', value: 'zoomInRight'},
			{ text: 'zoomInUp', value: 'zoomInUp'},
			{ text: 'zoomOut', value: 'zoomOut'},
			{ text: 'zoomOutDown', value: 'zoomOutDown'},
			{ text: 'zoomOutLeft', value: 'zoomOutLeft'},
			{ text: 'zoomOutRight', value: 'zoomOutRight'},
			{ text: 'zoomOutUp', value: 'zoomOutUp'},
			{ text: 'slideInDown', value: 'slideInDown'},
			{ text: 'slideInLeft', value: 'slideInLeft'},
			{ text: 'slideInRight', value: 'slideInRight'},
			{ text: 'slideInUp', value: 'slideInUp'},
			{ text: 'slideOutDown', value: 'slideOutDown'},
			{ text: 'slideOutLeft', value: 'slideOutLeft'},
			{ text: 'slideOutRight', value: 'slideOutRight'},
			{ text: 'slideOutUp', value: 'slideOutUp'}
    ],	
		
	dialogBreakpoints:false,
	
	dialogExport:false,
	
	drawer:false,
	
	toastCopy:false,
	
	html_top:'<!DOCTYPE html>\r\n\r\n<html>\r\n\r\n\t<head>\r\n\r\n\t\t<meta charset="utf-8"/>\r\n\r\n\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n\r\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1"/>\r\n\r\n\t\t<title>Created By CSS Grid Generator</title>\r\n\r\n\t\t<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">\r\n\r\n\t</head>\r\n\r\n\t<body>',
	
	html_bottom:'\t</body>\r\n\r\n</html>\r\n\r\n',
	
	css_top:'@supports (grid-area: auto) {',
	
	css_bottom:'}\r\n\r\n',
	
	playAnimation:false,
	
};


Vue.component('app-toolbox', {
	
	template: '#app-toolbox',
	
	data: function () {
		
		return data
		
	}
	
});

Vue.component('app-preview', {
	
	template: '#app-preview',
	
	data: function () {
		
		return data
		
	},
	
	computed: {
		
		getMediaWidth:function(){
			
			return this.breakpoints[this.view];
			
		}
		
	}
	
});

Vue.component('app-gridcontroller', {
	
	template: '#app-gridcontroller',
	
	props:['grids','grid','view','gridTypes','alignTypes','justifyTypes','elementTypes','areaTypes','animationTypes','elementIterations'],
	
	data: function () {
		
		return {collapsed:true}
		
	},
	
	methods:{
		
        newColumn() {
			
			this.grid.columns[GetViewIndex(this.view)].push({
				
				"id":this.grid.columns[GetViewIndex(this.view)].length+1,
				
				"width":"1fr",
				
				"name":"col"
				
			});
			
			this.grid.rows[GetViewIndex(this.view)].forEach(function(row, i) {
				
				this.grid.template_areas[GetViewIndex(this.view)].push({
					
					"id":this.grid.template_areas[GetViewIndex(this.view)].length+1,
					
					"column":this.grid.columns[GetViewIndex(this.view)].length,
					
					"row": i+1,
					
					"name":"",
					
					"custom":""
					
				});						  
					
			}.bind(this));

        },
		
        newRow() {
					
			this.grid.rows[GetViewIndex(this.view)].push({
				
				"id":this.grid.rows[GetViewIndex(this.view)].length+1,
				
				"height":"auto",
				
				"name":"row"
				
			});
			
			this.grid.columns[GetViewIndex(this.view)].forEach(function(column, i) {
				
				this.grid.template_areas[GetViewIndex(this.view)].push({
					
					"id":this.grid.template_areas[GetViewIndex(this.view)].length+1,
					
					"column": i+1,
					
					"row": this.grid.rows[GetViewIndex(this.view)].length,
					
					"name":"",
					
					"custom":""
					
				});						  
					
			}.bind(this));					
				
        },		
		
        newElement() {
			
					this.grid.elements.push({
						
						"id":this.grid.elements.length+1,
						
						"type":"div",
						
						"grid_child_id":"",
						
						"class":"",
						
						"element_id":"",
						
						"area":["","",""],
						
						"grid_column_start":["","",""],
						
						"grid_column_end":["","",""],
						
						"grid_row_start":["","",""],
						
						"grid_row_end":["","",""],
						
						"justify_self":["","",""],
						
						"align_self":["","",""],
						
						"animation":"",
						
						"animation_duration":"",
						
						"animation_delay":"",
						
						"animation_iteration":""
						
					});
									
        },				
		
		deleteThis(grid){
			
			var conf = confirm("Are you sure you want to delete this grid?");
			
			if (conf == true) {
				
				var index = this.grids.indexOf(grid);

                    this.grids.splice(index, 1);
					
					this.grids.forEach(function(grid, i) {
						  
							grid.id = i+1;
							
					});

			}
			
		}
		
    }
	
});

Vue.component('app-columncontroller', {
	
	template: '#app-columncontroller',
	
	props:['columns','column','grid','view'],
	
	data: function () {
		
		return {collapsed:false}
		
	},
	
	methods: {

		deleteThis(column){
			
			var conf = confirm("Are you sure you want to delete this column?");
			
			if (conf == true) {
				
				this.collapsed = false;
				
				var c_id = column.id;
					
				var indexes_to_delete = [];
					
				this.grid.template_areas[GetViewIndex(this.view)].forEach(function(area,i){
					
					if(area.column==c_id){
	
						indexes_to_delete.push(i);
						
					}
					
				});
				
				indexes_to_delete.forEach(function (index){

					this.grid.template_areas[GetViewIndex(this.view)].splice(index, 1);
					
				}.bind(this));
				
				this.grid.template_areas[GetViewIndex(this.view)].forEach(function (area,i){
					
					area.id = i+1;
					
				});
				
				var index = this.columns.indexOf(column);

                    this.columns.splice(index, 1);
					
					this.columns.forEach(function(column, i) {
						  
							column.id = i+1;
							
					});
					

			}
			
		}
	}
	
});

Vue.component('app-rowcontroller', {
	
	template: '#app-rowcontroller',
	
	props:['rows','row','grid','view'],
	
	data: function () {
		
		return {collapsed:false}
		
	},
	
	methods: {

		deleteThis(row){
			
			var conf = confirm("Are you sure you want to delete this row?");
			
			if (conf == true) {
				
				this.collapsed = false;
				
				var r_id = row.id;
					
				var indexes_to_delete = [];
					
				this.grid.template_areas[GetViewIndex(this.view)].forEach(function(area,i){
					
					if(area.row==r_id){
	
						indexes_to_delete.push(i);
						
					}
					
				});
				
				indexes_to_delete.forEach(function (index){

					this.grid.template_areas[GetViewIndex(this.view)].splice(index, 1);
					
				}.bind(this));
				
				tthis.grid.template_areas[GetViewIndex(this.view)].forEach(function (area,i){
					
					area.id = i+1;
					
				});
				
				var index = this.rows.indexOf(row);

                    this.rows.splice(index, 1);
					
					this.rows.forEach(function(row, i) {
						  
							row.id = i+1;
							
					});

			}
			
		}
	}
	
});


Vue.component('app-areacontroller', {
	
	template: '#app-areacontroller',
	
	props:['grid','view'],
	
	data: function () {
		
		return {collapsed:false}
		
	},

	computed: {
		
		gridColumns: function () {
			
		 var strColumns = '';

			
			if(this.grid.columns[GetViewIndex(this.view)].length>0){
				  
				  this.grid.columns[GetViewIndex(this.view)].forEach(function(col) {
					  
						strColumns = strColumns  + " 1fr ["+ col.name +"] ";
						
					});
			  
			 }
		  
		  return strColumns;
		  
		},
		
		gridRows: function () {
			
			var strRows = '';
			
		  if(this.grid.rows[GetViewIndex(this.view)].length>0){
			  
			  this.grid.rows[GetViewIndex(this.view)].forEach(function(row) {
				  
					strRows = strRows + " auto ["+ row.name +"] ";
					
				});
		  
		  }
		  
		  return strRows;
		  
		}	
	
	}
	
});

Vue.component('app-areainput', {
	
	template: '#app-areainput',
	
	props:['area'],
	
	data: function () {
		
		return data
		
	}
	
});

Vue.component('app-elementcontroller', {
	
	template: '#app-elementcontroller',
	
	props:['element','grid','elementTypes','alignTypes','justifyTypes','areaTypes','view','animationTypes','elementIterations'],
	
	data: function () {
		
		return {collapsed:false}
		
	},
	
	methods: {

		deleteThis(element){
			
			var conf = confirm("Are you sure you want to delete this element?");
			
			if (conf == true) {
				
				this.collapsed = false;
				
				if(element.type=="grid" && element.grid_child_id!=""){
					
					for (i=0;i<data.grids.length;i++){
					
						if(data.grids[i].id == element.grid_child_id){
							
							data.grids[i].parent_id = "";
							
						}
						
					}
					
				}

				var index = this.grid.elements.indexOf(element);

                    this.grid.elements.splice(index, 1);
					
					this.grid.elements.forEach(function(el, i) {
						  
							el.id = i+1;
							
					});

			}
			
		},
		
		updateThis(element){
			
			if(element.type=="grid" && element.grid_child_id!=""){
				
				for (i=0;i<data.grids.length;i++){
				
					if(data.grids[i].id == element.grid_child_id){
						
						data.grids[i].parent_id = this.grid.id;
						
					}
					
				}
				
			}
			
			if(element.type!="grid" && element.grid_child_id!=""){
				
				for (i=0;i<data.grids.length;i++){
				
					if(data.grids[i].id == element.grid_child_id){
						
						data.grids[i].parent_id = "";
						
					}
					
				}
				
				element.grid_child_id="";
				
			}
			
			this.collapsed = false;
			
		},
		
	},
	
	computed:{
		
		availabelAreas: function(){
			
				var areaList = [{"text":"none","value":""}];
				
				this.areaTypes.forEach(function(area,i){
					
					if(area.text!="empty" && area.text!="custom"){
						
						areaList.push({"text":area.text,"value":area.value});
						
					}
					
				});
					
				this.grid.template_areas[GetViewIndex(this.view)].forEach(function(area,i){
					
					if(area.custom!="" ){
						
						var newRow = {"text":area.custom,"value":area.custom};
						
						var found = false;
						
						for(var i = 0; i < areaList.length; i++) {
							
							if(areaList[i].value == newRow.value) {

								found = true;
							
								break;
							}
						
						}
						
						if(!found){
							
							areaList.push(newRow);
							
						}
						
						
					}
					
				});
				
				return areaList;
			
		},
		
		columnCheck:function(){
			
			var listColumns= [];
				
				for (i=0;i<=this.grid.columns[GetViewIndex(this.view)].length;i++){
					
					listColumns.push({"text":"Column "+(i+1),"value":(i+1)});
					
				}
			
			return listColumns;
			
		},
	
		rowCheck:function(){
			
			var listRows= [];
			
			for (i=0;i<=this.grid.rows[GetViewIndex(this.view)].length;i++){
				
				listRows.push({"text":"Row "+(i+1),"value":(i+1)});
				
			}
			
			return listRows;
		},
		
		getGrids:function(){
			
			var listGrids= [];
			
			for (i=0;i<data.grids.length;i++){
				
				if(data.grids[i].id != this.grid.id && data.grids[i].parent_id==""){
					
					listGrids.push({"text":"Grid "+data.grids[i].id,"value":data.grids[i].id});
					
				}
				
			}
			
			return listGrids;
			
		}

		
	}	
	
});

Vue.component('app-grid', {
	
	template: '#app-grid',
	
	props:['grid'],
	
	data: function () {
		
		return data
		
	},
	
	methods:{
		
		gridAreaName: function(n){

			if(this.grid.template_areas[GetViewIndex(this.view)][n-1].name!="custom"){
			
				return this.grid.template_areas[GetViewIndex(this.view)][n-1].name;
			
			}else{
				
				return this.grid.template_areas[GetViewIndex(this.view)][n-1].custom;
				
			}

		},
		
		itemJustify: function(element){
			
			return element.justify_self[GetViewIndex(this.view)];

		},
		
		itemAlign: function(element){
			
			return element.align_self[GetViewIndex(this.view)];
		
		},

		itemArea: function(element){
		
			return element.area[GetViewIndex(this.view)];

		},

		itemColumnStart: function(element){
		
			return element.grid_column_start[GetViewIndex(this.view)];

		},

		itemColumnEnd: function(element){
			
		return element.grid_column_end[GetViewIndex(this.view)];

		},

		itemRowStart: function(element){
			
			return element.grid_row_start[GetViewIndex(this.view)];

		},

		itemRowEnd: function(element){
		
			return element.grid_row_end[GetViewIndex(this.view)];

		}
		
	},
	
	computed: {
		
		gridColumns: function () {
			
		 var strColumns = '';
			
			if(this.grid.columns[GetViewIndex(this.view)].length>0){
				  
				  this.grid.columns[GetViewIndex(this.view)].forEach(function(col) {
					  
						strColumns = strColumns + col.width + " ["+ col.name +"] ";
						
					});
			  
			 }
		  
		  return strColumns;
		  
		},
		
		gridRows: function () {
			
			var strRows = '';
			
		  if(this.grid.rows[GetViewIndex(this.view)].length>0){
			  
			  this.grid.rows[GetViewIndex(this.view)].forEach(function(row) {
				  
					strRows = strRows + row.height + " ["+ row.name +"] ";
					
				});
		  
		  }
		  
		  return strRows;
		  
		},
		
		gridDisplay: function () {
			
			return this.grid.display[GetViewIndex(this.view)];

		},		
		
		gridJustify: function () {
			
			return this.grid.justify_items[GetViewIndex(this.view)];
				
		},				
		
		gridAlign: function () {
			
			return this.grid.align_items[GetViewIndex(this.view)];
		 
		},		

		gridGapVert: function () {
			
				return this.grid.gap_ver[GetViewIndex(this.view)];
		 
		},
		
		gridGapHor: function () {
			
				return this.grid.gap_hor[GetViewIndex(this.view)];
		 
		},		
		
		getPlaceholders: function(){
				
				return ((this.grid.rows[GetViewIndex(this.view)].length> 0) ? this.grid.rows[GetViewIndex(this.view)].length : 1) * this.grid.columns[GetViewIndex(this.view)].length;

		},
		
		gridTemplateAreas: function(){
			
			var strAreas = '';
				
				 this.grid.rows[GetViewIndex(this.view)].forEach(function(row,i) {
					 
					 strAreas = strAreas + ' "';
					 
					 this.grid.columns[GetViewIndex(this.view)].forEach(function(column,j) {
						 
						 this.grid.template_areas[GetViewIndex(this.view)].forEach(function(area){
							 
							 if(area.column == j+1 && area.row== i+1){
								 
								 if(area.name !='empty' && area.name!='custom'){
									 
									 strAreas = strAreas +area.name +" ";
									 
								 }else if(area.name =='empty' ){
									 
									 strAreas = strAreas +". ";
									 
								 }else if(area.name =='custom' ){
									 
									 strAreas = strAreas + area.custom+" ";
									 
								 }
								 
							 }
							 
						 });
						
						
					 }.bind(this));
					 
					 strAreas = strAreas + '"';
					 
				 }.bind(this));
			
			return strAreas;
		}
		
	}
	
});

var vm = new Vue({
	
	el: '#app',
	
	data: function () {
		
		return data
		
	},
	
	methods:{
		
        newGrid() { 
		
				data.grids.push({
					
					"id":data.grids.length+1,
					
					"parent_id":"",
					
					"display":["grid","grid","grid"],
					
					"justify_items":["stretch","stretch","stretch"],
					
					"align_items":["stretch","stretch","stretch"],
					
					"gap_hor":["10px","10px","10px"],
					
					"gap_ver":["10px","10px","10px"],
					
					"columns":[
					
						[{
						
							"id":1,
							
							"width":"1fr",
							
							"name":"col"
						
						}],
						
						[{
						
							"id":1,
							
							"width":"1fr",
							
							"name":"col"
						
						}],
						
						[{
						
							"id":1,
							
							"width":"1fr",
							
							"name":"col"
						
						}]
					],
					
					"rows":[
					
						[{
						
							"id":1,
							
							"height":"auto",
							
							"name":"row"
						
						}],
						
						[{
						
							"id":1,
							
							"height":"auto",
							
							"name":"row"
						
						}],		
						
						[{
						
							"id":1,
							
							"height":"auto",
							
							"name":"row"
						
						}]					
					],
					
					template_areas:[
					
						[{
							
							"id":1,
							
							"column":1,
							
							"row":1,
							
							"name":"",
							
							"custom":""
							
						}],
						
						[{
							
							"id":1,
							
							"column":1,
							
							"row":1,
							
							"name":"",
							
							"custom":""
							
						}],
						
						[{
							
							"id":1,
							
							"column":1,
							
							"row":1,
							
							"name":"",
							
							"custom":""
							
						}]
					
					],	
					
					elements:[],
					
				});
				
				if(!this.drawer){
					
					this.drawer = true;
					
				}
				
        },
		
		playAnimations(){
			
			var found = false;
			
			if(data.grids.length>0){
				
				data.grids.forEach(function(grid,i){
					
					if(grid.elements.length>0){
						
						found = true;
					}

				});

			}
			
			if(found){

				data.playAnimation = true;
					
			}

		},
		
		stopAnimations(){
			
				data.playAnimation = false;

		},
		
		copyToClipboard(element_id){
			
			  if (document.selection) { 
			  
				var range = document.body.createTextRange();
				
				range.moveToElementText(document.getElementById(element_id));
				
				range.select().createTextRange();
				
				try {
				  
					var successful = document.execCommand('copy');
					
					this.toastCopy = true;
					
				  } catch (err) {

				  }

			} else if (window.getSelection) {
				
				var range = document.createRange();
				
				 range.selectNode(document.getElementById(element_id));
				 
				 window.getSelection().addRange(range);
				 
				try {
				  
				var successful = document.execCommand('copy');
				
				this.toastCopy = true;
				
			  } catch (err) {

			  }
			}
			
		},
		
		generateHTMLGrid(grid_count,grid,depth){
			
					var grid_code = "";
					
					var tabs= "";
					
					for(g=0; g<depth; g++){
						
						tabs = tabs + '\t';
					}
					
					grid_code = grid_code + '\r\n\r\n\t\t'+tabs+'<div class="grid'+((grid_count>1)?grid.id:'')+'">\r\n\r\n';
					
					grid.elements.forEach(function(el,i){
					
						if(el.type!=='grid'){
							
							grid_code = grid_code + tabs + tabs + '\t\t\t<'+el.type+' class="'+el.class+((el.class=="")?el.type+el.id:'') + ((el.animation!='')?' animated '+el.animation:'')+'" '+((el.element_id!='')?'id="'+el.element_id+'" ':'')+'></'+el.type+'>\r\n\r\n';
							
						}else{
							
							vm.grids.forEach(function(child_grid,k){
								
								 if(el.type=='grid' && child_grid.parent_id==grid.id && child_grid.id==el.grid_child_id){
									 
									 grid_code = grid_code +vm.generateHTMLGrid(grid_count,child_grid,depth+1);
									 
								 }
							 
							});
							
						}
					
					});
					
					grid_code = grid_code + tabs + '\t\t</div>\r\n\r\n';
					
					return grid_code;
		},
		
		generateHTML(){
			
			var html_code = this.html_top;
			
			var grid_count = this.grids.length;
			
			this.grids.forEach(function(grid,i){
				
				if(grid.parent_id==""){
					
					html_code = html_code + vm.generateHTMLGrid(grid_count,grid,0);

				}
				
			});
			
			html_code = html_code +  this.html_bottom;
			
			return html_code;
			
		},
		
		
		generateCSS(){
			
			var css_code = this.css_top;
			
			var grid_count = this.grids.length;
			
			for(j=2;j>=0;j--){
				
				var view = "";
				
				if(j==2){
					
					view = "mobile";
					
				}else if(j==1){
					
					view = "tablet";
					
				}else {
					
					view = "desktop";
					
				}
				
				css_code = css_code + '\r\n\r\n\t@media screen and (min-width: '+this.breakpoints[view]+') {';
			
				this.grids.forEach(function(grid,i){
					
					css_code = css_code + '\r\n\r\n\t\t.grid'+((grid_count>1)?grid.id:'')+'{\r\n\r\n';
					
					if(grid.display[GetViewIndex(view)]!="")
						css_code = css_code + '\t\t\tdisplay:'+grid.display[GetViewIndex(view)]+';\r\n\r\n';
					
					if(grid.justify_items[GetViewIndex(view)]!="")
						css_code = css_code + '\t\t\tjustify-items:'+grid.justify_items[GetViewIndex(view)]+';\r\n\r\n';
					
					if(grid.align_items[GetViewIndex(view)]!="")
						css_code = css_code + '\t\t\talign-items:'+grid.align_items[GetViewIndex(view)]+';\r\n\r\n';
					
					if(grid.gap_hor[GetViewIndex(view)]!="")
						css_code = css_code + '\t\t\tgrid-column-gap:'+grid.gap_hor[GetViewIndex(view)]+';\r\n\r\n';		

					if(grid.gap_ver[GetViewIndex(view)]!="")
						css_code = css_code + '\t\t\tgrid-row-gap:'+grid.gap_ver[GetViewIndex(view)]+';\r\n\r\n';			
					
					if(grid.columns[GetViewIndex(view)].length>0){
						
						  var strColumns ="";
						  
						  grid.columns[GetViewIndex(view)].forEach(function(col) {
							  
								strColumns = strColumns + col.width + " ["+ col.name +"] ";
								
							});
							
							css_code = css_code + '\t\t\tgrid-template-columns:'+strColumns+';\r\n\r\n';		
					  
					 }		
					 
					if(grid.rows[GetViewIndex(view)].length>0){
						
						  var strRows ="";
						  
						  grid.rows[GetViewIndex(view)].forEach(function(row) {
							  
								strRows = strRows + row.height + " ["+ row.name +"] ";
								
							});
							
							css_code = css_code + '\t\t\tgrid-template-rows:'+strRows+';\r\n\r\n';		
					  
					 }				

					 var strAreas = '';
					 
					 grid.rows[GetViewIndex(view)].forEach(function(row,i) {
						 
						 strAreas = strAreas + ' "';
						 
						 grid.columns[GetViewIndex(view)].forEach(function(column,j) {
							 
							 grid.template_areas[GetViewIndex(view)].forEach(function(area){
								 
								 if(area.column == j+1 && area.row== i+1){
									 
									 if(area.name !='empty' && area.name!='custom'){
										 
										 strAreas = strAreas +area.name +" ";
										 
									 }else if(area.name =='empty' ){
										 
										 strAreas = strAreas +". ";
										 
									 }else if(area.name =='custom' ){
										 
										 strAreas = strAreas + area.custom+" ";
										 
									 }
									 
								 }
								 
							 });
							
							
						 }.bind(this));
						 
						 strAreas = strAreas + '"';
						 
					 }.bind(this));
					 
					 if(strAreas!="")
						css_code = css_code + '\t\t\tgrid-template-areas:'+strAreas+';\r\n\r\n';	

					css_code = css_code + '\t\t}\r\n\r\n';
					
					grid.elements.forEach(function(el,i){
					
						css_code = css_code +'\t\t.grid'+((grid_count>1)?grid.id:'')+ ' .'+el.class+((el.class=="")?el.type+el.id:'')+'{\r\n\r\n';
						
						if(el.justify_self[GetViewIndex(view)]!="")
							css_code = css_code + '\t\t\tjustify-self:'+el.justify_self[GetViewIndex(view)]+';\r\n\r\n';
					
						if(el.align_self[GetViewIndex(view)]!="")
							css_code = css_code + '\t\t\talign-self:'+el.align_self[GetViewIndex(view)]+';\r\n\r\n';
						
						if(el.area[GetViewIndex(view)]!="")
							css_code = css_code + '\t\t\tgrid-area:'+el.area[GetViewIndex(view)]+';\r\n\r\n';
						
						if(el.grid_column_start[GetViewIndex(view)]!="")
							css_code = css_code + '\t\t\tgrid-column-start:'+el.grid_column_start[GetViewIndex(view)]+';\r\n\r\n';
						
						if(el.grid_column_end[GetViewIndex(view)]!="")
							css_code = css_code + '\t\t\tgrid-column-end:'+el.grid_column_end[GetViewIndex(view)]+';\r\n\r\n';
						
						if(el.grid_row_start[GetViewIndex(view)]!="")
							css_code = css_code + '\t\t\tgrid-row-start:'+el.grid_row_start[GetViewIndex(view)]+';\r\n\r\n';
						
						if(el.grid_row_end[GetViewIndex(view)]!="")
							css_code = css_code + '\t\t\tgrid-row-end:'+el.grid_row_end[GetViewIndex(view)]+';\r\n\r\n';
						
						if(el.animation_duration!=""){
							
							css_code = css_code +"\t\t\t-webkit-animation-duration:"+el.animation_duration+";\r\n\r\n";
							
							css_code = css_code +"\t\t\t-moz-animation-duration:"+el.animation_duration+";\r\n\r\n";
							
							css_code = css_code +"\t\t\t-ms-animation-duration:"+el.animation_duration+";\r\n\r\n";
							
							css_code = css_code +"\t\t\t-o-animation-duration:"+el.animation_duration+";\r\n\r\n";
							
							css_code = css_code +"\t\t\tanimation-duration:"+el.animation_duration+";\r\n\r\n";
						}
						
						if(el.animation_delay!=""){
							
							css_code = css_code +"\t\t\t-webkit-animation-delay:"+el.animation_delay+";\r\n\r\n";
							
							css_code = css_code +"\t\t\t-moz-animation-delay:"+el.animation_delay+";\r\n\r\n";
							
							css_code = css_code +"\t\t\t-ms-animation-delay:"+el.animation_delay+";\r\n\r\n";
							
							css_code = css_code +"\t\t\t-o-animation-delay:"+el.animation_delay+";\r\n\r\n";
							
							css_code = css_code +"\t\t\tanimation-delay:"+el.animation_delay+";\r\n\r\n";
						}
						
						if(el.animation_iteration!=""){
							
							css_code = css_code +"\t\t\t-webkit-animation-iteration-count:"+el.animation_iteration+";\r\n\r\n";
							
							css_code = css_code +"\t\t\t-moz-animation-iteration-count:"+el.animation_iteration+";\r\n\r\n";
							
							css_code = css_code +"\t\t\t-ms-animation-iteration-count:"+el.animation_iteration+";\r\n\r\n";
							
							css_code = css_code +"\t\t\t-o-animation-iteration-count:"+el.animation_iteration+";\r\n\r\n";
							
							css_code = css_code +"\t\t\tanimation-iteration-count:"+el.animation_iteration+";\r\n\r\n";
						}
			
						css_code = css_code + '\t\t}\r\n\r\n';
					
					}.bind(this));
					
					
					
				}.bind(this));
				
				css_code = css_code + "\t}\r\n\r\n";
			
			}
			
			css_code = css_code +  this.css_bottom;
			
			return css_code;
			
			
		}
		
    }
	
});

//0=desktop,1=tablet,2=mobile
function GetViewIndex(view){
	
	if(view=="desktop"){
		return 0;
	}else if(view=="tablet"){
		return 1;
	}else if(view=="mobile"){
		return 2;
	}
	
}
