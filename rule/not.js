/*

payload:{
	'previous': x,
	'actual': y
}
*/

module.exports = function(RED) {
    function Not(config) {
        RED.nodes.createNode(this,config);
        this.weight = config.weight;

        var node = this;


        node.on('input', function(msg) {

        	// value
            if(node.weight > 1){
                node.weight = 1.0;
            }
            if(node.weight < 0){
                node.weight = 0;
            }
        	
            // value
            // only one input allowed
            var input = msg.payload.input[0];
            if(!input) return null;

            // only one input allowed
            var weight =  (1.0 - input.weight) * node.weight;
            msg.payload.input[0].weight = weight;
            msg.payload.weight = weight;

            node.send(msg);
        });

    }
    RED.nodes.registerType("not",Not);
}
