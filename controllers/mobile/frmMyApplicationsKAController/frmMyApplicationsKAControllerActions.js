define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onclick defined for flxHomeKA **/
    AS_FlexContainer_aa6e725e10454e2d869c280ff3f146b4: function AS_FlexContainer_aa6e725e10454e2d869c280ff3f146b4(eventobject) {
        var self = this;
        this.navigateToDashboard();
    },
    /** onclick defined for flxAboutUsKA **/
    AS_FlexContainer_f5391ed81c4d4471aab7109200b95903: function AS_FlexContainer_f5391ed81c4d4471aab7109200b95903(eventobject) {
        var self = this;
        this.disableAndroidMenu();
    },
    /** ontouchend defined for imgLogoutKA **/
    AS_Image_fd5532ec57e5486d935e0a7f97bc8b5d: function AS_Image_fd5532ec57e5486d935e0a7f97bc8b5d(eventobject, x, y) {
        var self = this;
        this.navigateToPreLoginDashboard();
    },
    /** ontouchend defined for imgAndroidMenuKA **/
    AS_Image_ca21691c246b418fa471fbe2c10d20e2: function AS_Image_ca21691c246b418fa471fbe2c10d20e2(eventobject, x, y) {
        var self = this;
        this.visibleAndroidMenu();
    },
    /** onrowclick defined for segSubmittedKA **/
    AS_Segment_fe47cc00fc4f43a2ab8c7ec320012ebc: function AS_Segment_fe47cc00fc4f43a2ab8c7ec320012ebc(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onSegRowClick1.call(this);
    },
    /** onclick defined for flxHomeKA **/
    AS_FlexContainer_fe36ac7a39d64f5daf9818bad7d95804: function AS_FlexContainer_fe36ac7a39d64f5daf9818bad7d95804(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDashboardNewKA");
        ntf.navigate();
    },
    /** onclick defined for flxAboutUsKA **/
    AS_FlexContainer_d6b8a7c966514419a925da37f05f2d35: function AS_FlexContainer_d6b8a7c966514419a925da37f05f2d35(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyApplicationsKA");
        ntf.navigate();
    },
    /** onclick defined for flxNotificationsKA **/
    AS_FlexContainer_d338509eaf774f8396f9aee5afc2cc0a: function AS_FlexContainer_d338509eaf774f8396f9aee5afc2cc0a(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLocatorKA");
        ntf.navigate();
    },
    /** onclick defined for undefined **/
    AS_BarButtonItem_e801800aa237489aab06199331dd91d6: function AS_BarButtonItem_e801800aa237489aab06199331dd91d6(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmPreLoginKA");
        ntf.navigate();
    }
});