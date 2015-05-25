'use strict';

module.exports = {
  render : function(customer){
    var React = require('react');
    var CustomerPanel = require('./panelCustomer.jsx');
    React.render(
      <CustomerPanel customer={customer} />,
      document.getElementById('content')
    );
  }
}

