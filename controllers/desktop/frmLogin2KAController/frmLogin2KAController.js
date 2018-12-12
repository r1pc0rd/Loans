define({
  mobileLoginIsOpen: false,
  
  
  // <JUST FOR DEMO !!!!! >
  navigateToCoApplicant: function(){
    var loansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
      loansModule.presentationController.navigateToLoanInvitationWelcome();
  },
  
  navigateToUserOnboarding: function(){
    var loansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
      loansModule.presentationController.navigateToAddIdentityDetails();
  },
  
  // </JUST FOR DEMO !!!>
  
  preshowLogin2KA : function(){
    
    // <JUST FOR DEMO> !!!
    this.view.lblFeedBackKA.onClick = this.navigateToCoApplicant;
    this.view.lblHelpKA.onClick = this.navigateToUserOnboarding;
    // </JUST FOR DEMO> 
    
    kony.store.setItem("user_id", -1);
    var personalLoansProductCard = this.view.pcPersonalLoansKA;
    personalLoansProductCard.initialize("Personal Loans", "APR as low as", "30.00", "Quick access to cash for those unplanned life events. Low monthly payments without " +
                                        "those sneaky service charges or prepayment penalties.", "personalloansn.png");
    personalLoansProductCard.setLearnMoreCallback(this.navigateToPersonalLoanPrelogin);

    personalLoansProductCard.setOnClickButtonCallback(this.navigateToCustomerRegistrationFlow.bind(this,"PersonalLoan"));
    
    var creditCardProductCard = this.view.pcCreditCardKA;
    creditCardProductCard.initialize("Credit Cards", "APR as low as", "20.00", "Quick access to cash for those unplanned life events. Low monthly payments without " +
                                        "those sneaky service charges or prepayment penalties.", "creditcards57x40.png");
    creditCardProductCard.setLearnMoreCallback(this.navigateCreditCard);

    creditCardProductCard.setOnClickButtonCallback(this.navigateToCustomerRegistrationFlow.bind(this,"CreditCard"));
    
    var vehicleLoansProductCard = this.view.pcVehicleLoansKA;
    vehicleLoansProductCard.initialize("Vehicle Loans", "APR as low as", "35.00", "We all have different wants and needs. A minivan to tote the kids. A four-wheeler to " +
                                        "feel like a kid again. A midlife crisis wakeboard boat? Or an RV just to get away from it all. We have loans for all!",
                                       "autoloans60x38.png");

    vehicleLoansProductCard.setOnClickButtonCallback(this.navigateToCustomerRegistrationFlow.bind(this,"VehicleLoan"));
    vehicleLoansProductCard.setLearnMoreCallback(this.navigateToVehicleLoanType.bind(this));

    var mortgageProductCard = this.view.pcMortgageKA;
    mortgageProductCard.initialize("Mortgage", "APR as low as", "__ . __", "We know a home is more than just four walls and a mortgage loan. It's a place to play. A place " +
                                        "to love, laugh, and cry. A place to Thrive. Thant's why we're there with you every step of the way. Buy your dream home or " +
                                     "refinance. We're here to help.", "mortgage52x55.png");

    mortgageProductCard.setLearnMoreCallback(this.navigateToPersonalLoanPrelogin);
    mortgageProductCard.setOnClickButtonCallback(this.navigateToYourLoan);
    
    var businessLoansProductCard = this.view.pcBusinessLoansKA;
    businessLoansProductCard.initialize("Business Loans", "APR as low as", "__ . __", "Learn about convenient payment options for your loan, credit card, or mortgage.",
                                       "businessloan57x44.png");

    businessLoansProductCard.setLearnMoreCallback(this.navigateToPersonalLoanPrelogin);
    
    var studentLoansProductCard = this.view.pcStudentLoansKA;
    studentLoansProductCard.initialize("Student Loans", "APR as low as", "__ . __", "Learn about convenient payment options for your loan, credit card, or mortgage.",
                                      "educationloan68x40.png");
    studentLoansProductCard.setLearnMoreCallback(this.navigateToPersonalLoanPrelogin);
    this.view.flxLoginNavigationKA.onTouchStart = this.handleLoginButtonClick;

    kony.timer.schedule("apr", this.populateAPRs.bind(this), 1.5, false);


    // Mobile breakpoint: login
    this.view.flxLoginMobileContainerKA.onTouchStart = this.handleLoginButtonClick;

	this.view.onDeviceBack = function() {
      var backNav = applicationManager.getBackNavigationManager();
      backNav.onBack();
    };

	 this.populateAPRs();
    this.view.forceLayout();
  },

   populateAPRs() {
      for (let loan of ClientConfigurations.PREFERENCE.PREF_LOANTYPES) {
         const formattedAPR = parseFloat(loan.APRValue).toFixed(2) + "%";

         switch (loan.id) {
         case "CREDIT_CARD":
            this.view.pcCreditCardKA.lblProductCardPercentsKA.text = formattedAPR; break;
         case "PERSONAL_LOAN":
            this.view.pcPersonalLoansKA.lblProductCardPercentsKA.text = formattedAPR; break;
         case "VEHICLE_LOAN":
            this.view.pcVehicleLoansKA.lblProductCardPercentsKA.text = formattedAPR; break;
         }
      }
   },

  changeHeight: function(el_id, diff){
    var height = this.view[el_id].height;
    var units = parseInt(height) + parseInt(diff);
    var unit_of_measure = height.replace(parseInt(height), "");
    var new_height = "" + units + unit_of_measure;
    
    this.animateChangeHeight.call(this, el_id, height, new_height);
    
    return ("" + units + unit_of_measure);
  },
  
  navigateCreditCard: function(){
    this.setVisibilityOfLoadingGif(true);
    
    var ccModule = kony.mvc.MDAApplication.getSharedInstance()
    							.getModuleManager().getModule("CreditCardModule");
    ccModule.presentationController.navigateCreditCards();
  },
  
  navigateToVehicleLoan: function(){
    this.setVisibilityOfLoadingGif(true);
    
    var vehicleLoanModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("VehicleLoanModule");
    vehicleLoanModule.presentationController.startApplication();
  },
  
  navigateToYourLoan: function() {
    this.setVisibilityOfLoadingGif(true);
    
    var LoansModule=kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
      LoansModule.presentationController.navToYourLoan();
  },

  navigateToPersonalLoanPrelogin: function() {
    kony.application.showLoadingScreen(null,"", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    var loansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
    loansModule.presentationController.setSimulationSectionData("PERSONAL_SIMULATION");
    /*
    applicationManager.getNavigationManager().navigateTo("frmPersonalLoanPreloginKA");*/
  },

  resetHeightOnInit: function() {
    //reset needed for future refactoring according to screens for breakpoints, please dont remove
    /*var current_item_height = this.view.pcPersonalLoansKA.height;
    if (current_item_height && (current_item_height == '591px')) {
      this.setHeight('flxContentKA', 970);
      this.setHeight('flxMainKA', 1592);
      this.setHeight('flxLoansListKA', 655);
      this.setHeight('flxLoansContainerKA', 591);
      this.view.flxBannerContainerKA.zIndex = 100;
      this.view.flxBannerContainerKA.skin = "sknFlxOpacity000000KA";
      this.view.flxLoginContainerKA.isVisible = true;
    } else if (current_item_height && (current_item_height == '317dp')) {
      this.setHeight('flxContentKA', 630);
      this.setHeight('flxMainKA', 1120);
      this.setHeight('flxLoansListKA', 374);
      this.setHeight('flxLoansContainerKA', 314);
      this.view.flxBannerContainerKA.zIndex = 100;
      this.view.flxLoginContainerKA.isVisible = true;
      this.view.flxBannerContainerKA.skin = "sknFlxOpacity000000KA";
    } else if (current_item_height && (current_item_height == '208dp')) {
      this.setHeight('flxContentKA', 1180);
      this.setHeight('flxMainKA', 1392);
      this.setHeight('flxLoansListKA', 940);
      this.setHeight('flxLoansContainerKA', 890);
    }
    this.view.flxBtnAllViewKA.isVisible = true;
    this.view.flxBtnLessViewKA.isVisible = false;
    this.view.forceLayout();*/
  },
  
  

  onHoverLoanItem: function(loanItemId, context) {
    const shadowId = loanItemId.replace('Content', 'Shadow');
    if (context.eventType == constants.ONHOVER_MOUSE_ENTER) {
      this.view[shadowId].skin = "sknAECAECBackgroundShadowKA";
      this.view[loanItemId].widgets()[1].skin = "sknFFFFFFRoundKA";
      if(kony.application.getCurrentBreakpoint() === 640 || kony.application.getCurrentBreakpoint() === 768){
        this.view[loanItemId].widgets()[6].skin = "sknBtnSemobold0a78d1BGRadius3FFFFFFText15PxKA";
      }else{
        this.view[loanItemId].widgets()[6].skin = "sknBtnSemibold0a78d1BGRadius3FFFFFFText18PxKA";
      }
    } else if (context.eventType == constants.ONHOVER_MOUSE_LEAVE) {
      this.view[loanItemId].widgets()[1].skin = "sknAECAECRoundKA";
      if(kony.application.getCurrentBreakpoint() === 640 || kony.application.getCurrentBreakpoint() === 768){
        if(kony.application.getCurrentBreakpoint() === 640){
          this.view[shadowId].skin = "sknFFFFFFnoShadowTransparentBorderKA";
        }else{
          this.view[shadowId].skin = "sknFFFFFFnoShadownoBordersKA";
        }
        this.view[loanItemId].widgets()[6].skin = "sknBtn0a78d1SSP115PxBorder0a78d1Radius3KA";
      }else{
        this.view[shadowId].skin = "sknFFFFFFnoShadownoBordersKA";
        this.view[loanItemId].widgets()[6].skin = "sknBtnSemibold0a78d1SSP18PxBorder0a78d1Radius3KA";
      }
    }
  },

  handleLoginButtonClick: function() {
      const authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthenticationModule");
      authModule.presentationController.navigateToNewLoginForm();
  },

  navigateToForgotPasswordFlow: function() {
    const authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthenticationModule");
    authModule.presentationController.cannotLoginClick();
  },

  showPreloader: function() {
    this.view.flxLoading.isVisible = true;
  },

  hidePreloader: function() {
    this.view.flxLoading.isVisible = false;
  },

  toggleRememberMe: function() {
    const img = this.view.imgCheckboxKA;
    if(img.src == "checkbox_white.png"){
      img.src = "checkboxactiveb1.png";
    }else{
      img.src = "checkbox_white.png";
    }
  },

  navigateToCustomerRegistrationFlow: function(loanType){
    var nav = applicationManager.getNavigationManager();
        nav.setCustomInfo("LoanToApply", loanType);
    const authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthenticationModule");
    authModule.presentationController.onClickOfApply();
  },
  
  animateChangeHeight: function(el_id, height, new_height) {
    this.view[el_id].animate(
      kony.ui.createAnimation({
        0:  {"height":height,"stepConfig": {"timingFunction": kony.anim.EASE}}, 
        100:{"height":new_height,"stepConfig": {"timingFunction": kony.anim.EASE}}}), 
      {
        "duration":1,
        "iterationCount":1,
        "delay":0,
        "fillMode":kony.anim.FILL_MODE_FORWARDS
      }
    );
  },
  
  setHeight: function(el_id, diff){
    var height = this.view[el_id].height;
    var units = parseInt(diff);
    var unit_of_measure = height.replace(parseInt(height), "");
    var new_height = "" + units + unit_of_measure;
    
    this.animateChangeHeight.call(this, el_id, height, new_height);
    
    return ("" + units + unit_of_measure);
  },
  
  hideCards() {
    this.view.pcMortgageKA.setVisibility(false);
    this.view.pcBusinessLoansKA.setVisibility(false);
    this.view.pcStudentLoansKA.setVisibility(false);

    this.view.pcVehicleLoansKA.setVisibility(true);
    this.view.pcCreditCardKA.setVisibility(true);
    this.view.pcPersonalLoansKA.setVisibility(true);
  },

  resetImageHeight: function() {
    /* resize image for save proportion */
    var width = this.view.frame.width;

    this.view.flxImageBannerKA.height = width * 0.185 + 'dp';
  },

  onBreakpointChange: function(breakpoint) {
    this.resetHeightOnInit();
    this.hideCards();
   // this.resetImageHeight();

    if (breakpoint == 768) {
      this.view.imgBannerLoginKA.isVisible = true;
      this.view.imgHamburgerKA.src = "dashboardicon.png";
      this.view.flxHamburgerKA.onClick = "";
    }
    
    this.view.pcPersonalLoansKA.resizeForMobile();
    this.view.pcCreditCardKA.resizeForMobile();
    this.view.pcMortgageKA.resizeForMobile();
    this.view.pcBusinessLoansKA.resizeForMobile();
    this.view.pcStudentLoansKA.resizeForMobile();
    this.view.pcVehicleLoansKA.resizeForMobile();
    
    this.view.forceLayout();
  },
  
  onHoverLink : function(elementId){
    var formId = this.view.id;
    var cursorType = 'pointer';
    kony.dbp.loans.commonFunctions.changeCursor(formId, elementId, cursorType); 
  },

    navigateToVehicleLoanType: function () {
        var nav = applicationManager.getNavigationManager();
        kony.application.showLoadingScreen(null, "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        var queryDefinition_id = "VEHICLE_SIMULATION";
        var vehicleLoanModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("VehicleLoanModule");
        vehicleLoanModule.presentationController.getQueryDefinition(queryDefinition_id);
    },

    getVehicleSimulationQueryDefinitionSuccessCallback() {
        var nav = applicationManager.getNavigationManager();
        nav.navigateTo("frmVehicleLoanTypeKA");
    },

  failureCallback(error){
    //alert("Failed to connect. Try again");
    kony.application.dismissLoadingScreen();
  },
  
  setVisibilityOfLoadingGif: function(bool){
    this.view.flxLoading.setVisibility(bool);
  }

});