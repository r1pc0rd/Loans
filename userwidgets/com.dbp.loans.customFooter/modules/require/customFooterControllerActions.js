define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onclick defined for flxHomeKA **/
    AS_FlexContainer_f2e588bfc1d5438bb65033d989552ec4: function AS_FlexContainer_f2e588bfc1d5438bb65033d989552ec4(eventobject) {
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
    AS_FlexContainer_hd66c152babf475daccaffc7c49769fa: function AS_FlexContainer_hd66c152babf475daccaffc7c49769fa(eventobject) {
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