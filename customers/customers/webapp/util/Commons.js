sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
], function (UIComponent, History) {
    "use strict";
    //borrar lo que importo pero no uso 
    return {
        navBack: function () {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getOwnerComponent().getRouter().navTo("App", {}, true);
            }
        },
        onChangeLanguage: function () {
            var sCurrentLanguage = sap.ui.getCore().getConfiguration().getLanguage();
            console.log(sCurrentLanguage);
            var sNewLanguage = sCurrentLanguage === "en" ? "es" : "en";
            console.log(sNewLanguage);
            sap.ui.getCore().getConfiguration().setLanguage(sNewLanguage);
            // var oResourceModel = oComponent.getModel("i18n");
            // console.log(oResourceModel);
            // oResourceModel.refresh();
        }
        
    };
});
