define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** ontouchstart defined for lblHeaderCancelKA **/
    AS_Label_e219a3e96c0c4c348157f145483dc1ae: function AS_Label_e219a3e96c0c4c348157f145483dc1ae(eventobject, x, y) {
        var self = this;
        return self.alertForCancellingSimulation.call(this);
    },
    /** onclick defined for flxBackButtonContainerKA **/
    AS_FlexContainer_f856e2fe59b142b1943c2d7ee4340248: function AS_FlexContainer_f856e2fe59b142b1943c2d7ee4340248(eventobject) {
        var self = this;
        this.navigateToDashboard();
    },
    /** onclick defined for btnApplyKA **/
    AS_Button_ie2b761969e74abd9f1ddd6a031c1f32: function AS_Button_ie2b761969e74abd9f1ddd6a031c1f32(eventobject) {
        var self = this;
        return self.onApplyClick.call(this);
    },
    /** onclick defined for btnApplyNowKA **/
    AS_Button_c846e27225334c5594cedd3674203463: function AS_Button_c846e27225334c5594cedd3674203463(eventobject) {
        var self = this;
        kony.application.showLoadingScreen(null, "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        var LoansModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LoansModule");
        LoansModule.presentationController.startApplication("PERSONAL_APPLICATION");
    },
    /** onclick defined for btnSimulateKA **/
    AS_Button_e8047097804c41b887b8f3c8e1e245fe: function AS_Button_e8047097804c41b887b8f3c8e1e245fe(eventobject) {
        var self = this;
        this.navigateToSimulationHomePage();
    },
    /** onclick defined for undefined **/
    AS_BarButtonItem_a7280414bc474b878812a213e62e8aaa: function AS_BarButtonItem_a7280414bc474b878812a213e62e8aaa(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDashboardNewKA");
        ntf.navigate();
    },
    /** preshow defined for frmLoansDashboardKA **/
    AS_Form_d6ffadecf15a42969917af277635a7dc: function AS_Form_d6ffadecf15a42969917af277635a7dc(eventobject) {
        var self = this;
        this.preShow();
    }
});