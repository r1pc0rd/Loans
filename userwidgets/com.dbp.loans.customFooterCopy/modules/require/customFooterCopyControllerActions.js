define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onclick defined for flxHomeKA **/
    AS_FlexContainer_c32d41e8bc5a497ca4276a98768fb84f: function AS_FlexContainer_c32d41e8bc5a497ca4276a98768fb84f(eventobject) {
        var self = this;
        this.view.lblAboutUsKA.skin = "sknLblA0A0A0SSP20px";
        this.view.lblHomeKA.skin = "sknLblSourceSansProRegular0A78D186PerKA";
        this.view.lblMyProfileKA.skin = "sknLblA0A0A0SSP20px"
        this.view.lblNotificationsKA.skin = "sknLblA0A0A0SSP20px"
        this.view.imgHomeKA.src = "homeiconactive.png"
        this.view.imgAboutUsKA.src = "aboutus.png"
        this.view.imgMyProfileKA.src = "myprofile.png"
        this.view.imgNotificationsKA.src = "menuicon.png"
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmDashboardNewKA");
    },
    /** onclick defined for flxAboutUsKA **/
    AS_FlexContainer_c50850c53fbf4b968126ba20666aeef4: function AS_FlexContainer_c50850c53fbf4b968126ba20666aeef4(eventobject) {
        var self = this;
        this.view.imgAboutUsKA.src = "aboutusblue.png"
        this.view.lblAboutUsKA.skin = "sknLblSourceSansProRegular0A78D186PerKA";
        this.view.lblHomeKA.skin = "sknLblA0A0A0SSP20px";
        this.view.lblMyProfileKA.skin = "sknLblA0A0A0SSP20px"
        this.view.lblNotificationsKA.skin = "sknLblA0A0A0SSP20px"
        this.view.imgHomeKA.src = "homeicon.png"
        this.view.imgMyProfileKA.src = "myprofile.png"
        this.view.imgNotificationsKA.src = "menuicon.png"
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmMyApplicationsKA");
    }
});