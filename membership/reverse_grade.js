module.exports = function(RED) {
    function ReverseGrade(config) {
        RED.nodes.createNode(this,config);
        this.x0 = config.x0;
        this.x1 = config.x1;

        var node = this;
        node.on('input', function(msg) {

            var value = 0;
            var input = msg.payload;

            if (input.value <= node.x0) {
                mf_value = 1;
            } else if (input.value >= node.x1) {
                mf_value = 0;
            } else {
                mf_value = (-input.value / (node.x1 - node.x0)) + (node.x1 / (node.x1 - node.x0));
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
    RED.nodes.registerType("reverse grade",ReverseGrade);
}
