define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      	logout: function(){
          var nav = applicationManager.getNavigationManager();
          nav.navigateTo("frmLogin2KA");
        }
	};
});