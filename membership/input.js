module.exports = function(RED) {
    function Input(config) {
        RED.nodes.createNode(this,config);
        this.nid = config.nid;

        var node = this;
        node.on('input', function(msg) {

            if(msg.payload === undefined || 
                msg.payload === null ) return null;

            msg.payload = {
                id: node.nid,
                value: parseFloat(msg.payload)
            };

            node.send(msg);
        });
    }
    RED.nodes.registerType("input",Input);
}
