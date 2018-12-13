define(function() {

	return {
    loadMap: function() {
        //this.view.Browser0c22342bea4eb4b.evaluateJavascript("myFunction(\"hello\")");
       
      this.view.mainContent.locatorMapView.locatorMap.locationData = [
            {
              lat:"28.538336",
              lon:"-81.379234",
              name:"Acme Bank ATM 1", 
              desc:"Orlando,Florida",
              showCallout:true,calloutData:{}
            },

            {
              lat:"28.538336",
              lon:"-81.389234",
              name:"Acme Bank ATM 2", 
              desc:"Orlando,Florida",
              showCallout:true,calloutData:{}
            },

            {
              lat:"28.538336",
              lon:"-81.419234",
              name:"Acme Bank ATM 3", 
              desc:"Orlando,Florida",
              showCallout:true,calloutData:{}
            }


        ];
  		this.loadATMList();
         this.view.locatorListView.isVisible = false;
         this.view.locatorMapView.isVisible = true;
       
        
      },
    
      loadATMList: function() {
        
         this.view.locatorListView.isVisible = true;
         this.view.locatorMapView.isVisible = false;

        
          
      // setting the widget data map
      this.view.mainContent.locatorListView.locatorSegmentList.widgetDataMap = 
          {informationListDivider: "informationListDivider", informationListIcon:"informationListIcon", informationListLabel:"informationListLabel", addressLine1:"addressLine1", distanceLabel:"distanceLabel", rightChevron1:"rightChevron1", imgListStatus:"imgListStatus"};

  // setting the data
    
        this.view.mainContent.locatorListView.locatorSegmentList.setData([

            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"NY TEAM FCU", addressLine1:"1590 Kennedy Blvd", distanceLabel:"1 mile", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"Betpage FCU", addressLine1:"111 Wall St.", distanceLabel:"1.4 miles", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"Winthrop Hospital EFCU", addressLine1:"119 First Blvd", distanceLabel:"2 miles", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"COSTCO", addressLine1:"1340 Edison St", distanceLabel:"0.2 mile", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"Truewest", addressLine1:"1590 Kennedy Blvd", distanceLabel:"1.9 miles", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"Randolph FCU", addressLine1:"1290 Jameson Blvd", distanceLabel:"2.3 miles", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"University FCU", addressLine1:"1590 Pal Avenue", distanceLabel:"2.2 miles", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"Greater Texas FCU", addressLine1:"1590 Kennedy Blvd", distanceLabel:"1.4 miles", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"United TEAM FCU", addressLine1:"1590 Kennedy Blvd", distanceLabel:"1 mile", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"TX TEAM FCU", addressLine1:"1590 George Lane", distanceLabel:"4 mile", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"}

 		]);
      },
    
    loadBusinessATMList: function() {
        
         this.view.locatorListView.isVisible = true;
         this.view.locatorMapView.isVisible = false;

        
          
      // setting the widget data map
      this.view.mainContent.locatorListView.locatorSegmentList.widgetDataMap = 
          {informationListDivider: "informationListDivider", informationListIcon:"informationListIcon", informationListLabel:"informationListLabel", addressLine1:"addressLine1", distanceLabel:"distanceLabel", rightChevron1:"rightChevron1", imgListStatus:"imgListStatus"};

  // setting the data
    
        this.view.mainContent.locatorListView.locatorSegmentList.setData([

            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"Randolph FCU", addressLine1:"1290 Jameson Blvd", distanceLabel:"2.3 miles", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"University FCU", addressLine1:"1590 Pal Avenue", distanceLabel:"2.2 miles", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"Greater Texas FCU", addressLine1:"1590 Kennedy Blvd", distanceLabel:"1.4 miles", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"United TEAM FCU", addressLine1:"1590 Kennedy Blvd", distanceLabel:"1 mile", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"TX TEAM FCU", addressLine1:"1590 George Lane", distanceLabel:"4 mile", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"}

 		]);
      },
    loadPersonalATMList: function() {
        
         this.view.locatorListView.isVisible = true;
         this.view.locatorMapView.isVisible = false;

        
          
      // setting the widget data map
      this.view.mainContent.locatorListView.locatorSegmentList.widgetDataMap = 
          {informationListDivider: "informationListDivider", informationListIcon:"informationListIcon", informationListLabel:"informationListLabel", addressLine1:"addressLine1", distanceLabel:"distanceLabel", rightChevron1:"rightChevron1", imgListStatus:"imgListStatus"};

  // setting the data
    
        this.view.mainContent.locatorListView.locatorSegmentList.setData([

            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"Winthrop Hospital EFCU", addressLine1:"119 First Blvd", distanceLabel:"2 miles", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"COSTCO", addressLine1:"1340 Edison St", distanceLabel:"0.2 mile", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"University FCU", addressLine1:"1590 Pal Avenue", distanceLabel:"2.2 miles", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"Greater Texas FCU", addressLine1:"1590 Kennedy Blvd", distanceLabel:"1.4 miles", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"United TEAM FCU", addressLine1:"1590 Kennedy Blvd", distanceLabel:"1 mile", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"},
            {informationListDivider: "", informationListIcon:"atm.png", informationListLabel:"TX TEAM FCU", addressLine1:"1590 George Lane", distanceLabel:"4 mile", rightChevron1:"right_chevron_icon.png", imgListStatus:"location_open.png"}

 		]);
      }
    
	};
});