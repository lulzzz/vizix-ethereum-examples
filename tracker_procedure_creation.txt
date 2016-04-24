contract MedicalInstrumentTracker {

    string location;
    string name;
    address addr;

    function MedicalInstrumentTracker(string _name, string _location) {
        addr = msg.sender;
        name = _name;
        location = _location;
    }

    function changeLocation(string _location) public {
        location = _location;
    }

    function getLocation() public returns (string) {
        return location;
    }
}

var src = "contract MedicalInstrumentTracker { string location; string name; address addr; function MedicalInstrumentTracker(string _name, string _location) { addr = msg.sender; name = _name; location = _location; } function changeLocation(string _location) public { location = _location; } function getLocation() public returns (string) { return location; } } "

var compiled = web3.eth.compile.solidity(src);

var trackerContract = web3.eth.contract(compiled.MedicalInstrumentTracker.info.abiDefinition);

var tracker = trackerContract.new("Test","Nursing", {
        from: web3.eth.accounts[0], 
        data: compiled.MedicalInstrumentTracker.code, 
        gas: 300000
    }, 
    function(e, contract) {
        if(!e) {
            if(!contract.address) {
                console.log("Contract waiting to be mined");
            } else {
                console.log("Contract mined! Address: " + contract.address);
                console.log(contract);
            }
        }
    }    
)