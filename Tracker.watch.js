var tracker = eth.contract([{
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{
        name: "",
        type: "string"
    }],
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "epc",
    outputs: [{
        name: "",
        type: "string"
    }],
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "location",
    outputs: [{
        name: "",
        type: "string"
    }],
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "addr",
    outputs: [{
        name: "",
        type: "address"
    }],
    type: "function"
}, {
    constant: false,
    inputs: [{
        name: "_location",
        type: "string"
    }],
    name: "updateLocation",
    outputs: [],
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "goParkingLot",
    outputs: [],
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "getLocation",
    outputs: [{
        name: "",
        type: "string"
    }],
    type: "function"
}, {
    inputs: [{
        name: "_epc",
        type: "string"
    }, {
        name: "_name",
        type: "string"
    }, {
        name: "_location",
        type: "string"
    }],
    type: "constructor"
}, {
    anonymous: false,
    inputs: [{
        indexed: false,
        name: "epc",
        type: "string"
    }, {
        indexed: false,
        name: "name",
        type: "string"
    }, {
        indexed: false,
        name: "location",
        type: "string"
    }],
    name: "UpdatedLocation",
    type: "event"
}]
).at("0x68d4cb3695b68af614a330eb3783a1d5fd10de92");


// get the contract info for contract address to do manual verification
var tracker = admin.getContractInfo("0x2aa299a7735a390b57fc5e2596dfe901866a14c5") // lookup, fetch, decode


var event = tracker.allEvents().watch({}, '');
event.watch(function (error, result) { 
    if (error) {
        console.log("Error: " + error);
    } else {
        console.log("Event: " + result.event);
    }
});

var event = tracker.UpdatedLocation();
event.watch(function(err, result) {
    console.log("I hope this time happens something...!!");
});

var events = tracker.allEvents();
// watch for changes
events.watch(function(error, event){
    console.log("Something happened....");
});


