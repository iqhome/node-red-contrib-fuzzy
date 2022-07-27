module.exports = function(RED) {
    function Implication(config) {
        RED.nodes.createNode(this,config);
        this.constant = config.constant;
        this.terms = config.terms;
        
        var node = this;
        node.on('input', function(msg) {

            var imps = msg.payload;
            var weight = imps.weight;
            var input = imps.input;

            // z = ax +by + ... + c
            var output = parseFloat(node.constant);

            for (var i = 0; i < node.terms.length; i++) {
                
                var id = node.terms[i].id;
                let v = input.find(x => x.id === id);
                                
                if(v){
                    output += node.terms[i].coeff * v.value;
                }                
            }
            
            msg.payload = {
                id: node.id,
                input: input,
                weight: weight, // w
                output: output  // z
            };

            node.send(msg);
            
            return null;
        });
    }
    RED.nodes.registerType("implication",Implication);
}
