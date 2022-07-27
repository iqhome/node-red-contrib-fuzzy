module.exports = function(RED) {
    function OutMf(config) {
        RED.nodes.createNode(this,config);
        this.constant = config.constant;
        
        var node = this;
        node.on('input', function(msg) {

            var prev_value = node.context().get('value');

            // ensure between 0 and 1
            if(node.constant < 0) node.constant = 0;
            if(node.constant > 1) node.constant = 1;

            var weight = msg.payload;
            var output = node.constant * weight;

            var actual = {
                weight: weight,
                output: output
            };

            node.context().set('value', actual);

            msg.payload = {
                previous: prev_value,
                actual: actual
            };

            node.send(msg);
        });
    }
    RED.nodes.registerType("outmf",OutMf);
}
