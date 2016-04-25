contract Edge {
    address owner;
   
    string edgeid;
    string epcid;
    string coordinates;
    string zone;
    string status;

    event ThingUpdate (string epcid, string coordinates, string zone, string status);

    function Edge (string _edgeid, string _coordinates, string _zone, string _status) {
        owner = msg.sender;

        edgeid= _edgeid;
        coordinates = _coordinates;
        zone = _zone;
        status = _status;
    }
    
    function getEpcId() {
        return epcid;
    }

    function updateThing (string _epcid, string _coordinates, string _zone, string _status) {
        
        if ( msg.sender != owner ) throw;
        
        epcid= _epcid;
        coordinates = _coordinates;
        zone = _zone;
        status = _status;
        
        if (stringsEqual(zone,  'POS')) {
            ThingUpdate (epcid, coordinates, zone, 'SOLD');
        } else {
            ThingUpdate (epcid, coordinates, zone, 'FREE');
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