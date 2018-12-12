define(function() {

  const STATUS_DONE = "DONE";
  const STATUS_INPROGRESS = "INPROGRESS";
  const STATUS_PENDING = "PENDING";
  const STATUS_ACTION = "ACTION";
  const STATUS_NEW = "NEW";
  const NO_HEADER = "NOHEADER";
  
  const getDataForDoneHeaderSection = function(index, action, sectionName) {
    return {
      "lblCCAppHeaderNumber" : {
        "skin": "sknSSPbgFFFFFF72727218KA",
        "text": index.toString(),
        "isVisible" : true
      },
      "lblCCAppHeaderName": {
        "skin": "sknLblSSP00000018KA",
        "text": sectionName
      },
      "flxHeaderHolder": {
        "skin": "sknFlxTransparent"
      },
      "flxCCAppHeaderHolder": {
        "skin": "sknFFFFFFnoshadow",
        "onClick" : action
      },
      "imgCCAppTick": {
        "isVisible": true
      },
      "lblCCAppHeaderStatus": {
        "isVisible": false
      },
      "flxTopBackground": {
        "isVisible": false
      }
    };
  };

  const getDataForInProgressHeaderSection = function(index, action, sectionName) {
    return {
      "lblCCAppHeaderNumber" : {
        "isVisible": true,
        "skin": "sknSSPbg1A98FFffffff18KA",
        "text": index.toString(),
      },
      "lblCCAppHeaderName": {
        "skin": "sknSSPbgFFFFFF0A78D18PxKA",
        "text": sectionName
      },
      "flxHeaderHolder": {
        "skin": "sknFlxSegBackgroundE3EFFFKA"
      },
      "flxCCAppHeaderHolder": {
        "skin": "sknFFFFFFnoshadow",
        "onClick" : action
      },
      "imgCCAppTick": {
        "isVisible": false
      },
      "lblCCAppHeaderStatus": {
        "isVisible": true
      },
      "flxTopBackground": {
        "isVisible": false
      }
    };
  };
  
  const getDataForActionHeaderSection = function(sectionName, actionData) {
    return {
      "lblCCAppHeaderNumber": {
        "isVisible" : false,
        "skin": "sknSSPbg1A98FFffffff18KA",
        "text": "",
      },
      "lblCCAppHeaderName": {
        "skin": "sknLblSSP00000018KA",
        "text": sectionName
      },
      "flxHeaderHolder": {
        "skin": "sknFlxTransparent"
      },
      "flxCCAppHeaderHolder": {
        "skin": "sknFFFFFFShadow"
      },
      "imgCCAppTick": {
        "isVisible": false
      },
      "lblCCAppHeaderStatus": {
        "isVisible": true,
        /*"text": actionData.actionName*/
        "text": "invite"  // used in roadmap for frmYourLoanNewKA (Personal Loan Module)
      },
      "flxHeaderStatus": {
        /*"onClick": actionData.action,*/ // to be implemented later
        "skin": "sknFlxCursorPointerKA"
      },
      "flxTopBackground": {
        "isVisible": true
      }
    };
  };

  const getDataForPendingHeaderSection = function(index, action, sectionName) {
    return {
      "lblCCAppHeaderNumber" : {
        "isVisible" : false
      },
      "lblCCAppHeaderName": {
        "skin" : "sknLblSSP00000018KA",
        "text" : sectionName
      },
      "flxHeaderHolder": {
        "skin": "sknFlxTransparent"
      },
      "flxCCAppHeaderHolder": {
        "skin": "sknFFFFFFShadow",
        "onClick" : action
      },
      "imgCCAppTick": {
        "isVisible" : false
      },
      "lblCCAppHeaderStatus": {
        "isVisible" : false
      },
      "flxTopBackground": {
        "isVisible": true
      }
    };
  };

  const getDataForDisabledHeaderSection = function(index, sectionName) {
    return {
      "lblCCAppHeaderNumber" : {
        "skin": "sknSSPbgFFFFFF72727218KA",
        "text": index.toString(),
        "isVisible" : true
      },
      "lblCCAppHeaderName": {
        "skin": "sknLblSSPa0a0a018KA",
        "text": sectionName
      },
      "flxHeaderHolder": {
        "skin": "sknFlxTransparent"
      },
      "flxCCAppHeaderHolder": {
        "skin": "sknFFFFFFnoshadow"
      },
      "imgCCAppTick": {
        "isVisible": false
      },
      "lblCCAppHeaderStatus": {
        "isVisible": false
      }
    };
  };

  const getDataForDoneSection = function(index, sectionName, action, showTopLine, showBottomLine) {
    return { 
      "lblCCAppRowNumber": {
        "skin": "sknSSPbgFFFFFF72727218KA",
        "text": index.toString()
      },
      "lblCCAppRowName": {
        "skin": "sknLblSSP00000015",
        "text": sectionName
      },
      "imgCCAppRowTick": {
        "isVisible": true
      },
      "lblCCAppRowStatus": {
        "isVisible": false
      },
      "flxCCAppRow": {
        "skin": "sknFlxTransparent",
        "onClick" : action
      },
      "imgCCAppRowDottedLine":{
        "isVisible": showTopLine
      },
      "imgCCAppRowBottomDottedLine": {
        "isVisible": showBottomLine
      }
    };
  };

  const getDataForPendingSection = function(index, sectionName, action, showTopLine, showBottomLine) {
    return { 
      "lblCCAppRowNumber": {
        "skin": "sknSSPbg1A98FFffffff18KA",
        "text": index.toString()
      },
      "lblCCAppRowName": {
        "skin": "sknLblSSP00000015",
        "text": sectionName
      },
      "imgCCAppRowTick": {
        "isVisible": false
      },
      "lblCCAppRowStatus": {
        "isVisible": true
      },
      "flxCCAppRow": {
        "skin": "sknFlxSegBackgroundE3EFFFKA",
        "onClick" : action
      },
      "imgCCAppRowDottedLine":{
        "isVisible": showTopLine
      },
      "imgCCAppRowBottomDottedLine": {
        "isVisible": showBottomLine
      }
    };
  };

  const getDataForDisabledSection = function(index, sectionName, showTopLine, showBottomLine) {
    return { 
      "lblCCAppRowNumber": {
        "skin": "sknSSPbgFFFFFF72727218KA",
        "text": index.toString()
      },
      "lblCCAppRowName": {
        "skin": "sknLblSSP35414D15KA",
        "text": sectionName
      },
      "imgCCAppRowTick": {
        "isVisible": false
      },
      "lblCCAppRowStatus": {
        "isVisible": false
      },
      "flxCCAppRow": {
        "skin": "sknFlxTransparent"
      },
      "imgCCAppRowDottedLine":{
        "isVisible": showTopLine
      },
      "imgCCAppRowBottomDottedLine": {
        "isVisible": showBottomLine
      }
    };
  };
  
  const getDataForNewSection = function(sectionName, action, showTopLine) {
    return { 
      "flxCCAppRow": {
        "onClick": action,
        //"skin": "sknFlxTransparent"
        "skin": "sknFlxCursorPointerKA"
      },
      "lblCCAppRowNumber": {
        "skin": "sknSSPbgFFFFFF0A78D121KA",
        "text": "+"
      },
   	 "lblCCAppRowName": {
        "skin": "sknSSPbgFFFFFF0A78D1KA",
        "text": sectionName
      },
     "imgCCAppRowTick": {
        "isVisible": false
      },
     "lblCCAppRowStatus": {
        "isVisible": false
      },
      "imgCCAppRowDottedLine": {
        "isVisible": showTopLine
      },
      "imgCCAppRowBottomDottedLine": {
        "isVisible": false
      }
    };
  };

  const setDataForRow = function(data, showTopLine, showBottomLine) {
    var segmentRowData = [];
    for (var i = 0; i < data.length; i++) {
      var showTop = showTopLine || i !== 0;
      var showBottom = showBottomLine || i < data.length - 1;
      switch (data[i].status) {
        case STATUS_DONE:
          segmentRowData.push(getDataForDoneSection(i + 2, data[i].name, data[i].action, showTop, showBottom));
          break;
        case STATUS_PENDING:
          segmentRowData.push(getDataForPendingSection(i + 2, data[i].name, data[i].action, showTop, showBottom));
          break;
        case STATUS_NEW:
          var action = data[i].action;
          segmentRowData.push(getDataForNewSection(data[i].name, action, showTop));
          break;
        default:
          //disabled
          segmentRowData.push(getDataForDisabledSection(i + 2, data[i].name, showTop, showBottom));
          break;
      }
    }
    return segmentRowData;
  };

  const getWidgetDataMap = function() {
    return {
      "flxCCAppHeaderHolder":"flxCCAppHeaderHolder",
      "imgCCAppTick": "imgCCAppTick",
      "flxHeaderHolder":"flxHeaderHolder",
      "lblCCAppHeaderNumber": "lblCCAppHeaderNumber",
      "lblCCAppHeaderName":"lblCCAppHeaderName",
      "lblCCAppHeaderStatus":"lblCCAppHeaderStatus",

      "flxCCAppRow":"flxCCAppRow",
      "lblCCAppRowNumber":"lblCCAppRowNumber",
      "lblCCAppRowName":"lblCCAppRowName",
      "lblCCAppRowStatus":"lblCCAppRowStatus",
      "imgCCAppRowDottedLine":"imgCCAppRowDottedLine",
      "imgCCAppRowTick":"imgCCAppRowTick",
      "imgCCAppRowBottomDottedLine":"imgCCAppRowBottomDottedLine",
      "flxHeaderStatus": "flxHeaderStatus"
    };
  };

  return {
    
    setProgress: function(percentages) {
      this.view.flxProgressValueLanding.width = percentages + "%";
    },
    
    setCardPartVisibility: function(visibility) {
      this.view.flxCreditCardContainer.setVisibility(visibility);
    },
    
    setDetailsData: function(type, appId, date) {
      this.view.lblTypeValue.text = type;
      this.view.lblAppIdValue.text = appId;
      this.view.lblAppDateValue.text = date;
    },
    
    /** 
    * Ex.:     
    * var data = [
    *  {"name":"Your Loan", "status":"INPROGRESS", "rowData":[]},
    *  {"name":"Applicant", "status":"PENDING", "rowData":[
    *    {"name":"Applicant Info", "status":"DONE"},
    *    {"name":"Applicant Income", "status":"DISABLE"},
    *    {"name":"Add Co-Applicant", "status":"NEW", "action": function() {}}]},
    *  {"name":"Co-Applicant", "status":"ACTION", 
    *   "actionData": { "actionName": "Edit", "action": function() {}}, "rowData":[
    *    {"name":"Applicant Info", "status":"DISABLE"},
    *    {"name":"Applicant Income", "status":"PENDING"}]},
    *  {"name":"Consent", "status":"DISABLE", "rowData":[]}
    * ];
    */
    setData: function(data) {
      this.view.segAppSections.widgetDataMap = getWidgetDataMap();
      if (data[0].status === NO_HEADER) {
        this.view.segAppSections.sectionHeaderTemplate = null;
				var segmentData = setDataForRow(data[0].rowData, false, false);
        this.view.segAppSections.setData(segmentData.map(function(item) {
          item.flxCCAppRow.left = "0";
          item.imgCCAppRowDottedLine.left = "16";
          item.imgCCAppRowBottomDottedLine.left = "16";
          
          return item;
        }));
      } else {
        var dataToSet = [];
        var segmentRowData;
        for (var i = 0; i < data.length; i++) {
          var rowData;
          segmentRowData = [];
          switch(data[i].status) {
            case STATUS_DONE:
              rowData = getDataForDoneHeaderSection(i + 1, data[i].action, data[i].name);
              break;
            case STATUS_PENDING:
              rowData = getDataForPendingHeaderSection(i + 1, data[i].action, data[i].name);
              segmentRowData = setDataForRow(data[i].rowData, true, true);
              break;
            case STATUS_ACTION:
              var actionData = data[i].actionData;
              var sectionName = data[i].name;
              rowData = getDataForActionHeaderSection(sectionName, actionData);
              segmentRowData = setDataForRow(data[i].rowData, true, true);
              break;
            case STATUS_INPROGRESS:
              rowData = getDataForInProgressHeaderSection(i + 1, data[i].action, data[i].name);
              break;
            default:
              //disabled
              rowData = getDataForDisabledHeaderSection(i + 1, data[i].name);
              break;
          }
          dataToSet.push([rowData, segmentRowData]);
        }
        this.view.segAppSections.setData(dataToSet);
      }
    }
  };
});