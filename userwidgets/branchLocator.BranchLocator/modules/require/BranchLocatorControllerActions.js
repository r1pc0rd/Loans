define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onclick defined for backButton **/
    AS_Button_a47c9119783347a3bd2509674a325f3c: function AS_Button_a47c9119783347a3bd2509674a325f3c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("undefined");
        ntf.navigate();
    },
    /** onclick defined for btnATMKA **/
    AS_Button_c885310c13474e4e8940af471b322cd0: function AS_Button_c885310c13474e4e8940af471b322cd0(eventobject) {
        var self = this;
        return self.loadBusinessATMList.call(this);
    },
    /** onclick defined for btnBothKA **/
    AS_Button_ha6e753ca0b342e1876ccc2aa17ecd5a: function AS_Button_ha6e753ca0b342e1876ccc2aa17ecd5a(eventobject) {
        var self = this;
        return self.loadATMList.call(this);
    },
    /** onclick defined for btnBranchKA **/
    AS_Button_g99f050b3eab45029dcfc35b7736ea8e: function AS_Button_g99f050b3eab45029dcfc35b7736ea8e(eventobject) {
        var self = this;
        return self.loadPersonalATMList.call(this);
    },
    /** onclick defined for btnMapKA **/
    AS_Button_fde5285dc23149a2b37c5c75ef388460: function AS_Button_fde5285dc23149a2b37c5c75ef388460(eventobject) {
        var self = this;
        return self.loadMap.call(this);
    },
    /** onclick defined for btnListKA **/
    AS_Button_fd828b4e4f344d0b9c1584d7160daa54: function AS_Button_fd828b4e4f344d0b9c1584d7160daa54(eventobject) {
        var self = this;
        return self.loadATMList.call(this);
    }
});