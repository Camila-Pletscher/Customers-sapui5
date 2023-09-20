sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "com/proy/customers/util/Commons"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,UIComponent,Commons) {
        "use strict";

        return Controller.extend("com.proy.customers.controller.Detail", {
            navBack: function(){
                Commons.navBack();
            },
            onChangeLanguage: function(){
                Commons.onChangeLanguage();
            }
            

            // onInit: function () {
            //     var oRouter = UIComponent.getRouterFor(this);
            //     //voy a capturar por medio de attachMatched y la funcion que recibe el id para saber de que producto es la ruta y por lo tanto los datos
            //     //el this lo agregue porque daba error en el scope para desp poder acceder a getView
            //     oRouter.getRoute("ViewDetail").attachMatched(this._onRouteMatched, this);
            // },

            // //defino la funcion que capturara el id
            // _onRouteMatched: function(oEvent){

            //     let oArgs = oEvent.getParameter("arguments");
            //     console.log(oArgs);

            //     let oView = this.getView();

            //     oView.bindElement({
            //         path: `customerModel>/${oArgs.productId}`
            //     })
            // }
            
        });
    });
