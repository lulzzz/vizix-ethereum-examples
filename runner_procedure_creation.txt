contract runner {
    string name;
    string status;
    address addr;

    function runner(string _name){
        addr = msg.sender;
        name = _name;
        status = "resting";
    }

    function run() {
        status = "running";
    }
}

var src = "contract runner { string name; string status; address addr; function runner(string _name){ addr = msg.sender; name = _name; status = \"resting\"; } function run() { status = \"running\"; } } "

var compiled = web3.eth.compile.solidity(src);

var runnerContract = web3.eth.contract(compiled.runner.info.abiDefinition);


var runner = runnerContract.new("Renan", {
        from: web3.eth.accounts[0], 
        data: compiled.runner.code, gas: 300000
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


var runner0 = runnerContract.new("Renan", {
        from: web3.eth.accounts[0], 
        data: compiled.runner.code, gas: 300000
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