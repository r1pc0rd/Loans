define(function() {  

  return {
    initialize: function(headerText, apr, percents, info, img_src) {    
      var self = this;
      this.view.lblProductCardHeaderKA.text = headerText;
      this.view.lblProductCardAprKA.text = apr;
      this.view.lblProductCardPercentsKA.text = percents + "%";
      this.view.lblProductCardInfoKA.text = info;
      this.view.imgProductCardTabKA.src = img_src;
      
      
			this.view.btnProductCardKA.onHover = function(widget, context) {
        if (context.eventType === constants.ONHOVER_MOUSE_ENTER || context.eventType === constants.ONHOVER_MOUSE_MOVE) {
          self.view.btnProductCardKA.skin = "sknBtnBg0a78d1FontFFFFFF18PxKA";
        } else if (context.eventType === constants.ONHOVER_MOUSE_LEAVE) {
          self.view.btnProductCardKA.skin = "sknBtnSemibold0a78d1SSP18PxBorder0a78d1Radius3KA";
        }
      };
      
      this.view.btnProductCardKA.onClick = function() {
        self.view.btnProductCardKA.skin = "sknBtnSemibold0a78d1SSP18PxBorder0a78d1Radius3KA";
      };
      this.resizeForMobile();
    },

    setOnClickButtonCallback: function(callback) {
      this.view.btnProductCardKA.onClick = callback;
    },

    setLearnMoreCallback: function(callback) {
      this.view.lblProductCardLearnMoreKA.onTouchStart = callback;
    },

    resizeForMobile: function() {
      if(kony.application.getCurrentBreakpoint() <= 768) {
        this.view.flxProductCardUnderlineKA.left = "20dp";
        this.view.lblProductCardHeaderKA = "20dp";
        this.view.lblProductCardAprKA.left = "20dp";
        this.view.lblProductCardPercentsKA.left = "20dp";           
        this.view.lblProductCardInfoKA.left = "20dp";
        this.view.btnProductCardKA.left = "20dp";

        if(kony.application.getCurrentBreakpoint() <= 640) {
          this.view.flxTabKA.width = "100%";
          this.view.flxTabKA.height = "256dp";
          this.view.lblProductCardHeaderKA.skin = "sknLblSourceSansPro00000020pxKA";
          this.view.lblProductCardPercentsKA.skin = "sknLblSourceSansPro00000018pxKA";
          this.view.lblProductCardInfoKA.skin = "sknLblFont35414dSSP10PxRegularKA";
          this.view.lblProductCardAprKA.skin = "sknLbl35414DSSPRegular13PxKA";
          this.view.lblProductCardAprKA.top = "60dp";
          this.view.lblProductCardPercentsKA.top = "75dp";
          this.view.lblProductCardInfoKA.top = "110dp";
          this.view.lblProductCardInfoKA.height = "65dp";
          this.view.flxProductCardUnderlineKA.width = "140dp";
          this.view.btnProductCardKA.top = "180dp";
          this.view.btnProductCardKA.width = "85%";
          this.view.btnProductCardKA.height = "30dp";
          this.view.lblProductCardInfoKA.width = "87%";
          this.view.imgProductCardTabKA.right = "10dp";
          this.view.lblProductCardLearnMoreKA.centerX = '50%';
        } else {
          this.view.lblProductCardAprKA.top = "55dp";
          this.view.lblProductCardPercentsKA.top = "70dp";
          this.view.lblProductCardInfoKA.top = "100dp";
          this.view.lblProductCardInfoKA.height = "95dp";
          this.view.flxTabKA.width = "290dp";
          this.view.flxTabKA.height = "290dp";
          this.view.btnProductCardKA.top = "205dp";
          this.view.btnProductCardKA.width = "250dp";
          this.view.btnProductCardKA.height = "40dp";
          this.view.lblProductCardHeaderKA.skin = "sknLblSourceSansPro00000018pxKA";
          this.view.lblProductCardAprKA.skin = "sknLbl35414DSSPRegular13PxKA";
          this.view.lblProductCardPercentsKA.skin = "sknLblSourceSansPro00000020pxKA";
          this.view.lblProductCardAprKA.skin = "sknLbl35414DSSPRegular13PxKA";
          this.view.lblProductCardInfoKA.width = "88%";
          this.view.lblProductCardLearnMoreKA.left = "110dp";
        }

      } else {
        this.view.flxProductCardUnderlineKA.left = "30dp";
        this.view.lblProductCardHeaderKA = "30dp";
        this.view.lblProductCardAprKA.left = "30dp";
        this.view.lblProductCardPercentsKA.left = "30dp";           
        this.view.lblProductCardInfoKA.left = "30dp";
        this.view.btnProductCardKA.left = "30dp";
        this.view.flxTabKA.width = "320dp";
        this.view.flxTabKA.height = "335dp";
        this.view.lblProductCardHeaderKA.skin = "sknLblSourceSansPro00000020pxKA";
        this.view.lblProductCardPercentsKA.skin = "sknLblSourceSansPro000000s26pxKA";
        this.view.lblProductCardInfoKA.skin = "sknLbl35414DSSPRegular13PxKA";
        this.view.lblProductCardAprKA.skin = "sknLbl35414DSSPRegular15PxKA";
        this.view.lblProductCardAprKA.top = "63dp";
        this.view.lblProductCardPercentsKA.top = "84dp";
        this.view.lblProductCardInfoKA.top = "128dp";
        this.view.lblProductCardInfoKA.height = "95dp";
        this.view.flxProductCardUnderlineKA.width = "178dp";
        this.view.btnProductCardKA.top = "245dp";
        this.view.btnProductCardKA.width = "265dp";
        this.view.btnProductCardKA.height = "40dp";
        this.view.lblProductCardInfoKA.width = "73%";
        this.view.imgProductCardTabKA.right = "20dp";
        this.view.lblProductCardLearnMoreKA.left = "128dp";
      }
    }
  };
});