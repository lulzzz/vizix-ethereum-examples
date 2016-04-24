var src = "contract Edge { address addr; string edgeid; event ThingUpdate ( string edgeid, string epcid, string coordinates, string zone, string status ); function Edge (string _edgeid) { addr = msg.sender; edgeid = _edgeid; } function updateThing (string _epcid, string _coordinates, string _zone) { if ( msg.sender != addr ) throw; if (stringsEqual(_zone, 'POS')) { ThingUpdate (edgeid, _epcid, _coordinates, _zone, 'SOLD'); } else { ThingUpdate (edgeid, _epcid, _coordinates, _zone, 'FREE'); } } function stringsEqual(string memory _a, string memory _b) internal returns (bool) { bytes memory a = bytes(_a); bytes memory b = bytes(_b); if (a.length != b.length) return false; for (uint i = 0; i < a.length; i ++) if (a[i] != b[i]) return false; return true; } }";

var compiled = web3.eth.compile.solidity(src);

var myContract = web3.eth.contract(compiled.Edge.info.abiDefinition);

var tracker = myContract.new("AB01", {
        from: web3.eth.accounts[0], 
        data: compiled.Edge.code, 
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

// address: 0xd86ec28c35644296524ba46664d5e386e4ac9ed8