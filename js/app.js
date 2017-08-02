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
		  
		  { text: 'div', value: 'div'}
		  
    ],	
		
	dialogBreakpoints:false,
	
	dialogExport:false,
	
	drawer:false,
	
	toastCopy:false,
	
	html_top:'<!DOCTYPE html>\r\n\r\n<html>\r\n\r\n\t<head>\r\n\r\n\t\t<meta charset="utf-8"/>\r\n\r\n\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n\r\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1"/>\r\n\r\n\t\t<title>Created By CSS Grid Generator</title>\r\n\r\n\t</head>\r\n\r\n\t<body>',
	
	html_bottom:'\t</body>\r\n\r\n</html>\r\n\r\n',
	
	css_top:'@supports (grid-area: auto) {',
	
	css_bottom:'}\r\n\r\n',
	
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
	
	props:['grids','grid','view','gridTypes','alignTypes','justifyTypes','elementTypes','areaTypes'],
	
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
						
						"class":"",
						
						"element_id":"",
						
						"area":["","",""],
						
						"grid_column_start":["","",""],
						
						"grid_column_end":["","",""],
						
						"grid_row_start":["","",""],
						
						"grid_row_end":["","",""],
						
						"justify_self":["","",""],
						
						"align_self":["","",""]
						
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
	
	props:['element','grid','elementTypes','alignTypes','justifyTypes','areaTypes','view'],
	
	data: function () {
		
		return {collapsed:false}
		
	},
	
	methods: {

		deleteThis(element){
			
			var conf = confirm("Are you sure you want to delete this element?");
			
			if (conf == true) {
				
				this.collapsed = false;

				var index = this.grid.elements.indexOf(element);

                    this.grid.elements.splice(index, 1);
					
					this.grid.elements.forEach(function(el, i) {
						  
							el.id = i+1;
							
					});

			}
			
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
					
					if(area.custom!=""){
						
						areaList.push({"text":area.custom,"value":area.custom});
						
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

new Vue({
	
	el: '#app',
	
	data: function () {
		
		return data
		
	},
	
	methods:{
		
        newGrid() { 
		
				data.grids.push({
					
					"id":data.grids.length+1,
					
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
		
		generateHTML(){
			
			var html_code = this.html_top;
			
			var grid_count = this.grids.length;
			
			this.grids.forEach(function(grid,i){
				
				html_code = html_code + '\r\n\r\n\t\t<div class="grid'+((grid_count>1)?grid.id:'')+'">\r\n\r\n';
				
				grid.elements.forEach(function(el,i){
				
					html_code = html_code + '\t\t\t<'+el.type+' class="'+el.class+((el.class=="")?el.type+el.id:'')+'" '+((el.element_id!='')?'id="'+el.element_id+'" ':'')+'></'+el.type+'>\r\n\r\n';
				
				});
				
				html_code = html_code + '\t\t</div>\r\n\r\n';
				
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
