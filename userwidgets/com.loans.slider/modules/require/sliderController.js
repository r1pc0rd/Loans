define(function() {

  var currentAmoutSkin = "sknLblSSP00000030";
  var currentAmoutMobileSkin = "sknLblSSP00000022";
  var amoutSkin = "sknLbl72727215";
  var amoutMobileSkin = "sknLbl72727211";
  var defaultMin = 1000;
  var defaultMax = 30000;
  var defaultValue = 15000;
  var defaultStep = 100;
  var defaultCurrencyFlag = true;
  
  var formatNumberToCurrency = function(number) {
    return this.currencyFlag ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : number;
  };

  var touchEndCallback = function(){
    if (this.onTouchEndCallback) {
      this.onTouchEndCallback();
    }
  };
  
  return {
    inisialize: function(min=defaultMin, max=defaultMax, value=defaultValue, step=defaultStep, currencyFlag=defaultCurrencyFlag){ 
      var minValue = parseInt(min);
      var maxValue = parseInt(max);
      var currentValue = parseInt(value);
      var stepValue = parseInt(step);
      this.onTouchEndCallback = null;

      var valueSign = "";  
      this.currencyFlag = currencyFlag;
      this.currencySign = currencyFlag ? "$ " : "";
      if(this.checkSliderData(minValue, maxValue, currentValue, stepValue)){
        this.view.sldSlider.min = minValue;
        this.view.sldSlider.max = maxValue;
		this.view.sldSlider.step = stepValue;
        
        if(this.currencyFlag && minValue>=1000){
          valueSign = "k";
          minValue = Math.floor(minValue/1000);
          maxValue = Math.ceil(maxValue/1000);     
        } 
        this.view.lblLeftAmount.text = minValue+valueSign;
        this.view.lblRightAmount.text = maxValue+valueSign;
        
        var formattedValue = formatNumberToCurrency.call(this,currentValue);
        this.view.sldSlider.selectedValue = currentValue;
        this.view.lblCurrentAmount.text = this.currencySign+formattedValue;
      } 
      this.view.sldSlider.onSlide = this.setAmountToTextbox;
      this.view.sldSlider.onTouchEnd = touchEndCallback.bind(this);
    },

    setAmountToTextbox: function() {
      var currentValue = this.view.sldSlider.selectedValue;
  	  var formattedValue = formatNumberToCurrency.call(this,currentValue);
      this.view.lblCurrentAmount.text = this.currencySign+formattedValue;
      
    },

    checkSliderData: function(min, max, value, step){
      return min > 0 && max > min  && max > step && 
        min < value && max > value;
    },

    changeSliderSkin: function(mobileBreakPoint){
      mobileBreakPoint = (typeof mobileBreakPoint !== 'undefined') ?  mobileBreakPoint : kony.application.getCurrentBreakpoint();
      var breakPoint = kony.application.getCurrentBreakpoint();
      var isMobile = breakPoint <= mobileBreakPoint;
      this.view.lblCurrentAmount.skin = isMobile ? currentAmoutMobileSkin : currentAmoutSkin;
      this.view.lblLeftAmount.skin = isMobile ? amoutMobileSkin : amoutSkin;
      this.view.lblRightAmount.skin = isMobile ? amoutMobileSkin : amoutSkin;
      this.view.flxHolder.top = isMobile ? "0.5%" : "1%";
    },

    setSkin: function(skin) {
      this.view.skin = skin;
    },
    
    setFontSize: function(skin) {
      this.view.lblLeftAmount.skin = skin;
      this.view.lblRightAmount.skin = skin;
    },
    
    setOnTouchEndCallback: function(callback) {
      this.onTouchEndCallback = callback;
    },
    
    getValue: function(){
      return parseInt(this.view.sldSlider.selectedValue);
    }

  };
});