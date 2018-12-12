define({ 

  //Type your controller code here 
  onViewCreated:function(){
    this.view.flxDetailsLoansKA.highlightOnParentFocus=true;
    this.view.flxSeparator02KA.highlightOnParentFocus=true;
    this.view.flxSeparator02KA.highlightedSkin = "sknFlxE6E6E6KA";
    this.view.flxSeparator01KA.highlightOnParentFocus=true;
    this.view.flxSeparator01KA.highlightedSkin = "sknFlxE6E6E6KA";
    this.view.lblApplicationIDTextKA.highlightOnParentFocus=true;
    this.view.btnResumeApplicationKA.highlightOnParentFocus=true;
    this.view.btnResumeApplicationKA.highlightedSkin = "sknBtn0A78d1R3px129PerKA";
    this.view.lblApplicationStartDateTextKA.highlightOnParentFocus=true;
    this.view.lblDeleteApplicationKA.highlightOnParentFocus=true;
    this.view.lblApplicationIDKA.highlightOnParentFocus=true;
    this.view.lblApplicationStartDateKA.highlightOnParentFocus=true;
    this.view.flxLoanItemKA.highlightOnParentFocus = true;
    this.view.flxLoanItemKA.highlightedSkin = "sknFlxBgColorffffffBorRad8PxKA";
    
  },
 navigateToDashboard:function(){
   this.executeOnParent("navigateToPersonalLoansApplication");
 },
  resumeApplication:function(){
    this.executeOnParent("resumeApplication");
  }
});