({
	/*
	 * initialize
	 */
	doInit: function(cmp, evt, helper) {
	},
	/*
	 * event handler for showPanel event
	 * show/hide this panel
	 */
	showPanel: function(cmp, evt, helper){
		var panel = evt.getParam('panel');
		if(panel==='customer'){
			helper.setCustomerData(cmp, evt, helper);		
			//show this panel
			$('#panelCustomer').removeClass('hide');
		}else{
			//hide this panel
			$('#panelCustomer').addClass('hide');
		}
	}
})