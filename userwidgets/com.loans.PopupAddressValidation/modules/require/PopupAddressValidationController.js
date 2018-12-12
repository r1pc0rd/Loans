define(function() {
  
  const skinPopupTitle = "sknLblSSPSemiBold35414D18KA";
  const skinMobilePopupTitle = "sknLblSSPSemiBold35414D15KA";

  const skinTxtLbl = "sknLblSSP35414D15";
  const skinMobileTxtLbl = "sknLblSSP35414D13KA";
  
  const skinTxt = "sknLblSSPSemiBold00000018PxKA";
  const skinMobileTxt = "sknLblSSPSB00000015KA";
  
  const skinBtnKeepOriginal = "sknBtnSSPSB0A78D118BgffffffR4KA";
  const skinMobileBtnKeepOriginal = "sknBtnSSP0A78D115BgFFFFFFR4KA";
  
  const skinBtnUpdate = "sknBtnSSPffffff18Bg0A78D1R4KA";
  const skinMobileBtnUpdate = "sknBtnSSPffffff15Bg0A78D1R4KA";
	
  var setSkins = function() {
    this.view.lblHeaderKA.skin = this.skinPopupTitle;
    this.view.lblEnteredAddressTitleKA.skin = this.skinTxtLbl;
    this.view.lblUspsAddressTitleKA.skin = this.skinTxtLbl;
    this.view.LblQuestionKA.skin = this.skinTxtLbl;

    this.view.lblStreetApartKA.skin = this.skinTxt;
    this.view.lblCityKA.skin = this.skinTxt;
    this.view.lblStateCountryZipKA.skin = this.skinTxt;

    this.view.lblUspsStreetApartKA.skin = this.skinTxt;
    this.view.lblUspsCityKA.skin = this.skinTxt;
    this.view.lblUspsStateCountryZipKA.skin = this.skinTxt;

    this.view.btnPopupKeepOriginalKA.skin = this.skinBtnKeepOriginal;
    this.view.btnPopupUpdateKA.skin = this.skinBtnUpdate;
  };
  
  var setWidgets = function() {
    var breakPoint = kony.application.getCurrentBreakpoint();
    var isMobile = (breakPoint <= 640) ? true : false;
    var isTablet = (breakPoint <= 768 && breakPoint > 640) ? true : false;
    var height;
    if (isMobile) {
      height = "480dp";
    } else if (isTablet) {
      height = "350dp";
    } else {
      height = "320dp";
    }
    this.view.flxPopupKA.width = (isMobile || isTablet) ? "90%" : "720dp";
    this.view.flxPopupKA.height = height;
    this.view.flxAddressHolderKA.layoutType = isMobile? kony.flex.FLOW_VERTICAL : kony.flex.FREE_FORM;
    this.view.flxEnteredAddressHolderKA.width = isMobile ? "100%" : "49%";
    this.view.flxUspsAddressKA.width = isMobile ? "100%" : "49%";
    this.view.flxUspsAddressKA.left = isMobile ? "0dp" : "50%";
    this.view.flxUspsAddressKA.top = isMobile ? "20dp" : "0dp";
    this.view.btnPopupUpdateKA.width = isMobile ? "100%" : "220dp";
    this.view.btnPopupKeepOriginalKA.width = isMobile ? "100%" : "220dp";
    this.view.btnPopupKeepOriginalKA.top = isMobile ? "60dp" : "0dp";
    this.view.btnPopupKeepOriginalKA.right = isMobile ? "0dp" : "240dp";
    
    this.view.flxEnteredAddressHolderKA.forceLayout();
    this.view.flxUspsAddressKA.forceLayout();
  };
  
  var changeErrorMessageVisibility = function(isError) {
    this.view.flxUspsStreetApartKA.setVisibility(!isError);
    this.view.flxUspsCityKA.setVisibility(!isError);
    this.view.flxUspsStateCountryZipKA.setVisibility(!isError);
    this.view.flxUspsStateCountryZipKA.setVisibility(!isError);
    this.view.flxErrorKA.setVisibility(isError);
  };
  
  var errorHandler = function() {
    this.errorCounter++;
    changeErrorMessageVisibility.call(this, true);
  };
  
  return {
    
    initialize: function() { 
      this.errorMessage = "";
      this.errorCounter = 0;
      this.skinPopupTitle = skinPopupTitle;
      this.skinTxtLbl = skinTxtLbl;
      this.skinTxt = skinTxt;
      this.skinBtnKeepOriginal = skinBtnKeepOriginal;
      this.skinBtnUpdate = skinBtnUpdate;

      this.refreshSkins();
    },
    
    setOnClickCallbacks: function(updateCallback, keepOriginCallBack, closeCallback) {
      var self = this;
      this.view.btnPopupUpdateKA.onClick = function() {
        changeErrorMessageVisibility.call(self, false);
        updateCallback(self.USPSdata);
      };
      this.view.btnPopupKeepOriginalKA.onClick = function() {
        changeErrorMessageVisibility.call(self, false);
        keepOriginCallBack();
      };
      this.view.imgCloseKA.onClick = function() {
        changeErrorMessageVisibility.call(self, false);
        closeCallback();
      };
    },
    
    setData: function(title, enteredAddressObj, uspsAddressObj, errorMessage) {
      if (errorMessage) {
        this.view.rtxError.text = errorMessage;
        
      }
      
      if (!title || !enteredAddressObj || !uspsAddressObj) {
        return;
      }

      this.USPSdata = uspsAddressObj;
      this.view.lblEnteredAddressTitleKA.text = title;
      
      this.view.lblStreetApartKA.text = enteredAddressObj.street + " " + enteredAddressObj.apartments;
      this.view.lblCityKA.text = enteredAddressObj.city;
      this.view.lblStateCountryZipKA.text = enteredAddressObj.state + ", " + enteredAddressObj.country + ", " + enteredAddressObj.zip;

      this.view.lblUspsStreetApartKA.text = uspsAddressObj.street + " " + uspsAddressObj.apartments;
      this.view.lblUspsCityKA.text = uspsAddressObj.city;
      this.view.lblUspsStateCountryZipKA.text = uspsAddressObj.state + ", " + uspsAddressObj.country + ", " + uspsAddressObj.zip;
    },

    refreshSkins: function() {
      var self = this; 
      var breakPoint = kony.application.getCurrentBreakpoint();
      var isMobile = breakPoint <= 640;
      
      this.skinPopupTitle = isMobile ? skinMobilePopupTitle : skinPopupTitle;
      this.skinTxtLbl = isMobile ? skinMobileTxtLbl : skinTxtLbl;
      this.skinTxt = isMobile ? skinMobileTxt : skinTxt;
      this.skinBtnKeepOriginal = isMobile ? skinMobileBtnKeepOriginal : skinBtnKeepOriginal;
      this.skinBtnUpdate = isMobile ? skinMobileBtnUpdate : skinBtnUpdate;
      
      setSkins.call(this);	 
      setWidgets.call(this);	
    },
    
    onError: function() {
      errorHandler.call(this);
    },

    subscribe: function(observer) {
      if (observer instanceof Observer) {
        observer.register(this.view.id, errorHandler.bind(this));
      }
    },

    unsubscribe: function(observer) {
      if (observer instanceof Observer) {
        observer.unregister(this.view.id);
      }
    }
  };
});