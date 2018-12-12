define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onclick defined for flxLoginHeaderKA **/
    AS_FlexContainer_f8d5767c9f614127832d1a545fddb232: function AS_FlexContainer_f8d5767c9f614127832d1a545fddb232(eventobject) {
        var self = this;
        this.navigateToPreLoginScreen();
    },
    /** ontextchange defined for tbxUserNameKA **/
    AS_TextField_f393ea189c2e4168b7512795474b9bd6: function AS_TextField_f393ea189c2e4168b7512795474b9bd6(eventobject, changedtext) {
        var self = this;
        this.validateForEmptyUserNameAndPassword();
    },
    /** ontextchange defined for tbxPasswordKA **/
    AS_TextField_gf4fce4ec6a8490caef61ff46b9eca54: function AS_TextField_gf4fce4ec6a8490caef61ff46b9eca54(eventobject, changedtext) {
        var self = this;
        this.validateForEmptyUserNameAndPassword();
    },
    /** ondone defined for tbxPasswordKA **/
    AS_TextField_e5f479678dc845ae8daf5c1a7b8abbcc: function AS_TextField_e5f479678dc845ae8daf5c1a7b8abbcc(eventobject, changedtext) {
        var self = this;
        this.onDonecheckForEmptyPasswordAndSetVisForEye();
    },
    /** onclick defined for flxEyeKA **/
    AS_FlexContainer_ec0351d71ced4f14b75977f0ff335052: function AS_FlexContainer_ec0351d71ced4f14b75977f0ff335052(eventobject) {
        var self = this;
        this.changeEyeIconAndShowPassText();
    },
    /** ontouchstart defined for lblCantLoginKA **/
    AS_Label_fcaeac8a18404514a5cfb26d5b2fead0: function AS_Label_fcaeac8a18404514a5cfb26d5b2fead0(eventobject, x, y) {
        var self = this;
        this.onCannotLoginClick();
    },
    /** onslide defined for swtchRememberMeKA **/
    AS_Switch_h0ee05d3b452401aac5310b62d6b1b9a: function AS_Switch_h0ee05d3b452401aac5310b62d6b1b9a(eventobject) {
        var self = this;
        this.changeSkinOfSwitch(eventobject);
    },
    /** onclick defined for flxLoginKA **/
    AS_FlexContainer_d2535b06e1954783bfc2f3b1ef662e00: function AS_FlexContainer_d2535b06e1954783bfc2f3b1ef662e00(eventobject) {
        var self = this;
        this.onClickOfLogin(this.view.tbxUserNameKA.text, this.view.tbxPasswordKA.text);
    },
    /** onrowclick defined for segLoanTypesKA **/
    AS_Segment_e0c2e6028a5c4c3b8755dbe755121c5b: function AS_Segment_e0c2e6028a5c4c3b8755dbe755121c5b(eventobject, sectionNumber, rowNumber) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmPreLoginPersonalLoanKA");
        ntf.navigate();
    },
    /** onscrollend defined for flxMainKA **/
    AS_FlexScrollContainer_ab9f9be36b9048d993d35f9d702407d2: function AS_FlexScrollContainer_ab9f9be36b9048d993d35f9d702407d2(eventobject) {
        var self = this;
        this.onScrollEnd();
    },
    /** preshow defined for frmPreLoginKA **/
    AS_Form_d7543891f9d341b18aaff9d8ef389a81: function AS_Form_d7543891f9d341b18aaff9d8ef389a81(eventobject) {
        var self = this;
        this.view.flxMainKA.showFadingEdges = false;
        this.view.flxPreLoginDashboardKA.showFadingEdges = false;
    },
    /** postshow defined for frmPreLoginKA **/
    AS_Form_f070af3b96c1438a89356660c6a2bfff: function AS_Form_f070af3b96c1438a89356660c6a2bfff(eventobject) {
        var self = this;
        this.frmPreLoginKApostShow();
    },
    /** onRowClick defined for segLoanTypesKA **/
    AS_Segment_b1232c6560f540bdbb1df4708ed5c31b: function AS_Segment_b1232c6560f540bdbb1df4708ed5c31b(eventobject, sectionNumber, rowNumber) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmPreLoginPersonalLoanKA");
        ntf.navigate();
    }
});