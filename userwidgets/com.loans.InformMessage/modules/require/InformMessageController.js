define(function() {

    const successIcon = "success_green.png";
    const warningIcon = "warningsmall.png";
    const errorIcon = "clearicon.png";

    const successType = "success";
    const warningType = "warning";
    const errorType = "error";
  
  	const defaultMessage = "Your Application has been submitted successfully.";
  
  	const msgSkin = "sknLblFont35414d918PxKA";
  	const msgSkinMobile = "sknLblFont35414D15Px";
  
  	const successMainSkin = "flxSknBgFFFFFFBorder2A9E05";
  	const errorMainSkin = "flxSknBgFFFFFFBorderFD3F2FKA";
  	const warningMainSkin = "flxSknBgFFFFFFBorderFFA500KA";
  
  	var setSkins = function(){
      this.view.imgStatusKA.src = this.icon;
      this.view.flxContainerMainKA.skin = this.mainSkin;
    };

	return {

      initialize: function() { 
        this.msgSkin = msgSkin;
        this.msgSkinMobile = msgSkinMobile;
        this.icon = successIcon;
        this.mainSkin = successMainSkin;
        this.refreshMsgSkins();
      },
      
     setData: function(message, type=successType){
       switch (type) {
          case warningType: 
            this.icon = warningIcon;
            this.mainSkin = warningMainSkin;
            break;
          case errorType:
            this.icon = errorIcon;
            this.mainSkin = errorMainSkin;
            break;
          default:
            this.icon = successIcon;
            this.mainSkin = successMainSkin;
            break;
        }
       	var msg = (!message) ? defaultMessage : message;
        this.view.lblInformMessageKA.text = msg;
        setSkins.call(this);	
     },
      
     setIcon: function(icon){
       this.icon = icon;
       setSkins.call(this);
     },
      
     setMainSkin: function(skin){
       this.mainSkin = skin;
       setSkins.call(this);
     },
      
     setMsgSkin: function(desktopSkin, mobileSkin){
       this.msgSkin = desktopSkin;
       this.msgSkinMobile = mobileSkin;
       this.refreshMsgSkins();
     },
      
     refreshMsgSkins: function() {
        var breakPoint = kony.application.getCurrentBreakpoint();
        var isMobile = breakPoint <= 640;
        this.view.lblInformMessageKA.skin = isMobile ? this.msgSkinMobile : this.msgSkin;
     }

	};
});