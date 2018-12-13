define({ 

//   loanSimulationInput: {
//     type: "",
//     amount: 0,
//     creditRating: 0,
//     valid: false
//   },

  preShow : function(){
    this.view.flxLoading.setVisibility(false);
    var nav = applicationManager.getNavigationManager();
    var applications = nav.getCustomInfo("UserApplications");
    var appMap = new Map();
    var subApplications = [];
    applications.forEach(function(application) {
      if(!appMap.has(application.id)){
        appMap.set(application.id, application);
      }
    });
    for(var element of appMap.values()){
      if(element.Status === "SUBMITTED"){
        subApplications.push(element);
      }
    }
    if(subApplications.length === 0){
      nav.setCustomInfo("IsFirstApplicationToSubmit", true);
    }else{
      nav.setCustomInfo("IsFirstApplicationToSubmit", false);
    }
    
    // find last edited application and fill data to last edited application section
    this.setDataToApplicationsBannerContainer(applications);
    
    var personalLoansProductCard = this.view.pcPersonalLoansKA;
    personalLoansProductCard.initialize("Personal Loans", "APR as low as", "13.27", "Quick access to cash for those unplanned life events. Low monthly payments without " +
                                        "those sneaky service charges or prepayment penalties.", "personalloansn.png");
    personalLoansProductCard.setLearnMoreCallback(this.navigateToPersonalLoanPostlogin);
    personalLoansProductCard.setOnClickButtonCallback(this.startPersonalLoan);
    personalLoansProductCard.setVisibility(false);
    
    var creditCardProductCard = this.view.pcCreditCardsKA;
    creditCardProductCard.initialize("Credit Cards", "APR as low as", "13.27", "Quick access to cash for those unplanned life events. Low monthly payments without " +
                                        "those sneaky service charges or prepayment penalties.", "creditcards57x40.png");
    creditCardProductCard.setLearnMoreCallback(this.navigateToPersonalLoanPostlogin);
    creditCardProductCard.setOnClickButtonCallback(this.navigateCreditCard);
    creditCardProductCard.setVisibility(false);
    
    var vehicleLoansProductCard = this.view.pcVehicleLoansKA;
    vehicleLoansProductCard.initialize("Vehicle Loans", "APR as low as", "13.27", "We all have different wants and needs. A minivan to tote the kids. A four-wheeler to " +
                                        "feel like a kid again. A midlife crisis wakeboard boat? Or an RV just to get away from it all. We have loans for all!",
                                       "autoloans60x38.png");
    vehicleLoansProductCard.setLearnMoreCallback(this.navigateToVehicleLoanType);
    vehicleLoansProductCard.setOnClickButtonCallback(this.navigateToVehicleLoan);
    vehicleLoansProductCard.setVisibility(false);
    
    var mortgageProductCard = this.view.pcMortgageKA;    
    mortgageProductCard.initialize("Mortgage", "APR as low as", "13.27", "We know a home is more than just four walls and a mortgage loan. It's a place to play. A place " +
                                        "to love, laugh, and cry. A place to Thrive. Thant's why we're there with you every step of the way. Buy your dream home or " + 
                                     "refinance. We're here to help.", "mortgage52x55.png");
    mortgageProductCard.setLearnMoreCallback(this.navigateToPersonalLoanPostlogin);
    mortgageProductCard.setOnClickButtonCallback(this.navigateToYourLoan);
    mortgageProductCard.setVisibility(false);
    
    var businessLoansProductCard = this.view.pcBusinessLoansKA;
    businessLoansProductCard.initialize("Business Loans", "APR as low as", "13.27", "Learn about convenient payment options for your loan, credit card, or mortgage.", 
                                       "businessloan57x44.png");
    businessLoansProductCard.setLearnMoreCallback(this.navigateToPersonalLoanPrelogin);
    businessLoansProductCard.setVisibility(false);
    
    var studentLoansProductCard = this.view.pcStudentLoansKA;
    studentLoansProductCard.initialize("Student Loans", "APR as low as", "13.27", "Learn about convenient payment options for your loan, credit card, or mortgage.",
                                      "educationloan68x40.png");
    studentLoansProductCard.setLearnMoreCallback(this.navigateToPersonalLoanPrelogin);
    studentLoansProductCard.setVisibility(false);
    
    this.initActions();
	this.setAPR();
    this.getPreQualifiedData();
    this.setVisibilityOfLoadingGif(false);
    this.view.onDeviceBack = function() {
      var backNav = applicationManager.getBackNavigationManager();
      backNav.onBack();
    };
  },

  setAPR() {
    const loanProductAPRs = ClientConfigurations.PREFERENCE.PREF_LOANTYPES;

    for (let loan of this.loanProductsIds) {
      let tmpLoanTypeObj;
      const tmpAPRlabel = this.view[loan].lblProductCardPercentsKA;

      switch (loan) {
        case "pcPersonalLoansKA":
          tmpLoanTypeObj = loanProductAPRs ? (loanProductAPRs.find(el => el.id == "PERSONAL_LOAN") || {}) : {};
          break;
        case "pcCreditCardsKA":
          tmpLoanTypeObj = loanProductAPRs ? (loanProductAPRs.find(el => el.id == "CREDIT_CARD") || {}) : {};
          break;
        case "pcVehicleLoansKA":
          tmpLoanTypeObj = loanProductAPRs ? (loanProductAPRs.find(el => el.id == "VEHICLE_LOAN") || {}) : {};
          break;
        case "pcMortgageKA":
          tmpLoanTypeObj = loanProductAPRs ? (loanProductAPRs.find(el => el.id == "MORTGAGE_LOAN") || {}) : {};
          break;
        case "pcStudentLoansKA":
          tmpLoanTypeObj = loanProductAPRs ? (loanProductAPRs.find(el => el.id == "STUDENT_LOAN") || {}) : {};
          break;
        case "pcBusinessLoansKA":
          tmpLoanTypeObj = loanProductAPRs ? (loanProductAPRs.find(el => el.id == "BUSINESS_LOAN") || {}) : {};
          break;
      }
      if (tmpLoanTypeObj.id) this.view[loan].setVisibility(true);
      tmpAPRlabel.text = (tmpLoanTypeObj.APRValue ? parseFloat(tmpLoanTypeObj.APRValue).toFixed(2) : "__.__") + "%";
    }
  },
	
  initActions: function() {
    this.view.lblViewAllApplicationsKA.onTouchStart = this.navigateToMyApplications;
    this.view.imgProfileKA.onClick = function() {
      var profileModule = kony.mvc.MDAApplication.getSharedInstance()
      								.getModuleManager().getModule("UserProfileModule");
      profileModule.presentationController.navigateToProfile();
      
//        var LoansModule = kony.mvc.MDAApplication.getSharedInstance()
//        		.getModuleManager().getModule("LoansModule");
//        LoansModule.presentationController.navigateToLoanInvitationWelcome();
    };
  },
  
  navigateToPersonalLoanPostlogin: function() {
    this.setVisibilityOfLoadingGif(true);
    var LoansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
    LoansModule.presentationController.navigateToPersonalLoanPostloginKA();
  },
  
  isElementInArray: function(element,array){
    return (array.indexOf(element) >= 0);
  },

  setDataToApplicationsBannerContainer : function(applications){
	var loanAmountIds = ["PA_LOANAMOUNT", "VA_LOAN_AMOUNT", "CCA_CARDLIMIT"];
    //finding the count of applications
    var counter = applications.length;
    if(counter>0){
      //finding last edited application
      var lastEditedItem = applications[0];
      lastEditedItem = applications.reduce((acc, current) => (current.LastEditedDate > acc.LastEditedDate) ? current : acc, lastEditedItem);
      
      //geting date from last edited application, converting it into required format
      var lastEditDate = new Date(lastEditedItem.LastEditedDate);
      var formatedDate = (lastEditDate.getMonth()+1) + "/" + lastEditDate.getDate() + "/" + lastEditDate.getFullYear();
      
      // filling fields for last submited application
      this.view.lblSubmittedCounterKA.text = counter;
      this.view.lblPersonalLoanApplication.text = this.getCorrectLoanType(lastEditedItem);
      this.view.lblLastEditedSubmittedValueKA.text = formatedDate;
      var loanAmount = "N/A";
		if ("QuestionResponse1" in lastEditedItem) {
			var questionResponse = lastEditedItem.QuestionResponse1;
			var scopeObj = this;
			var callback = function(record) {
				var querySectionQuestionId = record.QuerySectionQuestion_id;
				var value = record.ResponseValue;
				if (scopeObj.isElementInArray(querySectionQuestionId, loanAmountIds)) {
					if (value) {
						loanAmount = '$ ' + value.trim();
					}
				}
			};
			questionResponse.forEach(callback);
		}
		this.view.lblSubmittedCounterKA.text = loanAmount;
      this.view.flxTrackSubmittedKA.onClick = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().
        getModule("LoansModule").presentationController.
          resumeApplication.bind(this,
            lastEditedItem.id,
            lastEditedItem.QueryDefinition_id,
            this.failureCallback.bind(this, "Error while resuming application")); 
    }else{
          //alert("No applications available for the user");
    }
    
  },
  
  getCorrectLoanType: function(lastEditedItem){
    // converting LoanType to an user friendly string
     switch(lastEditedItem.LoanType_id){
      case("PERSONAL_LOAN"):
        return "Personal Loan Application";
      case("VEHICLE_LOAN"):
        return "Vehicle Loan Application";
      case("CREDIT_CARD"):
        return "Credit Cards Application";
      case("MORTGAGE_LOAN"):
        return "Montage Loans Application";
    }
  },

  setVisibilityOfLoadingGif : function(bool){
    this.view.flxLoading.setVisibility(bool);
  },
  
  loanProductsIds: ["pcPersonalLoansKA", "pcCreditCardsKA", "pcVehicleLoansKA", "pcStudentLoansKA", "pcMortgageKA", "pcBusinessLoansKA"],

//   onInit: function() {
//     for (var i = 0; i < this.loanProductsIds.length; i++) {
//       let loanProductsIds = this.loanProductsIds;
//       let loanFlex = this.view[loanProductsIds[i]];

//       loanFlex.onClick = function(thisFlex) {
//         this.loanSimulationInput.type = thisFlex.lblProductCardHeaderKA.text;
//       }.bind(this, loanFlex);
//     }
//   },
  
  navigateToYourLoan: function() {
    this.setVisibilityOfLoadingGif(true);
    var LoansModule=kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
      LoansModule.presentationController.navToYourLoan();
  },

  navigateToMyApplications: function(){
    this.setVisibilityOfLoadingGif(true);
    var LoansModule = kony.mvc.MDAApplication.getSharedInstance()
    								 .getModuleManager().getModule("LoansModule");
    LoansModule.presentationController.navigateToMyApplications();
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
  
  onBreakpointChange: function() {
    this.view.pcPersonalLoansKA.resizeForMobile();
    this.view.pcCreditCardsKA.resizeForMobile();
    this.view.pcMortgageKA.resizeForMobile();
    this.view.pcBusinessLoansKA.resizeForMobile();
    this.view.pcStudentLoansKA.resizeForMobile();
    this.view.pcVehicleLoansKA.resizeForMobile();
    
    this.view.forceLayout();
  },

  createApplication : function(){
    this.setVisibilityOfLoadingGif(true);
    var loansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
    loansModule.presentationController.createApplication();
  },
  
  onHoverLink : function(elementId){
    var formId = this.view.id;
    var cursorType = 'pointer';
    kony.dbp.loans.commonFunctions.changeCursor(formId, elementId, cursorType); 
  },

  navigateToPersonalLoansPostlogin: function(){
    this.setVisibilityOfLoadingGif(true);
    var loansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
    loansModule.presentationController.setSimulationSectionDataPostLogin("PERSONAL_SIMULATION");
  },

  navigateToVehicleLoanType: function () {
    this.setVisibilityOfLoadingGif(true);
    var queryDefinition_id = "VEHICLE_SIMULATION";
    var vehicleLoanModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("VehicleLoanModule");
    vehicleLoanModule.presentationController.getQueryDefinition(queryDefinition_id);
  },

  getPreQualifiedData() {
    var loansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
    loansModule.presentationController.getPrequalData(
      kony.store.getItem("user_id"),
      this.sortDataForCongratulationSection.bind(this),
      this.failureCallback.bind(this, "Error while getting prequalified data"));
  },

  sortDataForCongratulationSection(response) {
    var prePackagesForVehicleSimulation = [];
    var vehiclePackageId = "loanpackage2";
    if (response && response.length) {
      for (var i = 0; i < response.length; i++) {
        var prePackage = response[i];
        if (prePackage && prePackage.PrequalifyPackage_id === vehiclePackageId) {
          prePackagesForVehicleSimulation.push(prePackage.PrequalifyPackage[0]);
        }
      }
    }
    applicationManager.getNavigationManager().setCustomInfo("PrePackagesForVehicleSimulation", prePackagesForVehicleSimulation);
  },

  failureCallback(errmsg) {
    //alert((errmsg || "Failed to connect. Try again"));
    this.view.flxLoading.setVisibility(false);
  },

  startPersonalLoan: function() {
    this.setVisibilityOfLoadingGif(true);
    var personalLoanModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PersonalLoanModule");
    personalLoanModule.presentationController.startPersonalLoanApplication();
  }

 });