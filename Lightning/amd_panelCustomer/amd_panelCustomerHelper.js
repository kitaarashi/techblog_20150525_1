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
        });

        //get purchase history data
		var action = cmp.get($amd.common.SERVER_CALL_GET_PURCHASE_HISTORY);
		action.setParams({
			id: customerId,
			purchaseDate: lastPurchaseDate
		});
        $amd.common.callServer(action, function(a){
	        var data = a.getReturnValue();
	        //change format
	        var historyHeader = {
	        	'purchaseDate' : data[0].PurchaseDate__c,
	        	'store': data[0].Store__r.Name,
	        	'tantosha': data[0].Employee__r.Name
	        };
	        var historyData = []; 
	        for(i=0; i<data.length;i++){
	        	historyData.push({'product':data[i].Product__r.Name, 
	        		              'price':data[i].Product__r.Price__c__formatted});
	        }
	        cmp.set('v.historyHeader', historyHeader);
	        cmp.set('v.historyData', historyData);
        });
	}
})