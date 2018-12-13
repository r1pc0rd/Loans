define({
  onNavigate: function() {
//     this.pauseNavigation();
//     var loansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
//     loansModule.presentationController.getQueryDefinitionFromNavObject(this.getQueryDefinitionCallback);
  },
  
  onPreShow: function() {
    this.initAction();
    this.view.onDeviceBack = function() {
      var backNav = applicationManager.getBackNavigationManager();
      backNav.onBack();
    };
    //setting APR
    this.setAPR();
  },
  
  initAction: function() {
    this.view.lblCloseMobileKA.onTouchStart = this.onClickOfLogin;
    this.view.sliderLoansKA.onSlide = this.setAmountFromSlider;
    this.initButtons();
    this.view.flxLoginKA.onClick = this.onClickOfLogin;
    this.view.lblCloseMobileKA.onClick = this.onClickOfLogin;
    this.view.BtnApplyNowPLKA.onClick = this.onClickOfApply;
    this.view.BtnGetStartedApplyNowKA.onClick = this.onClickOfApply;
    //this.view.btnFindRatesKA.onClick = this.submitSimulation;
    this.view.btnFindRatesKA.onClick = function(){
      var loansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
      loansModule.presentationController.navigatetoFrmPersonalOffers();
    };
  },
  
  setAmountFromSlider: function() {
    console.log(this.view.sliderLoansKA);
    this.view.lblPersonalLoansAmountLoansLoansKA.text = '$' + this.view.sliderLoansKA.selectedValue;
  },
  
  initButtons: function() {
  	this.view.flxScoreButtonOneKA.onClick = this.changeButtonsState; 
    this.view.flxScoreButtonTwoKA.onClick = this.changeButtonsState;
    this.view.flxScoreButtonThreeKA.onClick = this.changeButtonsState;
    this.view.flxScoreButtonFourKA.onClick = this.changeButtonsState;
  },
  
  changeButtonsState: function(element) {
    this.removeActiveFromButtons();
    this.setActiveThisButton(element);
  },
  
  setActiveThisButton: function(element) {
    element.skin = 'sknFlxBorder1px0A78D1Radius32PXShadowKA';
    element.widgets()[0].skin = 'sknLbl000000SSPSemiBold20PxKA';
  },
  
  removeActiveFromButtons: function() {
     var allButtons = this.view.flxWhatISyourCreditScoreContKA.widgets();
     for (var i = 0; i < allButtons.length; i++) {
       if (allButtons[i].skin === 'sknFlxBorder1px0A78D1Radius32PXShadowKA') {
         allButtons[i].skin = 'sknFlxBorder1pxE6E6E6Radius34pxKA';
         allButtons[i].widgets()[0].skin = 'sknLbl35414DSSPRegular15PxKA';
         return;
       }
     }
  },
  
  submitSimulation: function() {
    var answers={};
    answers["LoanAmount"]=this.view.Slider.resultingText;
	answers["CreditScore"]=this.view.Slider2.resultingText;
    var loansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
    loansModule.presentationController.saveQuestionResponses(answers);
  },
  getQueryDefinitionCallback: function(res) {
    this.populateFormData(res);
    kony.application.dismissLoadingScreen();
  },
  populateFormData: function(queryDefinition){
    this.view.lblLoanAmountQueKA.text=queryDefinition.QuerySection[0].QuerySectionQuestion[0].QuestionDefinition.name;
    this.view.LblCreditScoreQuesKA.text=queryDefinition.QuerySection[1].QuerySectionQuestion[0].QuestionDefinition.name;
    this.resumeNavigation();
  },
  navigateToYourLoan: function() {
    const authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthenticationModule");
    authModule.presentationController.onLoginAfterPasswordReset();
  },

  navigatetoCustomerRegistration: function(){
    var loansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
    loansModule.presentationController.navigatetoCustomerRegistration();
  },
  setAmountToTextbox: function(element) {
    var amount = parseInt(this.view[element.id].selectedValue);
    var labelOffset = parseInt(amount * 100 / 35000) + "%";

    
    if (element.id == "sliderAmountKA") {
      amount = "Fair";
    } else if (element.id == "sliderKA") {
      amount = amount.toLocaleString();
      amount = "$" + amount;
    }

    this.view[element.id].parent.widgets()[0].text = amount;
    this.view[element.id].parent.widgets()[0].left = labelOffset;
    this.view.forceLayout();
  },
   onClickOfApply : function(){
    const authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthenticationModule");
    authModule.presentationController.onClickOfApply();
  },
  
  setAPR: function(){
    try{
      var loanProductAPRs = ClientConfigurations.PREFERENCE.PREF_LOANTYPE_APR_ALL;
      var tmpLoanTypeObj = loanProductAPRs ? loanProductAPRs.find(el => el.LoanType_id == "PERSONAL_LOAN") : {};
      // APR value is set here
      this.view.lblAPRRateKA.text = "APR as low as " +(tmpLoanTypeObj.APRValue ? parseFloat(tmpLoanTypeObj.APRValue).toFixed(2) : "_._") + "%";
    }
    catch(err){
      alert(err);
    }
  },
  
  onClickOfLogin:function(){
    const nav = applicationManager.getNavigationManager();
    nav.navigateTo("frmLogin2KA");
  }
  
});
