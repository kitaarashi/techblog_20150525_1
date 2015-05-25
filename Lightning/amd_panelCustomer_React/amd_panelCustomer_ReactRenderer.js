({
	render: function(cmp, helper) {
		var res = this.superRender();

		helper.isRendered = true;
		return res;
	}
})