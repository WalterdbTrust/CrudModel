jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ModelCrud/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ModelCrud/test/integration/pages/App",
	"ModelCrud/test/integration/pages/Browser",
	"ModelCrud/test/integration/pages/Master",
	"ModelCrud/test/integration/pages/Detail",
	"ModelCrud/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ModelCrud.view."
	});

	sap.ui.require([
		"ModelCrud/test/integration/NavigationJourneyPhone",
		"ModelCrud/test/integration/NotFoundJourneyPhone",
		"ModelCrud/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});