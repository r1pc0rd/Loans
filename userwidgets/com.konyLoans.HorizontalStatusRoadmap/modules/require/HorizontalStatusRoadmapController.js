define(function() {
  	/**
     * Generate horizontal roadmap that consist of 3 points
     *
     * @params {Object[]} statuses Array of objects, that describe points on roadmap, array always should have length 3
     * 
     * [{
     *   title: 'Approval',
     *   textStatus: 'In progress',
     *   status: 'in_progress',
     * }]
     */
    
  	var STATUS = {
      SUBMITTED: 'submitted',
      IN_PROGRESS: 'in_progress',
      PENDING: 'pending',
    };

  	var dataObject = [{
      pointName: 'App',
      status: STATUS.SUBMITTED,
    },
    {
      pointName: 'UnderWriting',
      status: STATUS.IN_PROGRESS,
    },
    {
      pointName: 'Approval',
      status: STATUS.PENDING,
    }];
  
  	var setText = function(pointName, element) {
      this.view['lbl' + pointName + 'TitleKA'].text = element.title;
      this.view['lbl' + pointName + 'DescriptionKA'].text = element.textStatus;
    };
  
  	var setCheckmark = function(pointName, status) {
      this.view['img' + pointName + 'SubmittedKA'].isVisible = status !== 'pending';
      this.view['img' + pointName + 'PendingKA'].isVisible = status === 'pending';
    };
    
    var setCircleColor = function(pointName, status) {
      if (status === 'pending') {
        this.view['flx' + pointName + 'CheckmarkKA'].skin = 'sknPendingCheckpointKA';
      } else if (status === 'in_progress') {
        this.view['flx' + pointName + 'CheckmarkKA'].skin = 'sknProgressCheckpointKA';
      } else {
        this.view['flx' + pointName + 'CheckmarkKA'].skin = 'sknSubmittedCheckpointKA';
      }
    };
  
  	var onChangeBreakPoint = function(breakPoint) {
      var isMobile = breakPoint <= 640;
      var mobileSkn = 'sknLbl000000SourceSansPro15PxKA';
      var desktopSkn = 'sknLbl000000SourceSansPro18PxKA';

      this.view.flxContainerKA.height = isMobile ? '240dp' : '93dp';

      ['flxFirstPointKA', 'flxSecondPointKA', 'flxThirdPointKA'].map(function(el) {
        this.view[el].width = isMobile ? '300dp' : '130dp';
        this.view[el].height = isMobile ? '30dp' : '93dp';
      }.bind(this));
     
      this.view.flxSecondPointKA.top = isMobile ? '100dp' : '0dp';
      this.view.flxSecondPointKA.centerX = isMobile ? null : '50%';
      
      this.view.flxThirdPointKA.top = isMobile ? '210dp' : '0dp';
      this.view.flxThirdPointKA.left = isMobile ? '0dp' : null;
      
      dataObject.map(function(el) {
        this.view['flx' + el.pointName + 'CheckmarkKA'].centerX = isMobile ? null : '50%';

        this.view['flx' + el.pointName + 'TextBlockKA'].height = isMobile ? '25dp' : '46dp';
        this.view['flx' + el.pointName + 'TextBlockKA'].left = isMobile ? '50dp' : '0dp';
        this.view['flx' + el.pointName + 'TextBlockKA'].top = isMobile ? '3dp' : null;
        this.view['flx' + el.pointName + 'TextBlockKA'].centerX = isMobile ? null : '50%';
        this.view['flx' + el.pointName + 'TextBlockKA'].layoutType = isMobile ? kony.flex.FLOW_HORIZONTAL : kony.flex.FREE_FORM;
        
        this.view['lbl' + el.pointName + 'TitleKA'].centerX = isMobile ? null : '50%';
        this.view['lbl' + el.pointName + 'TitleKA'].skin = isMobile ? mobileSkn : desktopSkn;

        this.view['lbl' + el.pointName + 'DescriptionKA'].skin = isMobile ? mobileSkn : desktopSkn;
        this.view['lbl' + el.pointName + 'DescriptionKA'].left = isMobile ? '10dp' : null;
        this.view['lbl' + el.pointName + 'DescriptionKA'].top = isMobile ? null : '24dp';
        this.view['lbl' + el.pointName + 'DescriptionKA'].centerX = isMobile ? null : '50%';
      }.bind(this));
      
      this.view.imgDottedSeparatorKA.src = isMobile ? 'dottetline_vertical.png' : 'dottedline_horizontal.png';
      this.view.imgDottedSeparatorKA.left = isMobile ? '13dp' : '55dp';
      this.view.imgDottedSeparatorKA.top = isMobile ? '15dp' : '13dp';
      this.view.imgDottedSeparatorKA.width = isMobile ? '2dp' : null;
      this.view.imgDottedSeparatorKA.height = isMobile ? '210dp' : '2dp';
    };

	return {
      onBreakPointChange: function(breakPoint) {
        onChangeBreakPoint.call(this, breakPoint);
      },
      
      setData: function(data) {
        data.forEach(function(el, index) {
          setText.call(this, dataObject[index].pointName, el);
          setCheckmark.call(this, dataObject[index].pointName, el.status);
          setCircleColor.call(this, dataObject[index].pointName, el.status);
        }.bind(this));
      }
	};
});