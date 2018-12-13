define({
	formState: 'DONE', // could be 'DONE' or 'IN_PROGRESS', 

	onPreShow: function() {  
      this.setPageState();
      
      this.view.btnCancelKA.onClick = this.onCancelClick.bind(this);
      this.view.bntContinueKA.onClick = this.onContinueClick.bind(this);
      this.view.flxHeaderLeftKA.onClick = this.toggleApplicationStatus.bind(this);

      this.view.ApplicationStatusRoadMapKA.setData(this.applicationStatusData);
      
      this.setPopupSkin();
      this.view.informMessageMobleKA.setData('Your application is submitted successfully');
      this.view.InformMessage.setData('Your application is submitted successfully');
    },
  
  	onBreakPointChange: function() {
      var FORM_STATE = this.formState;
      var breakPoint = kony.application.getCurrentBreakpoint();

      this.view.HorizontalStatusRoadmap.onBreakPointChange(breakPoint);
      
      this.setPageState.call(this, FORM_STATE);
      this.view.flxRightColKA.top = FORM_STATE === 'DONE' && breakPoint <= 640 ? '0dp' : '10dp';
      this.view.flxMobileInformAlertKA.setVisibility(breakPoint <= 768 && FORM_STATE === 'IN_PROGRESS');
      this.view.flxInformAlertKA.setVisibility(breakPoint > 768 && FORM_STATE === 'IN_PROGRESS');
      this.view.flxHorizontalRoadmapContainerKA.height = breakPoint <= 640 ? '240dp' : '93dp';
      this.view.informMessageMobleKA.refreshMsgSkins();
    },
  
  	applicationStatusData: [{
      "name": "Loan Application",
      "status": "DONE",
      "rowData": [],
    },
   	{
      "name": "Loan Status",
      "status": "INPROGRESS",
      "rowData": [],
    },
    {
      "name": "Open New Account / Login",
      "status": "DISABLE",
      "rowData": [],
    }],
  
  	horizontalStatusRoadmapData: {
      DONE: [{
         title: 'Application',
         textStatus: 'Submitted',
         status: 'submitted',
      },
      {
         title: 'Underwriting',
         textStatus: 'Done',
         status: 'submitted',
      },
      {
         title: 'Approval',
         textStatus: 'Done',
         status: 'submitted',
      }],

      IN_PROGRESS: [{
         title: 'Application',
         textStatus: 'Submitted',
         status: 'submitted',
       },
       {
         title: 'Underwriting',
         textStatus: 'In progress',
         status: 'in_progress',
       },
       {
         title: 'Approval',
         textStatus: 'Pending',
         status: 'pending',
       }],
    },
  
  	setPopupSkin: function() {
      var desktopSkin = 'sknLbl000000SSPSemiBold20PxKA';
      var mobileSkin = 'sknLblSSPSB00000015KA';
      
      this.view.informMessageMobleKA.setMsgSkin(desktopSkin, mobileSkin);
      this.view.InformMessage.setMsgSkin(desktopSkin, mobileSkin);
    },
  
    setPageState: function() {
      var inProgress = this.formState === 'IN_PROGRESS';
      
      this.view.HorizontalStatusRoadmap.setData(this.horizontalStatusRoadmapData[this.formState]);
      this.view.flxMobileInformAlertKA.setVisibility(inProgress);
      this.view.flxInformAlertKA.setVisibility(inProgress);
      this.view.flxCongratulationsPopupKA.setVisibility(!inProgress);
      this.view.flxButtonsKA.setVisibility(!inProgress);
      this.view.lblContinueKA.setVisibility(!inProgress);

      this.view.flxHelloMrKA.setVisibility(inProgress);
      this.view.lblQueriesKA.setVisibility(inProgress);
      this.view.flxPleaseContactUSContKA.setVisibility(inProgress);
      this.view.lblNoteKA.setVisibility(inProgress);
    },
  
  	onContinueClick() {
      this.navigateToMembershipStatus.call(this);
    },
  
  	onCancelClick() {
      this.navigateToAppIdentityDetails.call(this);
    },

    toggleApplicationStatus: function() {
      this.view.flxAppDetailsKA.setVisibility(!this.view.flxAppDetailsKA.isVisible);
      this.view.imgArrowKA.src = this.view.imgArrowKA.src === 'arrow_down.png' ? 'dropdowniconUp.png' : 'arrow_down.png';
    },
  
    navigateToMembershipStatus: function(){
      var loansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
      loansModule.presentationController.navigateToMembershipStatus();
    },
  
    navigateToAppIdentityDetails: function(){
      var loansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
       loansModule.presentationController.navigateToAddIdentityDetails();
    },
});