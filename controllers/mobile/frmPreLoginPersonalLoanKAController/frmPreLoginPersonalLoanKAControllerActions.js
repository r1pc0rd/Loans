define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** ontouchstart defined for lblHeaderLoginKA **/
    AS_Label_j46cf5b4c9d247b9b0b27e4503d588d4: function AS_Label_j46cf5b4c9d247b9b0b27e4503d588d4(eventobject, x, y) {
        var self = this;
        var nav = applicationManager.getNavigationManager();
        nav.navigateTo("frmPreLoginKA");
    },
    /** onclick defined for flxBackButtonContainerKA **/
    AS_FlexContainer_g2487874408f42d3b978acd33d7230c3: function AS_FlexContainer_g2487874408f42d3b978acd33d7230c3(eventobject) {
        var self = this;
        return self.navigateToPreviousForm.call(this);
    },
    /** onclick defined for btnApplyKA **/
    AS_Button_jf4c266d48c34590a6f2e289d2c8e168: function AS_Button_jf4c266d48c34590a6f2e289d2c8e168(eventobject) {
        var self = this;
        var nav = applicationManager.getNavigationManager();
        nav.navigateTo("frmMemberEligibilityCheckKA");
    },
    /** onclick defined for btnSimulateNowKA **/
    AS_Button_e3da07727f45491895b3897d4f485d4a: function AS_Button_e3da07727f45491895b3897d4f485d4a(eventobject) {
        var self = this;
        var nav = applicationManager.getNavigationManager();
        nav.navigateTo("frmPreLoginKA");
    },
    /** onclick defined for undefined **/
    AS_BarButtonItem_af6b8d1962db44d3b5eca45a2cfbe201: function AS_BarButtonItem_af6b8d1962db44d3b5eca45a2cfbe201(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLoginKA");
        ntf.navigate();
    },
    /** preshow defined for frmPreLoginPersonalLoanKA **/
    AS_Form_f344f7a4f16c473d90b30c3872d28700: function AS_Form_f344f7a4f16c473d90b30c3872d28700(eventobject) {
        var self = this;
        this.PreLoginpreShowKA();
    }
});