define(function() {

  var animatePlaceholderUp = function() {          
    this.view.lblAnimatedKA.animate(
      kony.ui.createAnimation({
        "100": {
          "bottom": "32dp",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          },
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
      }
    );
  };

  var animatePlaceholderDown = function() {
    this.view.lblAnimatedKA.animate(
      kony.ui.createAnimation({
        "100": {
          "bottom": "6dp",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          },
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
      }
    );
  };
  
  var errorHandler = function() {
    this.errorCounter++;
    if (this.notifyByMessage) {
    	this.view.lblErrorMsgKA.setVisibility(true);
    }
    
    if (this.notifyByLine) {
      this.view.flxUnderlineKA.skin = "sknFlxBgFD3F2FKA";
      this.view.flxUnderlineKA.height = "1"; 
    }
  };
  
  return {    

    initialize: function() {      
      var self = this;
      this.notifyByMessage = true;
      this.notifyByLine = true;
      this.errorCounter = 0;
      var textBox = this.view.tbxAnimatedKA;
      textBox.onBeginEditing = function() {
        if (self.errorCounter > 0) {
          self.view.lblErrorMsgKA.setVisibility(false);
          self.view.flxUnderlineKA.skin = "sknFlxBgE6E6E6";
          self.view.flxUnderlineKA.height = "2";
          self.errorCounter--;
        }
        animatePlaceholderUp.call(self);
      };
      textBox.onEndEditing = function() {
        if (textBox.text.length === 0) {
          animatePlaceholderDown.call(self);
        }
        if (self.eventCallback) {
          self.eventCallback();
        }
      };
    },
    
    getText: function() {
      return this.view.tbxAnimatedKA.text;
    },
    
    setCallback: function(callback) {
      this.eventCallback = callback;
    },
    
    setErrorNotificationFlags: function(notifyByMessage, notifyByLine) {
      this.notifyByMessage = notifyByMessage;
      this.notifyByLine = notifyByLine;
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
    },
    
    clear: function() {
      this.view.tbxAnimatedKA.text = undefined;
    }
  };
});