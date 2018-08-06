sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ModelCrud.controller.InputDatos", {
			onInit:function(){
		   var codeField = sap.ui.getCore().byId("mySelectMenuPurpose");
       codeField.setValue(null)
	},

	inicia: function() {

			
			},

	selectMode: function(oEvent, inputId) {
			var input2=sap.ui.getCore().byId("ModelId");
			input2.setValue(1)
			var that = this;
			var selectMode = oEvent.getParameters().selectedItem;
			var input = sap.ui.getCore().byId("inputPurpose");
			
			
			
					var b=input.setValue(selectMode.getKey())
		var c=b.mProperties.value;
				console.log(c)
					input.setValue(c);
				// var marrayLength = mySelectMenuMODEL.getBinding().getLength();
				
			
			
			
	
			// var input2=sap.ui.getCore().byId("ModelId");
			// input2.setValue(1)
			
		
			
			// if (inputId === "inputMake") {
			// 	pathModel = "/P_MAKE(" + selectMode.getKey() + ")/P_MODEL";
			// 	var mySelectMenuMODEL = sap.ui.getCore().byId("mySelectMenuModel");
			// 	var oItemSelectTemplate = new sap.ui.core.Item({
			// 		key: "{MODEL_ID}",
			// 		text: "{DESCRIPTION}"
			// 	}); //Define the template for items, which will be inserted inside a select element

			// 	mySelectMenuMODEL.bindAggregation("items", {
			// 		path: pathModel,
			// 		template: oItemSelectTemplate
			// 	});
			// 	mySelectMenuMODEL.getBinding("items").attachDataReceived(function() {
			// 		var marrayOri = mySelectMenuMODEL.getBinding("items").getContexts();
			// 		// var marrayLength = mySelectMenuMODEL.getBinding().getLength();
			// 		sap.ui.getCore().byId("inputModel").setValue(marrayOri[0].getObject().MODEL_ID);

			// 	// 	var myJsonSelect = {
			// 	// 		"select": [{
			// 	// 			"SUBMODEL_ID": "00",
			// 	// 			"DESCRIPTION": "SELECCIONE MODELO"
			// 	// 		}]
			// 	// 	};

			// 		// 		var mModel = new sap.ui.model.json.JSONModel(myJsonSelect); //initialise your model from a JSON file
			// 		var mySelectMenuSUBMODEL = sap.ui.getCore().byId("mySelectMenuSubModel");
			// 		oItemSelectTemplate = new sap.ui.core.Item({
			// 			key: "{SUBMODEL_ID}",
			// 			text: "{DESCRIPTION}"
			// 		}); //Define the template for items, which will be inserted inside a select element

			// 		mySelectMenuSUBMODEL.bindAggregation("items", {
			// 			path: pathModel + "(" + marrayOri[0].getObject().MODEL_ID + ")/P_SUBMODEL",
			// 			template: oItemSelectTemplate
			// 		}); //		

			// 		mySelectMenuSUBMODEL.getBinding("items").attachDataReceived(function() {
			// 			var marrayOri2 = mySelectMenuSUBMODEL.getBinding("items").getContexts();
			// 			// var marrayLength = mySelectMenuMODEL.getBinding().getLength();
			// 			sap.ui.getCore().byId("inputSubModel").setValue(marrayOri2[0].getObject().SUBMODEL_ID);

			// 		});
			// 	});
			// }

			// if (inputId === "inputModel") {
			// 	var mySelectMenuSUBMODEL = sap.ui.getCore().byId("mySelectMenuSubModel");
			// 	oItemSelectTemplate = new sap.ui.core.Item({
			// 		key: "{SUBMODEL_ID}",
			// 		text: "{DESCRIPTION}"
			// 	}); //Define the template for items, which will be inserted inside a select element

			// 	// 		mySelectMenu.setModel(mModel); // set model your_data_model to Select element
			// 	// mySelectMenuSUBMODEL.setModel(that.getModel()); // set model your_data_model to Select element
			// 	// 		console.log("Input:",input.getValue());
			// 	mySelectMenuSUBMODEL.bindAggregation("items", {
			// 		path: pathModel + "(" + selectMode.getKey() + ")/P_SUBMODEL",
			// 		filters: [new sap.ui.model.Filter("MODEL_ID", sap.ui.model.FilterOperator.EQ, input.getValue())],
			// 		template: oItemSelectTemplate
			// 	}); //			
			// 	mySelectMenuSUBMODEL.getBinding("items").attachDataReceived(function() {
			// 		var marrayOri2 = mySelectMenuSUBMODEL.getBinding("items").getContexts();
			// 		// var marrayLength = mySelectMenuMODEL.getBinding().getLength();
			// 		sap.ui.getCore().byId("inputSubModel").setValue(marrayOri2[0].getObject().SUBMODEL_ID);

			// 	});


			// }
			

		},

		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf abm_vehiculos.view.inputDatos
		 */
		//	

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf abm_vehiculos.view.inputDatos
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf abm_vehiculos.view.inputDatos
		 */
			onAfterRendering: function() {
			 //   var text1 = sap.ui.getCore().byId("textVIN");
			 //   text1.
    //             text1.addStyleClass("sapUiSmallMarginTop sapUiTinyMarginBottom");	
			}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf abm_vehiculos.view.inputDatos
		 */
		//	onExit: function() {
		//
		//	}

	});

});