define(function() {
  
  const skinDefaultButtonEnabled = "sknBtnOptionChooserEnabled";
  const skinDefaultButtonDisabled = "sknBtnOptionChooserDisabled";

  const skinMobileButtonEnabled = "sknBtnOptionChooserEnabledMobile";
  const skinMobileButtonDisabled = "sknBtnOptionChooserDisabledMobile";
  
  var showCheckMark = true;
 
  var changeContainerState = function(container, isEnable) {
    var self = this;
    container.widgets().forEach(function(item) {
      if (item instanceof kony.ui.Button) {
        item.skin = isEnable ? self.currentSkinEnabled : self.currentSkinDisabled;
      } else if (self.showCheckMark && item instanceof kony.ui.Image2) {
        item.setVisibility(isEnable);
      }
    });
  };

  var onClickHandler = function(button) {
    var self = this;
    // Get Button's parent container
    var parentContainer = button.parent;
    // Find root container and get all Button's containers
    var allContainers = parentContainer.parent.widgets();
    allContainers.forEach(function(item) {
      var isEnable = item === parentContainer;
      // Change Button and Image states
      changeContainerState.call(self, item, isEnable);
    });
    self.selectedOption = button.text;
    if (self.onClickCallback) {
      self.onClickCallback(self.selectedOption);
    }
  };

  var selectedButton = function(value, skin) { 
    var self = this;
    this.view.widgets().forEach(function(container) {
      container.widgets().forEach(function(widget) {
        if (widget instanceof kony.ui.Button) {
          if(widget.text === value){
            widget.skin = skin; 
          }
        }
      });
    });
  };

  return {

    initialize: function() {
      var self = this;
      this.currentSkinEnabled = skinDefaultButtonEnabled; 
      this.currentSkinDisabled = skinDefaultButtonDisabled; 
      this.onClickCallback = null;
      this.selectedOption = null;
      this.showCheckMark = showCheckMark;
      // Get all conteiners
      this.view.widgets().forEach(function(container) {
        // Get appropriate container
        container.widgets().forEach(function(item) {
          // Find button widget
          if (item instanceof kony.ui.Button) {
            item.onClick = onClickHandler.bind(self);
          }
        });
      });
      this.refreshSkins();
    }, 

    setOnClickCallback: function(callback) {
      this.onClickCallback = callback;
    },

    getSelectedOption: function() {
      return this.selectedOption;
    },

    setActiveOption: function(self, button) {
      var parentContainer = button.parent;
      // Find root container and get all Button's containers
      var allContainers = parentContainer.parent.widgets();
      allContainers.forEach(function(item) {
        var isEnable = item === parentContainer;
        // Change Button and Image states
        changeContainerState.call(self, item, isEnable);
      });
      self.selectedOption = button.text;
    },
    
    refreshSkins: function() {
      var self = this;
      var breakPoint = kony.application.getCurrentBreakpoint();
      if (breakPoint <= 640) {
        this.currentSkinEnabled = skinMobileButtonEnabled;
        this.currentSkinDisabled = skinMobileButtonDisabled;
      } else {
        this.currentSkinEnabled = skinDefaultButtonEnabled;
        this.currentSkinDisabled = skinDefaultButtonDisabled;
      }
			this.view.widgets().forEach(function(container) {
        container.widgets().forEach(function(item) {
          if (item instanceof kony.ui.Button) {
            var isEnabled = item.text === self.selectedOption;
            item.skin = isEnabled ? self.currentSkinEnabled : self.currentSkinDisabled;
          }
        });
      });
    },
    
    setCheckMarkVisibility: function(value){
      this.showCheckMark = value;
    },
    
    setSkins: function(skinEnabledDesktop, skinDisabledDesktop, skinEnabledTablet, skinDisabledTablet, skinEnabledMobile, skinDisabledMobile){
      var self = this;
      var breakPoint = kony.application.getCurrentBreakpoint();
      if (breakPoint > 768) {
        this.currentSkinEnabled = skinEnabledDesktop;
        this.currentSkinDisabled = skinDisabledDesktop;
      }  else if (breakPoint <= 768 && breakPoint>640) {
        this.currentSkinEnabled = skinEnabledTablet;
        this.currentSkinDisabled = skinDisabledTablet;
      } else {
        this.currentSkinEnabled = skinEnabledMobile;
        this.currentSkinDisabled = skinDisabledMobile;
      }
      
      this.view.widgets().forEach(function(container) {
        container.widgets().forEach(function(item) {
          if (item instanceof kony.ui.Button) {
            var isEnabled = item.text === self.selectedOption;
            item.skin = isEnabled ? self.currentSkinEnabled : self.currentSkinDisabled;
          }
        });
      });
    },
    
    setSelectedOption: function(value, skin) {
      var self = this;
      this.selectedOption = value;
      selectedButton.call(self, value, skin);
    },

    setData: function(data) {
      var self = this;
      this.view.widgets().forEach(function(container, index) {
        if (index < data.length) {
          container.widgets().forEach(function(widget) {
            if (widget instanceof kony.ui.Button) {
              widget.text = data[index];
            }
          });
        }
      });
    },
  };

});