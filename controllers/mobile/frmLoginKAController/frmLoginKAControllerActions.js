define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** ontextchange defined for tbxUserNameKA **/
    AS_TextField_h38d26f5ceb94ae782cad82def7e0f9f: function AS_TextField_h38d26f5ceb94ae782cad82def7e0f9f(eventobject, changedtext) {
        var self = this;
        this.validateForEmptyUserNameAndPassword();
    },
    /** ontextchange defined for tbxPasswordKA **/
    AS_TextField_bfdd5ac864e547a6aa121b54351ccf7b: function AS_TextField_bfdd5ac864e547a6aa121b54351ccf7b(eventobject, changedtext) {
        var self = this;
        this.validateForEmptyUserNameAndPassword();
    },
    /** ondone defined for tbxPasswordKA **/
    AS_TextField_c7eb8e0c2fc94af2b1c42637369ebc87: function AS_TextField_c7eb8e0c2fc94af2b1c42637369ebc87(eventobject, changedtext) {
        var self = this;
        this.onDonecheckForEmptyPasswordAndSetVisForEye();
    },
    /** onclick defined for flxEyeKA **/
    AS_FlexContainer_e731c555533a4af0898dbc1c5e66472b: function AS_FlexContainer_e731c555533a4af0898dbc1c5e66472b(eventobject) {
        var self = this;
        this.changeEyeIconAndShowPassText();
    },
    /** onclick defined for flxPasswordKA **/
    AS_FlexContainer_j066e92618964c07993c116668cde3fd: function AS_FlexContainer_j066e92618964c07993c116668cde3fd(eventobject) {
        var self = this;
    },
    /** ontouchstart defined for lblCantLoginKA **/
    AS_Label_ee53e658d6da434a9a7f0cbc192b0e17: function AS_Label_ee53e658d6da434a9a7f0cbc192b0e17(eventobject, x, y) {
        var self = this;
        this.onCannotLoginClick();
    },
    /** onslide defined for swtchRememberMeKA **/
    AS_Switch_f50e6a16f9804d1eba1a84bc65575208: function AS_Switch_f50e6a16f9804d1eba1a84bc65575208(eventobject) {
        var self = this;
        this.changeSkinOfSwitch(eventobject);
    },
    /** onclick defined for flxLoginKA **/
    AS_FlexContainer_cc0be036458d4f13ad62502cfec5546c: function AS_FlexContainer_cc0be036458d4f13ad62502cfec5546c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDashboardNewKA");
        ntf.navigate();
    },
    /** ontouchstart defined for lblSignUpKA **/
    AS_Label_ee3f24abb2f74fb3819e3253b3667214: function AS_Label_ee3f24abb2f74fb3819e3253b3667214(eventobject, x, y) {
        var self = this;
        this.navigateToUserIdentification();
    },
    /** ontouchstart defined for lblTouchIDKA **/
    AS_Label_c8a4da3bd72c43d99f15d3fa3355528e: function AS_Label_c8a4da3bd72c43d99f15d3fa3355528e(eventobject, x, y) {
        var self = this;
        this.onClickofTouchID();
    },
    /** onclick defined for flxBottomContKA **/
    AS_FlexContainer_g3d37987595b47c2bcb2dc67b2886876: function AS_FlexContainer_g3d37987595b47c2bcb2dc67b2886876(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmPreLoginKA");
        ntf.navigate();
    },
    /** ontouchstart defined for lblCancelKA **/
    AS_Label_hf8c6be5058a450b81076e4d2c030cc4: function AS_Label_hf8c6be5058a450b81076e4d2c030cc4(eventobject, x, y) {
        var self = this;
        this.onCancelTouchId();
    },
    /** ontouchstart defined for lblcancel1KA **/
    AS_Label_d2d2ba12075545c59049745b811a9897: function AS_Label_d2d2ba12075545c59049745b811a9897(eventobject, x, y) {
        var self = this;
        this.onCancelTouchId();
    },
    /** ontouchstart defined for lblenterpasswordKA **/
    AS_Label_bb21fdb52b324cb384b5e5fa473d2078: function AS_Label_bb21fdb52b324cb384b5e5fa473d2078(eventobject, x, y) {
        var self = this;
        this.onClickEnterPassword();
    },
    /** onclick defined for flxMainFingerPrintKA **/
    AS_FlexContainer_d788269057c447b7895d269378395ce5: function AS_FlexContainer_d788269057c447b7895d269378395ce5(eventobject) {
        var self = this;
        this.doNothing();
    },
    /** onclick defined for flxCancelKA **/
    AS_FlexContainer_a16e07325edd4fb8b74803f01c2e3e43: function AS_FlexContainer_a16e07325edd4fb8b74803f01c2e3e43(eventobject) {
        var self = this;
        this.flxCancelNumberPadOnClick();
    },
    /** onclick defined for flxCancelPinKA **/
    AS_FlexContainer_f53beb2156ff454a9d152573172f27ac: function AS_FlexContainer_f53beb2156ff454a9d152573172f27ac(eventobject) {
        var self = this;
        this.OnCancelPin();
    },
    /** onclick defined for flxMainPinKA **/
    AS_FlexContainer_f02cf0791e654eff9ca34f67f7209f8f: function AS_FlexContainer_f02cf0791e654eff9ca34f67f7209f8f(eventobject) {
        var self = this;
        this.doNothing();
    }
});