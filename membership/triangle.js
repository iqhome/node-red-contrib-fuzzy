module.exports = function(RED) {
    function Triangle(config) {
        RED.nodes.createNode(this,config);
        this.x0 = config.x0;
        this.x1 = config.x1;
        this.x2 = config.x2;
        
        var node = this;
        node.on('input', function(msg) {

            var mf_value = 0;
            var input = msg.payload;

            if (input.value <= node.x0) {
                mf_value = 0;
            } else if (input.value >= node.x2) {
                mf_value = 0;
            } else if ((input.value > node.x0) && (input.value <= node.x1)) {
                mf_value = (input.value - node.x0) / (node.x1 - node.x0);
            } else if ((input.value > node.x1) && (input.value < node.x2)) {
                mf_value = (node.x2 - input.value) / (node.x2 - node.x1);
            }

            msg.payload = {
                input: [
                    {
                        id: input.id,
                        value: input.value,
                        weight: mf_value                        
                    }
                ],
                weight: mf_value
            };

            node.send(msg);
        });
    }
    RED.nodes.registerType("triangle",Triangle);
}

