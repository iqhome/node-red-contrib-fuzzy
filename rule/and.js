/*

payload:{
	'previous': x,
	'actual': y
}
*/

module.exports = function(RED) {
    function And(config) {
        RED.nodes.createNode(this,config);
        this.minin = config.minin;
        this.weight = config.weight;
        
        var node = this;

        node.on('input', function(msg) {

            // weight
            if(node.weight > 1){
                node.weight = 1.0;
            }
            if(node.weight < 0){
                node.weight = 0;
            }

        	// value
            var input = msg.payload.input[0];
            if(!input) return null;

        	// load stored elements
        	var es = node.context().get('elements') || [];
        	// find first same previous value and update if its exists
            var idx = es.findIndex(x => x.id === input.id);

            if(idx < 0){
                es.push(input);
            }
            else{
                es[idx] = input;
            }

            node.context().set('elements', es);

            // get output value
            var weights = es.map(a => a.weight);
            var weight = Math.min(...weights) * node.weight;

            if(es.length >= node.minin){
                msg.payload = {
                    input: es,
                    weight: weight
                };
                node.send(msg);
            }
            return null;
        });

    }
    RED.nodes.registerType("and",And);
}
