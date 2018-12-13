define({
  
  onPreShowLoginForm: function(){
    if(kony.application.getCurrentBreakpoint() >1024){
      this.view.imgKonyColor.left = "73dp";
      this.view.forceLayout();
    }
	this.view.main.tbxUserName.onDone=this.handleLoginButtonClick;
    this.view.main.tbxPassword.onDone=this.handleLoginButtonClick;
    this.view.main.btnForgotPassword.onClick = this.navigateToVerifyPage;
    this.view.onDeviceBack = function() {
      var backNav = applicationManager.getBackNavigationManager();
      backNav.onBack();
    };
    
    this.initLoginComponent();
  },
  
  onBreakpointChange: function(){
    if (kony.application.getCurrentBreakpoint() < 1025){
      this.view.main.setTitleAlligmentMiddle();
    }
  },
  
  initLoginComponent: function() {
    this.view.main.setSkinToTitle('sknLbl000000SSPSemiBold20PxKA', '100%');
    this.view.main.changeLoginButton('Login','sknBtnF9F9F9Radius3SourceSansProSemiBoldA0A0A018KA', '45dp');
    this.view.main.changeTbxBackground('sknBordere3e3e3backfffffKA');
    this.view.main.changeCantLoginSkin('sknBtnTEXTSSSB15pxColor0a78d1KA');
    this.view.main.setTitleText('Welcome ! Please Login.');
  },

  handleLoginButtonClick: function() {
    const username = this.view.main.tbxUserName.text.trim();
    const password = this.view.main.tbxPassword.text.trim();
    if (username && password) {
      this.showPreloader();
      const authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthenticationModule");
      authModule.presentationController.onClickOfLogin(
          username,
          password,
          this.hidePreloader.bind(this),
          function() {
            this.hidePreloader();
            this.showErrorAlerts();
          }.bind(this)
      );
    }
  },

   navigateToVerifyPage: function() {
       var  authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthenticationModule");
       authModule.presentationController.navigateToLetsVerify();
   },

  handleCredentialsInput: function() {
    this.toggleLoginButtonAvaliability();
    this.hideErrorAlerts();
  },
  
  
  
  changeFontSizeAtPasswordMaskCircles: function(){
    if(this.view.main.flxPassword.tbxPassword.text.length > 0 && this.view.main.tbxPassword.secureTextEntry){
      this.view.main.flxPassword.tbxPassword.skin = "sknBtnReEnterNewPasswordMaskedText25pxKA";
      this.view.forceLayout();
    }
    if(this.view.main.flxPassword.tbxPassword.text.length === 0){
      this.view.main.flxPassword.tbxPassword.skin = "sknBtnSourceSansRegular42424215KA";
    }
    this.view.forceLayout();
  },

  toggleLoginButtonAvaliability: function() {
    const username = this.view.main.tbxUserName.text.trim();
    const password = this.view.main.tbxPassword.text.trim();
    if (username && password) {
      if(kony.application.getCurrentBreakpoint() === 640){
        this.view.main.btnLogin.skin = "sknBtnValidSourceSansProSemibold00000015pxKA";
      }else{
        this.view.main.btnLogin.skin = "sknBtnValidSourceSansProSemibold00000018pxKA"; // todo enabled skin
      }
      this.view.main.btnLogin.setEnabled(true);
    } else {
      if(kony.application.getCurrentBreakpoint() === 640){
        this.view.main.btnLogin.skin = "sknBtnInvalidSourceSansProSemibold15pxKA";
      }else{
        this.view.main.btnLogin.skin = 'sknBtnF9F9F9Radius3SourceSansProSemiBoldA0A0A018KA';
//         this.view.main.btnLogin.skin = "sknBtnInvalidSourceSansProSemibold18pxKA"; // todo disabled skin !!OLD
      }
      this.view.main.btnLogin.setEnabled(false);
    }
  },

  showErrorAlerts: function() {
    this.view.main.rtxErrorMsg.skin = "sknLblSSRFF0000Size18pxKA";
    this.view.main.flxPassword.skin = "sknBorderFF5D6EKA";
  },

  hideErrorAlerts: function() {
    this.view.main.rtxErrorMsg.skin = "sknLblFFFFFFKA";
    this.view.main.flxPassword.skin = "sknBordere3e3e3backfffffKA";
  },

  handleCannotLoginClick: function() {
    const authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthenticationModule");
    authModule.presentationController.cannotLoginClick();
  },

  showPreloader: function() {
    this.view.flxLoading.isVisible = true;
  },

  hidePreloader: function() {
    this.view.flxLoading.isVisible = false;
  },

  toggleShowHidePassword: function() {
    if (this.view.main.imgViewPassword.src == "view.png") {
      if(kony.application.getCurrentBreakpoint() === 640){
        this.view.main.flxPassword.tbxPassword.skin = "sknBtnSourceSansRegular42424213pxKA";
      }else{
        this.view.main.flxPassword.tbxPassword.skin = "sknBtnSourceSansRegular42424215KA";
      }
      this.view.main.tbxPassword.secureTextEntry = false;
      this.view.main.imgViewPassword.src = "viewiconactive.png";
    } else {
      if(this.view.main.flxPassword.tbxPassword.text.length !== 0){
        this.view.main.flxPassword.tbxPassword.skin = "sknBtnReEnterNewPasswordMaskedText25pxKA";
      }
      this.view.main.tbxPassword.secureTextEntry = true;
      this.view.main.imgViewPassword.src = "view.png";
    }
  },
  
  toggleRememberMe: function() {
    if (this.view.main.imgRememberMe.src == "unchecked_box.png") {
      this.view.main.imgRememberMe.src = "checked_box.png";
    }
    else{
      this.view.main.imgRememberMe.src = "unchecked_box.png";
    }
  }
    
  
});



