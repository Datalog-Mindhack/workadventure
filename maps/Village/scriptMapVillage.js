var zoneOfficeName = "popupOfficeZone";
var zoneEventName = "popupEventZone";
var zoneSchoolName = "popupSchoolZone";
var zoneTCMName = "popupTCMZone";

var urlPricing = "https://workadventu.re/pricing";
var urlSchoolOffer = "https://workadventu.re/school-offer";
var currentPopup = undefined;

WA.onEnterZone(zoneOfficeName, () => {
   currentPopup =  WA.openPopup("popUpOffice","You can purchase virtual office in WorkAdventure",[
        {
            label: "See the pricing",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlPricing);
            })
        }]);
})

WA.onEnterZone(zoneEventName, () => {
    currentPopup =  WA.openPopup("popUpEvent","You can create your own Event in WorkAdventure",[
        {
            label: "See the pricing",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlPricing);
            })
        }]);
})

WA.onEnterZone(zoneTCMName, () => {
    currentPopup =  WA.openPopup("popUpTCM","Come meet the TCM team in our office ! ",[]);
})


WA.onEnterZone(zoneSchoolName, () => {
    currentPopup =  WA.openPopup("popUpSchool","WorkAdventure is free for teachers a the moment ! Take advantage of our offer ",[
        {
            label: "See the offer",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlSchoolOffer);
            })
        }]);
})

WA.onLeaveZone(zoneSchoolName, () => {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
})

WA.onLeaveZone(zoneTCMName, () => {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
})

WA.onLeaveZone(zoneEventName, () => {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
})
WA.onLeaveZone(zoneOfficeName, () => {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
})
