var src = "contract Thing { address thingid; string epcid; string coordinates; string public zone; string status; event ThingUpdate (string epcid, string coordinates, string zone, string status); function Thing (string _epcid, string _coordinates, string _zone, string _status) { thingid = msg.sender; epcid = _epcid; coordinates = _coordinates; zone = _zone; status = _status; } function updateThing (string _coordinates, string _zone, string _status ) { if (msg.sender != thingid) throw; coordinates = _coordinates; zone = _zone; status = _status; if (stringsEqual(zone, 'POS')) { ThingUpdate (epcid, coordinates, zone, 'SOLD'); } else { ThingUpdate (epcid, coordinates, zone, 'FREE'); } } function stringsEqual(string storage _a, string memory _b) internal returns (bool) { bytes storage a = bytes(_a); bytes memory b = bytes(_b); if (a.length != b.length) return false; for (uint i = 0; i < a.length; i ++) if (a[i] != b[i]) return false; return true; } }  ";

var compiled = web3.eth.compile.solidity(src);

var myContract = web3.eth.contract(compiled.Thing.info.abiDefinition);

var tracker = myContract.new("AB01", {
        from: web3.eth.accounts[0], 
        data: compiled.Thing.code, 
        gas: 3000000
    }, 
    function(e, contract) {
        if(!e) {
            if(!contract.address) {
                console.log("Contract waiting to be mined");
            } else {
                console.log("Contract mined! Address: " + contract.address);
                console.log(contract);
            }
        } else {
            console.log(e);
        }
    }    
)

// address: 0x3fd301b6e759d151d9b317a7b7fffa2797eeee2b