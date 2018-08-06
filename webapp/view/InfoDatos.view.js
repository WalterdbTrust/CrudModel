sap.ui.jsview("ModelCrud.view.InfoDatos", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ModelCrud.view.InfoDatos
	 */
	getControllerName: function() {
		return "ModelCrud.controller.InfoDatos";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ModelCrud.view.InfoDatos
	 */
	createContent: function(oController) {
			var tablaUser = new sap.ui.table.Table("tableUser",{
			editable: false,
			visible: false,
			title: "",
			selectionMode: sap.ui.table.SelectionMode.None,
			visibleRowCount: 5,
			minAutoRowCount: 5
        });



	
		var inputPURPOSE = new sap.m.Input("inputPurposeI", {
			value: "{ path: 'MAKE_ID', type: 'sap.ui.model.odata.type.Int32' }",
            enabled: false,
			visible: false
		});
		
	

	
		var mySelectMenuPurpose = new sap.m.Select("mySelectMenuPurposeI", {
			visible: true,
			enabled: false,
			width: "300px",
				change: function(oEvent) {
				oController.selectMode(oEvent,"inputPURPOSE");
			}
		});
	var	oItemSelectTemplate = new sap.ui.core.Item({
			key: "{MAKE_ID}",
			text: "{DESCRIPTION}"
		}); //Define the template for items, which will be inserted inside a select element

		mySelectMenuPurpose.bindAggregation("items", {
			path: '/P_MAKE',
			template: oItemSelectTemplate
		}); //			

			


		var input2 = new sap.m.Input("inputScoreVelI", {
            width: '300px',
			value: "{ path: 'DESCRIPTION', type: 'sap.ui.model.odata.type.String' , constraints:{ maxLength:100, nullable:false } }",
			visible: true,
            enabled:false,
// 			valueLiveUpdate: true ,
// 			liveChange: function(event){
// 			    oController._validateSaveEnablement(event);
// 			}
		});
// 		var input3 = new sap.m.Input("inputAcelI", {
//             width: '300px',
// 			value: "{ path: 'SCORE_RAPID_ACC', type: 'sap.ui.model.odata.type.Decimal' , constraints:{ precision:8, scale:2, nullable:false } }",
// 			visible: true,
//             enabled: false,
// // 			valueLiveUpdate: true ,
// // 			liveChange: function(event){
// // 			    oController._validateSaveEnablement(event);
// // 			}
// 		});
// 		var input4 = new sap.m.Input("inputFrenadaI", {
//             width: '300px',
// 			value: "{ path: 'SCORE_ROUGH_BRK', type: 'sap.ui.model.odata.type.Decimal' , constraints:{ precision:8, scale:2, nullable:false } }",
// 			visible: true,
//             enabled: false,
// // 			valueLiveUpdate: true ,
// // 			liveChange: function(event){
// // 			    oController._validateSaveEnablement(event);
// // 			}
// 		});
// 		var input5 = new sap.m.Input("inputGiroI", {
//             width: '300px',
// 			value: "{ path: 'SCORE_HARSH_COURSE', type: 'sap.ui.model.odata.type.Decimal' , constraints:{ precision:8, scale:2, nullable:false } }",
// 			visible: true,
//             enabled: false,
// // 			valueLiveUpdate: true ,
// // 			liveChange: function(event){
// // 			    oController._validateSaveEnablement(event);
// // 			}
// 		});
// 			var input1 = new sap.m.Input("inputVelMaxI", {
//             width: '300px',
// 			value: "{ path: 'HIGHER_SPEED', type: 'sap.ui.model.odata.type.Int32' , constraints:{ nullable:false } }",
// 			visible: true,
//             enabled: false,
// // 			valueLiveUpdate: true ,
// // 			liveChange: function(event){
// // 			    oController._validateSaveEnablement(event);
// // 			}
// 		});
// 		var input6 = new sap.m.Input("inputTerrenoI", {
//             width: '300px',
// 			value: "{ path: 'SCORE_ROUGH_TERRAIN', type: 'sap.ui.model.odata.type.Decimal' , constraints:{ precision:8, scale:2, nullable:false } }",
// 			visible: true,
//             enabled: false
// // 			valueLiveUpdate: true ,
// // 			liveChange: function(event){
// // 			    oController._validateSaveEnablement(event);
// // 			}
// 		});

// 		var input7 = new sap.m.Input("inputRPMI", {
//             width: '300px',
// 			value: "{ path: 'SCORE_HIGH_RPM', type: 'sap.ui.model.odata.type.Decimal' , constraints:{ precision:8, scale:2, nullable:false } }",
// 			visible: true,
//             enabled: false,
// // 			valueLiveUpdate: true ,
// // 			liveChange: function(event){
// // 			    oController._validateSaveEnablement(event);
// // 			}
// 		});



		var oFormContainer4 = new sap.ui.layout.form.FormContainer({
			expandable: false,
			title:"",
				
			formElements: [
		
				// new sap.ui.layout.form.FormElement({
				// 	label: "Tipo Vehiculo",
				// 	fields: [mySelectMenuType]
				// }),
				new sap.ui.layout.form.FormElement({
					label: "Marca",
					fields: [mySelectMenuPurpose]
				})
			
		
			
			]
		});
		
		
		var formcontainer5 = new sap.ui.layout.form.FormContainer({
			title:"",
			expandable: false,
			formElements: [
		
				new sap.ui.layout.form.FormElement({
					label: "Modelo",
					fields: [input2]
				})
				// new sap.ui.layout.form.FormElement({
				// 	label: " Aceleracion Brusca",
				// 	fields: [input3]
				// }),
				// new sap.ui.layout.form.FormElement({
				// 	label: "Frenada Brusca",
				// 	fields: [input4]
				// }),
				// new sap.ui.layout.form.FormElement({
				// 	label: "Giro Pronunciado",
				// 	fields: [input5]
				// }),
				// new sap.ui.layout.form.FormElement({
				// 	label: "Terreno mal estado",
				// 	fields: [input6]
				// })
			
				// ,
				// new sap.ui.layout.form.FormElement({
				// 	label: "Rpm",
					
				// 	fields: [input7]
				// })
		
			
			]
		});
		// var formcontainer6 = new sap.ui.layout.form.FormContainer({
		// 	title:"CONFIGURACION DE VELOCIDAD MAXIMA",
		// 	expandable: false,
		// 	formElements: [
		
		// 		new sap.ui.layout.form.FormElement({
		// 			label: "Velocidad Maxima",
		// 			fields: [input1]
		// 		}),
		
		
			
		// 	]
		// });
		
		
		
		
		
		
		
		var oForm4 = new sap.ui.layout.form.Form({
			title: "",
			layout: new sap.ui.layout.form.ResponsiveGridLayout(),
			editable: true,
			formContainers: [oFormContainer4,formcontainer5]
		});
		var contentBox4 = new sap.m.VBox();
		contentBox4.addItem(oForm4);


		return [tablaUser,inputPURPOSE ,contentBox4];
	}

});