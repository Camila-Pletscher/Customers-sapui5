sap.ui.define([], function (){
    'use strict';
    return{
        MODEL: {
                    model_name: "customerModel",
                    select_item_model: "selectedCustomerModel",
                    model_proy: "com/proy/customers",
                    model_url_ext: "/northwind/northwind.svc/",
                    entity_set: "/Customers"
                },

        VIEW:    {
                    view_detail: "ViewDetail", 
        },

        FILTER: {
            select_id_name: ""
        },

        ID: {
            list_id: ""
        }
        
    };
}, true);