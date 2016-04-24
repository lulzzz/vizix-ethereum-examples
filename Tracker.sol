contract Tracker {
	
	string public epc;
	string public name;
	string public location;

    address public addr;

    event UpdatedLocation(string epc, string name, string location);

    function Tracker(string _epc, string _name, string _location) {
        addr = msg.sender;
        epc = _epc;
        name = _name;
        location = _location;
    }

    function getLocation() returns (string) {
        return location;   
    }

    function updateLocation(string _location) {
        location = _location;
        UpdatedLocation(epc, name, location);
    }
}