

function $(n){
	return document.getElementById(n);
}

var loadDelayMs = 30; // delay between sending test values
var urlDataIn = 'ws://localhost:1880/fuzzy-in'; // data in URL
var urlDataOut = 'ws://localhost:1880/fuzzy-out'; // data out URL

var plotOutputMin = 0; 
var plotOutputMax = 0; 

var Data;
var Start1;
var End1;
var Start2;
var End2;
var Param1;
var Param2;

var Step;

var vX;
var vY;

var redrawtout;


window.onload = ()=>{

	InitTest((msg)=>{

		if(!Data) return;

		if(redrawtout) clearTimeout(redrawtout);

		try{
			var json = JSON.parse(msg);

			console.log(json)

			var id = parseFloat(json.input[0].value).toFixed(2)+ "-"+parseFloat(json.input[1].value).toFixed(2);

			if(json.output > plotOutputMax){
				plotOutputMax = json.output;
			}

			if(!Data._data[id]){
				
				Data.add({
					id: id,
					x: json.input.find(x => x.id === Param1).value,
					y: json.input.find(x => x.id === Param2).value,
					z: json.output, 
					style: json.output
		    });    
			}
			else{
				Data.update({
					id: id, 
					z: json.output, 
					style: json.output
				});
			}

			redrawtout = setTimeout(()=>{
				loader(false);
				Draw(Data);
			}, 100);	

		}
		catch(e){
			console.log(e)
		}
	});	
}

function runTest(){

	loader(true);

	Start1 = parseFloat($('param10').value);
	End1 = parseFloat($('param11').value);
	Start2 = parseFloat($('param20').value);
	End2 = parseFloat($('param21').value);

	Param1 = $('paramid1').value;
	Param2 = $('paramid2').value;

	Step = parseFloat($('step').value);

	vY = Start2;
	vX = Start1;
	
	Data = new vis.DataSet();

	sendTestData();

}

function sendTestData() {

	if(vX > End1){
		vX = Start1;
		vY+=Step;
	}

	if(vY > End2){
		return;
	}

	sendToServer({
		type: Param1,
		value: vX
	});
	sendToServer({
		type: Param2,
		value: vY
	});

	vX+=Step;

	setTimeout(()=>{
		sendTestData();
	}, loadDelayMs)
}


function Draw(data) {
    // specify options
    //console.log(data 	)

    var cameraPosition = { horizontal: -0.6, vertical: 0.3, distance: 2};

    var options = {
	    	width:  '60vw',
	    	height: '75vh',
	    	// style: 'dot-color',
        style: 'surface',
        legendLabel: 'Fuzzy Output',
        xLabel: 'x1',
        yLabel: 'x2',
        zLabel: 'output',
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        keepAspectRatio: true,
        verticalRatio: 0.4,
        zMax: plotOutputMax,
        zMin: plotOutputMin,
        //showLegend: false,
				//xCenter: '50%',
				//yCenter: '30%',
		dotSizeRatio: 0.004,
		tooltip: function (point) {
          // parameter point contains properties x, y, z
          return 'x1: <b>' + point.x.toFixed(2) + '</b>, x2: <b>' + point.y.toFixed(2) + '</b>, output: <b>' + point.z.toFixed(2) + '</b>, ';
      },
      cameraPosition: cameraPosition
  };

    // Instantiate our graph object.
    new vis.Graph3d($('visualization'), Data, options);
}


var ServerSend;
function  InitTest(cb) {
	ServerSend = new WebSocket(urlDataIn);
	let ServerListen = new WebSocket(urlDataOut);

	// Connection opened
	ServerListen.onopen = ()=> {
	    console.log('Hello Server!');
	};

	// Listen for messages
	ServerListen.onmessage = (event)=> {
	    //console.log('Message from server ', event.data);
	    if(cb)cb(event.data);
	};

 	ServerListen.onclose = function(){
	   	setTimeout(()=>{
	   		InitTest(cb);
	   	}, 1000);
	};
}

function SendValue() {
	let param = $('paramid').value;
	let val = parseFloat($('paramval').value);

	;
	ServerSend.send(JSON.stringify({
			type: param,
			value: val
	}));
	
}

function sendToServer(msg) {
	if(!ServerSend || !msg) return;
	var m = JSON.stringify(msg);
	ServerSend.send(m)
}

function loader(l) {
	if(l){
		$('loader').style.display = 'block';
	}
	else{
		$('loader').style.display = 'none';
	}
}