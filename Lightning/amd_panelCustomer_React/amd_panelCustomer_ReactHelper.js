({
	/*
	 * set customer object to attribute
	 */
	setCustomerData: function(cmp, evt, helper){
		//get customer data
		var args = evt.getParam('args');
		if(args === null){
			//customer data is already set.
			return;
		}
        var customerId = args.customerId;
        var lastPurchaseDate = args.lastPurchaseDate;

        //call server method
		var action = cmp.get($amd.common.SERVER_CALL_GET_CUSTOMER);
		action.setParams({
			id: customerId
		});
        $amd.common.callServer(action, function(a){
	        var customer = a.getReturnValue();
	        customer.LastPurchaseDate = lastPurchaseDate;
	        cmp.set('v.customer', customer);
	        helper.rerenderComponent(cmp, evt, helper);
        });

	},
	rerenderComponent: function(cmp, evt, helper){
		if(helper.isRendered){
			//reder react component
			reactjs.render(cmp.get('v.customer'));
//			$REACT.panelCustomer.render(cmp.get('v.customer'));
		}else{
			//no action
		}
	},
	//true after this lightning component is first rendered. 
	isRendered : false

})