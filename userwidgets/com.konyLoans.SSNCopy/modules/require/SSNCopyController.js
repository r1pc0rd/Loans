define(function() {
  
  const SSN_LENGTH = 9;
  
  var errorHandler = function() {
    this.errorCounter++;
    this.view.flxErrorKA.setVisibility(true);
  };
  
  return {
    initialize: function () {
      var self = this;
      this.errorCounter = 0;
      for (var i = 1; i <= SSN_LENGTH; i++) {
        this.view[`tbxSSN${i}KA`].onKeyUp = function (x) {
          if (this.view[`tbxSSN${x}KA`].text == " " || isNaN(this.view[`tbxSSN${x}KA`].text)){
            this.view[`tbxSSN${x}KA`].text = "";
          } else if (this.view[`tbxSSN${x}KA`].text.length === 1 && x < SSN_LENGTH) {
            this.view[`tbxSSN${x+1}KA`].setFocus(true);
          } else if (this.view[`tbxSSN${x}KA`].text.length === 0 && x !== 1) {
            this.view[`tbxSSN${x - 1}KA`].setFocus(true);
          }
        }.bind(this, i);
        
        this.view[`tbxSSN${i}KA`].onBeginEditing = function() {
          if (self.errorCounter > 0) {
            self.view.flxErrorKA.setVisibility(false);
            self.errorCounter--;
          }
        };
      }
    },

    getSSNCode: function() {
      var code = "";
      for (var i = 1; i <= SSN_LENGTH; i++ ) {
        code += this.view[`tbxSSN${i}KA`].text;
      }
      return code;
    },
    
    setSSNCode: function(code){
       for (var i = 1; i <= code.length; i++) {
          this.view[`tbxSSN${i}KA`].text = code[i - 1];
          if (i >= SSN_LENGTH) {
            break;
          }
       }
    },

    onError: function() {
      errorHandler.call(this);
    },
    
    clear: function(){
      for (var i = 1; i <= SSN_LENGTH; i++) {
        this.view[`tbxSSN${i}KA`].text =  "";
      }
    },

    isValid: function(){
      return (this.errorCounter===0 && this.getSSNCode().length===SSN_LENGTH)
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