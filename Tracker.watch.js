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
).at("0x2e862b88f7f5a75d1d465eec7785961ca89198d6");

var event = tracker.allEvents().watch({}, '');
// or use conference.Deposit() or .Refund()
event.watch(function (error, result) { 
    if (error) {
        console.log("Error: " + error);
    } else {
        console.log("Event: " + result.event);
    }
});