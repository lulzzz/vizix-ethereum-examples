contract Thing {
    
    address thingid;
    string epcid; string coordinates; string public zone; string status;

    event ThingUpdate (string epcid, string coordinates, string zone, string status);

    function Thing (string _epcid, string _coordinates, string _zone, string _status) {
        thingid = msg.sender;
        epcid = _epcid;
        coordinates = _coordinates;
        zone = _zone;
        status = _status;
    }

    function updateThing (string _coordinates, string _zone, string _status ) {
        if (msg.sender != thingid) throw;        
        
        coordinates = _coordinates;
        zone = _zone;
        status = _status;
        
        if (stringsEqual(zone, 'POS')) {
            ThingUpdate (epcid, coordinates, zone, 'SOLD');
        } else {
            ThingUpdate (epcid, coordinates, zone, 'FREE');
        }
    }
    
    function stringsEqual(string storage _a, string memory _b) internal returns (bool) {
		bytes storage a = bytes(_a);
		bytes memory b = bytes(_b);
		if (a.length != b.length)
            return false;
		for (uint i = 0; i < a.length; i ++)
            if (a[i] != b[i])
                return false;
		return true;
	}
}
