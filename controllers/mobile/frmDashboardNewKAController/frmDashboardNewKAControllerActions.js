define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onrowclick defined for segLoanTypesKA **/
    AS_Segment_f079d25dc04f4caa9cd099b8a17d656b: function AS_Segment_f079d25dc04f4caa9cd099b8a17d656b(eventobject, sectionNumber, rowNumber) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLoansDashboardKA");
        ntf.navigate();
    },
    /** onclick defined for btnApplyNowKA **/
    AS_Button_adf4b4d5c9d445d48b94655045a5deeb: function AS_Button_adf4b4d5c9d445d48b94655045a5deeb(eventobject) {
        var self = this;
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmMyApplicationsKA");
    },
    /** onclick defined for flxHomeKA **/
    AS_FlexContainer_b596669d6b1446ec8b4a12bcffa47ecf: function AS_FlexContainer_b596669d6b1446ec8b4a12bcffa47ecf(eventobject) {
        var self = this;
        this.disableAndroidMenu();
    },
    /** onclick defined for flxAboutUsKA **/
    AS_FlexContainer_fc19db05b79b47189fe10a9a9e8a0694: function AS_FlexContainer_fc19db05b79b47189fe10a9a9e8a0694(eventobject) {
        var self = this;
        this.getApplications();
        this.disableAndroidMenu();
    },
    /** ontouchend defined for imglogoutheaderAndroidKA **/
    AS_Image_c2d3e10c07a44a7bb7f7a2614a022560: function AS_Image_c2d3e10c07a44a7bb7f7a2614a022560(eventobject, x, y) {
        var self = this;
        var nav = applicationManager.getNavigationManager();
        nav.navigateTo("frmPreLoginKA");
    },
    /** ontouchend defined for imgAndroidMenuKA **/
    AS_Image_ca1e4a2780654866a3bd00f95a68e14e: function AS_Image_ca1e4a2780654866a3bd00f95a68e14e(eventobject, x, y) {
        var self = this;
        this.visibleAndroidMenu();
    },
    /** onclick defined for flxHomeKA **/
    AS_FlexContainer_f5fbac1f58b744d2865f4e9e481b14a5: function AS_FlexContainer_f5fbac1f58b744d2865f4e9e481b14a5(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDashboardNewKA");
        ntf.navigate();
    },
    /** onclick defined for flxAboutUsKA **/
    AS_FlexContainer_e4d1f1c831784fdc9ea136ef8a1dfbf9: function AS_FlexContainer_e4d1f1c831784fdc9ea136ef8a1dfbf9(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyApplicationsKA");
        ntf.navigate();
    },
    /** onclick defined for flxNotificationsKA **/
    AS_FlexContainer_d77418006142495ab3a597b0073a427c: function AS_FlexContainer_d77418006142495ab3a597b0073a427c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLocatorKA");
        ntf.navigate();
    },
    /** onclick defined for undefined **/
    AS_BarButtonItem_c80ef0dc6b4e4b9088874e69cdac575e: function AS_BarButtonItem_c80ef0dc6b4e4b9088874e69cdac575e(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmPreLoginKA");
        ntf.navigate();
    }
});