define(function() {

  var updateViewState = function() {
    if (this.errorCounter > 0) {
      this.view.flxError.setVisibility(false);
      this.view.flxSeparatorKA.skin = "sknFlxeeeeeeBGKA";
      this.view.flxSeparatorKA.height = "2";
      this.errorCounter--;
      this.view.flxTitle.forceLayout();
    }

    var isVisible = this.view.flxsegDataKA.isVisible;
    this.view.flxsegDataKA.setVisibility(!isVisible);
    this.view.flxQuoteKA.setVisibility(!isVisible);
    if(!isVisible && this.onShowEvent){
      this.onShowEvent();
    }
    this.view.segDataKA.setVisibility(!isVisible);
    this.view.imgTipUpKA.src = isVisible
                               ? "dropdownicondown.png"
                               : "dropdowniconup.png";
    if (isVisible && this.selectedText !== undefined) {
      this.view.lblDropDownNameKA.text = this.selectedText;
      this.view.lblDropDownNameKA.skin = "sknLblSSPSemiBold000000113KA";
    }
  };

  var onRowClick = function() {
    var previousSelection = this.selectedText;
    var segment = this.view.segDataKA;
    var index = segment.selectedRowIndex[1];
    var data = segment.data[index].lblValueKA;
    if(data==undefined){
       data = segment.data[index].Value;
    }
    this.selectedText = (typeof data === "string" ||typeof data === "number")? data : data.text;
    updateViewState.call(this);

    if (this.eventCallback) {
      this.eventCallback(this.selectedText, previousSelection);
    }
  };

  var selectedValue = function(value){
    var self = this;
    this.view.lblDropDownNameKA.text = value;
    this.view.lblDropDownNameKA.skin = "sknLblSSPSemiBold000000113KA";
  };

  var errorHandler = function() {
    this.errorCounter++;
    if (this.notifyByMessage) {
      this.view.flxError.setVisibility(true);
      this.view.flxTitle.forceLayout();
    }

    if (this.notifyByLine) {
      this.view.flxSeparatorKA.skin = "sknFlxBgFD3F2FKA";
      this.view.flxSeparatorKA.height = "1";
    }
  };
  
  var searchInList = function(){
    var data = this.data;
    const searchedStr = this.view.tbxSearchKA.text.toLowerCase();
     var filteredData;
     if(data[0].Value!==undefined){
        filteredData = data.filter(function(item) {
        return item.Value.toLowerCase().includes(searchedStr);
       
    }); 
    }
    else{
       filteredData = data.filter(function(item) {
      return item.lblValueKA.toLowerCase().includes(searchedStr);
    });
    }
    this.view.segDataKA.setData(filteredData);
  };   

  return {

    initialize: function() {
      this.errorCounter = 0;
      this.notifyByMessage = true;
      this.notifyByLine = true;
      this.data = this.view.segDataKA.data;
      this.view.segDataKA.onRowClick = onRowClick.bind(this);
      this.view.flxTipImgKA.onClick = updateViewState.bind(this);
      this.view.lblDropDownNameKA.onClick = updateViewState.bind(this);
      this.view.tbxSearchKA.onKeyUp = searchInList.bind(this);
    },

    getCurrentItem: function() {
      return this.selectedText;
    },

    setRowTemplate: function(template) {
      var data = this.view.segDataKA.data;
      if (data) {
        this.view.segDataKA.setData(data.map(function(item) {
          item.template = template;
          return item;
        })); 
      }   
    },

    setDataAndDataMap: function(data, dataMap) {
      this.data = data;
      this.view.segDataKA.widgetDataMap = dataMap;
      this.setData(data);
    },
    
    setData: function(data) {
      this.data = data;
      var segment = this.view.segDataKA;
      segment.setData(data);
    },

    setCallback: function(callback) {
      this.eventCallback = callback;
    },
    
    setOnShow: function(callback) {
      this.onShowEvent = callback;
    },

    clear: function() {
      this.selectedText = undefined;
      this.view.lblDropDownNameKA.text = "Select";
      this.view.lblDropDownNameKA.skin = "sknLblSSProRegA0A0A018PxKA";
    },

    onError: function() {
      errorHandler.call(this);
    },

    setErrorNotificationFlags: function(notifyByMessage, notifyByLine) {
      this.notifyByMessage = notifyByMessage;
      this.notifyByLine = notifyByLine;
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
    setSelectedValue : function(value){
      var self = this;
      this.selectedText = value;
      selectedValue.call(self, value);
    }
  };
});