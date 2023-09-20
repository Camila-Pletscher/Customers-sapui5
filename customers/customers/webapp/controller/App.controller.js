sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "jquery.sap.global", // Importa jQuery
    ],
    function(BaseController, JSONModel,jQuery) {
      "use strict";
  
      return BaseController.extend("com.proy.customers.controller.App", {
        onInit() {
          var sJsonPath = jQuery.sap.getModulePath("com.proy.customers", "/localService/select.json");
          var oModel = new JSONModel(sJsonPath);
          console.log(oModel);
          this.getOwnerComponent().setModel(oModel, "selectModel");
        }
      });
    }
  );
  