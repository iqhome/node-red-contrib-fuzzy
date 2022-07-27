module.exports = function(RED) {
    function Aggregation(config) {
        RED.nodes.createNode(this,config);

        var node = this;
        
        node.context().set('output', null);

        node.on('input', function(msg) {

        	// value
        	var action = msg.payload;
        	// load stored elements
        	var es = node.context().get('elements') || [];

        	// find first same previous value and update if its exists
            var idx = es.findIndex(x => x.id === action.id);
        	if(idx < 0){
                es.push(action);
        	}
        	// else add to elements object
        	else{
                es[idx] = action;
        	}

            node.context().set('elements', es);

            // output value
            var sum_out = 0;
            var sum_w = 0;
            
            for (var i = 0; i < es.length; i++) {
                sum_out += (es[i].output * es[i].weight);
                sum_w += es[i].weight;
            }

            if(!sum_w) {
                output = 0;
            }
            else{ 
                output = sum_out / sum_w;
            }

            msg.payload = {
                output: output,
                input: action.input
            };

            node.send(msg);
            
            return null;
        });

    }
    RED.nodes.registerType("aggregation",Aggregation);
}
