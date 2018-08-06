jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 P_MODEL in the list
// * All 3 P_MODEL have at least one P_SUBMODEL

sap.ui.require([
	"sap/ui/test/Opa5",
	"ModelCrud/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ModelCrud/test/integration/pages/App",
	"ModelCrud/test/integration/pages/Browser",
	"ModelCrud/test/integration/pages/Master",
	"ModelCrud/test/integration/pages/Detail",
	"ModelCrud/test/integration/pages/Create",
	"ModelCrud/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ModelCrud.view."
	});

	sap.ui.require([
		"ModelCrud/test/integration/MasterJourney",
		"ModelCrud/test/integration/NavigationJourney",
		"ModelCrud/test/integration/NotFoundJourney",
		"ModelCrud/test/integration/BusyJourney",
		"ModelCrud/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});