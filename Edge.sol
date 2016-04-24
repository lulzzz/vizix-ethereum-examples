contract Edge {
    
    address addr;
        
    string edgeid; 

    event ThingUpdate ( string edgeid, string epcid, string coordinates, string zone, string status );

    function Edge (string _edgeid) {
        addr = msg.sender;
        edgeid = _edgeid;
    }

    function updateThing (string _epcid, string _coordinates, string _zone) {
        if ( msg.sender != addr ) throw;
        
        if (stringsEqual(_zone, 'POS')) {
            ThingUpdate (edgeid, _epcid, _coordinates, _zone, 'SOLD');
        } else {
            ThingUpdate (edgeid, _epcid, _coordinates, _zone, 'FREE');
        }
    }
    
    function stringsEqual(string memory _a, string memory _b) internal returns (bool) {
		bytes memory a = bytes(_a);
		bytes memory b = bytes(_b);
		if (a.length != b.length)
            return false;
		for (uint i = 0; i < a.length; i ++)
            if (a[i] != b[i])
                return false;
		return true;
	}
}