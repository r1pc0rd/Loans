define(function() {
	return {
		setSkinToTitle: function(skin, width) {
          this.view.lblWelcomeMobile.skin = skin;
          this.view.lblWelcomeMobile.width = width;
        },
      
        changeLoginButton: function(text, skin, height) {
          this.view.btnLogin.skin = skin;
          this.view.btnLogin.text = text;
          this.view.btnLogin.height = height;
        },
      
        changeTbxBackground: function(skin) {
          this.view.flxUserName.skin = skin;
          this.view.flxPassword.skin = skin;
        },
      
      	changeCantLoginSkin: function(skin) {
          this.view.btnForgotPassword.skin = skin;
        },
      
        setTitleAlligmentMiddle: function() {
          this.view.lblWelcomeMobile.contentAlignment = constants.CONTENT_ALIGN_CENTER;
        },
        
        setTitleText: function(text){
          this.view.lblWelcomeMobile.text = text;
        }
	};
});