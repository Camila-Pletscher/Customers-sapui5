sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/UIComponent",
    "com/proy/customers/util/Formatter",
    "com/proy/customers/util/Commons",
    "com/proy/customers/util/Constants"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator,UIComponent, Formatter, Commons, Constants) {
        "use strict";

        return Controller.extend("com.proy.customers.controller.Main", {
            onInit: function () {
                const url = sap.ui.require.toUrl(Constants.MODEL.model_proy) + Constants.MODEL.model_url_ext;
                this._model = new sap.ui.model.odata.v2.ODataModel(url, {
                    json: true,
                    headers: {
                        "DataServiceVersion": "2.0",
                        "Cache-Control": "no-cache, no-store",
                        "Pragma": "no-cache"

                    },
                    useBatch: false
                });

                this._model.read(Constants.MODEL.entity_set, {
                    async: true,
                    success: jQuery.proxy(this.success, this),
                    error: jQuery.proxy(this.error, this)
                })
            },
            

            success: function (oData) {
                const oModel = new JSONModel(oData.results);
                console.log(oModel);
                this.getOwnerComponent().setModel(oModel, Constants.MODEL.model_name);
            },
            error: function () {
                alert('error');
            },
            onChangeName: function (oEvent) {
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();

                if (sQuery && sQuery.length > 0) {
                    var oFilter = new Filter("CompanyName", FilterOperator.Contains, sQuery);
                    aFilters.push(oFilter);
                }

                var oList = this.byId('listCustomers');
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilters);
            },
            onChangeCountry: function (oEvent) {
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();

                if (sQuery && sQuery.length > 0) {
                    var oFilter = new Filter("Country", FilterOperator.Contains, sQuery);
                    aFilters.push(oFilter);
                }

                var oList = this.byId('listCustomers');
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilters);
            },
            onPressCustomer: function(oEvent){

                var oItem = oEvent.getSource().getBindingContext(Constants.MODEL.model_name);

                const sPath = oItem.getPath();
                const oItemSelect = this.getView().getModel(Constants.MODEL.model_name).getProperty(sPath);
                
                console.log(oItemSelect);

                const oModel = new JSONModel(oItemSelect);

                this.getOwnerComponent().setModel(oModel, Constants.MODEL.select_item_model);
                
                // var sCustomerId = oBindingContext.getProperty("CustomerID");

                // // Crear un nuevo modelo JSON para el cliente seleccionado
                // var oSelectedCustomerModel = new JSONModel({
                // CustomerID: sCustomerId,
                // Aquí puedes agregar más propiedades del cliente que desees mostrar en la vista de detalle
                // });

                // Establecer el nuevo modelo en el componente raíz
                // this.getOwnerComponent().setModel(oSelectedCustomerModel, "selectedCustomerModel");

                // console.log(oSelectedCustomerModel);

                this.getOwnerComponent().getRouter().navTo(Constants.VIEW.view_detail, {
                    customerId: oItemSelect.CustomerID
                  });

            },
            onChangeLanguage: function(){
                Commons.onChangeLanguage();
            },
            formatPhone: Formatter.formatPhone
        });
    });
