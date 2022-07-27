[
    {
        "id": "9389cbc5.3d0fa8",
        "type": "aggregation",
        "z": "8729305e7814bf11",
        "name": "",
        "duplicate": true,
        "x": 1070,
        "y": 240,
        "wires": [
            [
                "134f6dbdddc608fa"
            ]
        ]
    },
    {
        "id": "8c72d65f.be8c8",
        "type": "switch",
        "z": "8729305e7814bf11",
        "name": "",
        "property": "type",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "x1",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "x2",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 190,
        "y": 260,
        "wires": [
            [
                "952f52226e7f7946"
            ],
            [
                "ce78ba9f51dc075a"
            ]
        ]
    },
    {
        "id": "a465f3cb9c7f7634",
        "type": "json",
        "z": "8729305e7814bf11",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 130,
        "y": 180,
        "wires": [
            [
                "84e6efff4f6ef055"
            ]
        ]
    },
    {
        "id": "24be2448.94811c",
        "type": "websocket in",
        "z": "8729305e7814bf11",
        "name": "",
        "server": "3f330f51.289bb8",
        "client": "",
        "x": 90,
        "y": 120,
        "wires": [
            [
                "a465f3cb9c7f7634"
            ]
        ]
    },
    {
        "id": "462669db.fb6ee",
        "type": "websocket out",
        "z": "8729305e7814bf11",
        "name": "",
        "server": "a81eb3d.5b61a5",
        "client": "",
        "x": 1280,
        "y": 280,
        "wires": []
    },
    {
        "id": "134f6dbdddc608fa",
        "type": "function",
        "z": "8729305e7814bf11",
        "name": "format",
        "func": "return { payload: msg.payload };",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1210,
        "y": 240,
        "wires": [
            [
                "462669db.fb6ee"
            ]
        ]
    },
    {
        "id": "9b0e43cf502718bc",
        "type": "grade",
        "z": "8729305e7814bf11",
        "name": "high",
        "x0": "0.4",
        "x1": "0.7",
        "x": 510,
        "y": 140,
        "wires": [
            [
                "482b097a35bce998",
                "3f15571bd993e226"
            ]
        ]
    },
    {
        "id": "952f52226e7f7946",
        "type": "input",
        "z": "8729305e7814bf11",
        "name": "x1",
        "nid": "x1",
        "x": 350,
        "y": 180,
        "wires": [
            [
                "9b0e43cf502718bc",
                "d32ee12ee695b3a4",
                "4f3012c54d15536d"
            ]
        ]
    },
    {
        "id": "ce78ba9f51dc075a",
        "type": "input",
        "z": "8729305e7814bf11",
        "name": "x2",
        "nid": "x2",
        "x": 350,
        "y": 340,
        "wires": [
            [
                "57d779dd551611e7",
                "ce8288383dc9d027",
                "259eb8714ed12bb8"
            ]
        ]
    },
    {
        "id": "57d779dd551611e7",
        "type": "grade",
        "z": "8729305e7814bf11",
        "name": "high",
        "x0": "0.3",
        "x1": "0.6",
        "x": 510,
        "y": 300,
        "wires": [
            [
                "482b097a35bce998",
                "1487fe8d740e4e3a"
            ]
        ]
    },
    {
        "id": "ae273ff771704063",
        "type": "and",
        "z": "8729305e7814bf11",
        "name": "",
        "minin": 2,
        "weight": 1,
        "complement": false,
        "x": 770,
        "y": 140,
        "wires": [
            [
                "3883d328c6ffbeee"
            ]
        ]
    },
    {
        "id": "d32ee12ee695b3a4",
        "type": "triangle",
        "z": "8729305e7814bf11",
        "name": "mid",
        "x0": "0.3",
        "x1": 0.5,
        "x2": "0.7",
        "x": 510,
        "y": 180,
        "wires": [
            [
                "c7c9c2162ed07f7d"
            ]
        ]
    },
    {
        "id": "ce8288383dc9d027",
        "type": "triangle",
        "z": "8729305e7814bf11",
        "name": "mid",
        "x0": "0.3",
        "x1": 0.5,
        "x2": "0.7",
        "x": 510,
        "y": 340,
        "wires": [
            [
                "c7c9c2162ed07f7d"
            ]
        ]
    },
    {
        "id": "482b097a35bce998",
        "type": "and",
        "z": "8729305e7814bf11",
        "name": "",
        "minin": 2,
        "weight": 1,
        "complement": false,
        "x": 770,
        "y": 200,
        "wires": [
            [
                "6586289346e8fa53"
            ]
        ]
    },
    {
        "id": "1487fe8d740e4e3a",
        "type": "and",
        "z": "8729305e7814bf11",
        "name": "",
        "minin": 2,
        "weight": 1,
        "complement": false,
        "x": 770,
        "y": 260,
        "wires": [
            [
                "b695bff291091c66"
            ]
        ]
    },
    {
        "id": "3f15571bd993e226",
        "type": "and",
        "z": "8729305e7814bf11",
        "name": "",
        "minin": 2,
        "weight": 1,
        "complement": false,
        "x": 770,
        "y": 380,
        "wires": [
            [
                "72980ef73a5e6a2c"
            ]
        ]
    },
    {
        "id": "c7c9c2162ed07f7d",
        "type": "not",
        "z": "8729305e7814bf11",
        "name": "",
        "weight": 1,
        "x": 650,
        "y": 340,
        "wires": [
            [
                "e88d194e89758414"
            ]
        ]
    },
    {
        "id": "e88d194e89758414",
        "type": "or",
        "z": "8729305e7814bf11",
        "name": "",
        "minin": 2,
        "weight": 1,
        "x": 770,
        "y": 320,
        "wires": [
            [
                "3af1d134a75e6ae5"
            ]
        ]
    },
    {
        "id": "84e6efff4f6ef055",
        "type": "function",
        "z": "8729305e7814bf11",
        "name": "format",
        "func": "\nmsg.type = msg.payload.type;\nmsg.payload = msg.payload.value;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 150,
        "y": 220,
        "wires": [
            [
                "8c72d65f.be8c8"
            ]
        ]
    },
    {
        "id": "259eb8714ed12bb8",
        "type": "reverse grade",
        "z": "8729305e7814bf11",
        "name": "low",
        "x0": 0.3,
        "x1": 0.6,
        "x": 510,
        "y": 380,
        "wires": [
            [
                "ae273ff771704063",
                "3f15571bd993e226"
            ]
        ]
    },
    {
        "id": "4f3012c54d15536d",
        "type": "reverse grade",
        "z": "8729305e7814bf11",
        "name": "low",
        "x0": 0.3,
        "x1": 0.6,
        "x": 510,
        "y": 220,
        "wires": [
            [
                "ae273ff771704063",
                "1487fe8d740e4e3a"
            ]
        ]
    },
    {
        "id": "3883d328c6ffbeee",
        "type": "implication",
        "z": "8729305e7814bf11",
        "name": "linear1",
        "constant": "1",
        "terms": [
            {
                "id": "x1",
                "coeff": "-3"
            },
            {
                "id": "x2",
                "coeff": "2"
            }
        ],
        "x": 890,
        "y": 140,
        "wires": [
            [
                "9389cbc5.3d0fa8"
            ]
        ]
    },
    {
        "id": "3af1d134a75e6ae5",
        "type": "implication",
        "z": "8729305e7814bf11",
        "name": "const1",
        "constant": 0.5,
        "terms": [],
        "x": 890,
        "y": 320,
        "wires": [
            [
                "9389cbc5.3d0fa8"
            ]
        ]
    },
    {
        "id": "72980ef73a5e6a2c",
        "type": "implication",
        "z": "8729305e7814bf11",
        "name": "const2",
        "constant": "1",
        "terms": [],
        "x": 890,
        "y": 380,
        "wires": [
            [
                "9389cbc5.3d0fa8"
            ]
        ]
    },
    {
        "id": "6586289346e8fa53",
        "type": "implication",
        "z": "8729305e7814bf11",
        "name": "linear2",
        "constant": "1",
        "terms": [
            {
                "id": "x1",
                "coeff": "3"
            },
            {
                "id": "x2",
                "coeff": "-2"
            }
        ],
        "x": 890,
        "y": 200,
        "wires": [
            [
                "9389cbc5.3d0fa8"
            ]
        ]
    },
    {
        "id": "b695bff291091c66",
        "type": "implication",
        "z": "8729305e7814bf11",
        "name": "linear3",
        "constant": "1",
        "terms": [
            {
                "id": "x1",
                "coeff": "2"
            },
            {
                "id": "x2",
                "coeff": "3"
            }
        ],
        "x": 890,
        "y": 260,
        "wires": [
            [
                "9389cbc5.3d0fa8"
            ]
        ]
    },
    {
        "id": "1c886e2b4a84c243",
        "type": "template",
        "z": "8729305e7814bf11",
        "name": "Surface Plot",
        "field": "payload",
        "fieldType": "msg",
        "format": "html",
        "syntax": "mustache",
        "template": "\n<!DOCTYPE html>\n<html>\n<head>\n\n<title>Event Driven T-S Fuzzy Tester</title>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.js\" integrity=\"sha512-XHDcSyqhOoO2ocB7sKOCJEkUjw/pQCJViP1ynpy+EGh/LggzrP6U/V3a++LQTnZT7sCQKeHRyWHfhN2afjXjCg==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"></script>\n<script type=\"text/javascript\">\n\n\nfunction $(n){\n\treturn document.getElementById(n);\n}\n\nvar loadDelayMs = 30; // delay between sending test values\nvar urlDataIn = 'ws://localhost:1880/fuzzy-in'; // data in URL\nvar urlDataOut = 'ws://localhost:1880/fuzzy-out'; // data out URL\n\nvar plotOutputMin = 0; \nvar plotOutputMax = 0; \n\nvar Data;\nvar Start1;\nvar End1;\nvar Start2;\nvar End2;\nvar Param1;\nvar Param2;\n\nvar Step;\n\nvar vX;\nvar vY;\n\nvar redrawtout;\n\n\nwindow.onload = ()=>{\n\n\tInitTest((msg)=>{\n\n\t\tif(!Data) return;\n\n\t\tif(redrawtout) clearTimeout(redrawtout);\n\n\t\ttry{\n\t\t\tvar json = JSON.parse(msg);\n\n\t\t\tconsole.log(json)\n\n\t\t\tvar id = parseFloat(json.input[0].value).toFixed(2)+ \"-\"+parseFloat(json.input[1].value).toFixed(2);\n\n\t\t\tif(json.output > plotOutputMax){\n\t\t\t\tplotOutputMax = json.output;\n\t\t\t}\n\n\t\t\tif(!Data._data[id]){\n\t\t\t\t\n\t\t\t\tData.add({\n\t\t\t\t\tid: id,\n\t\t\t\t\tx: json.input.find(x => x.id === Param1).value,\n\t\t\t\t\ty: json.input.find(x => x.id === Param2).value,\n\t\t\t\t\tz: json.output, \n\t\t\t\t\tstyle: json.output\n\t\t    });    \n\t\t\t}\n\t\t\telse{\n\t\t\t\tData.update({\n\t\t\t\t\tid: id, \n\t\t\t\t\tz: json.output, \n\t\t\t\t\tstyle: json.output\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tredrawtout = setTimeout(()=>{\n\t\t\t\tloader(false);\n\t\t\t\tDraw(Data);\n\t\t\t}, 100);\t\n\n\t\t}\n\t\tcatch(e){\n\t\t\tconsole.log(e)\n\t\t}\n\t});\t\n}\n\nfunction runTest(){\n\n\tloader(true);\n\n\tStart1 = parseFloat($('param10').value);\n\tEnd1 = parseFloat($('param11').value);\n\tStart2 = parseFloat($('param20').value);\n\tEnd2 = parseFloat($('param21').value);\n\n\tParam1 = $('paramid1').value;\n\tParam2 = $('paramid2').value;\n\n\tStep = parseFloat($('step').value);\n\n\tvY = Start2;\n\tvX = Start1;\n\t\n\tData = new vis.DataSet();\n\n\tsendTestData();\n\n}\n\nfunction sendTestData() {\n\n\tif(vX > End1){\n\t\tvX = Start1;\n\t\tvY+=Step;\n\t}\n\n\tif(vY > End2){\n\t\treturn;\n\t}\n\n\tsendToServer({\n\t\ttype: Param1,\n\t\tvalue: vX\n\t});\n\tsendToServer({\n\t\ttype: Param2,\n\t\tvalue: vY\n\t});\n\n\tvX+=Step;\n\n\tsetTimeout(()=>{\n\t\tsendTestData();\n\t}, loadDelayMs)\n}\n\n\nfunction Draw(data) {\n    // specify options\n    //console.log(data \t)\n\n    var cameraPosition = { horizontal: -0.6, vertical: 0.3, distance: 2};\n\n    var options = {\n\t    \twidth:  '60vw',\n\t    \theight: '75vh',\n\t    \t// style: 'dot-color',\n        style: 'surface',\n        legendLabel: 'Fuzzy Output',\n        xLabel: 'x1',\n        yLabel: 'x2',\n        zLabel: 'output',\n        showPerspective: true,\n        showGrid: true,\n        showShadow: false,\n        keepAspectRatio: true,\n        verticalRatio: 0.4,\n        zMax: plotOutputMax,\n        zMin: plotOutputMin,\n        //showLegend: false,\n\t\t\t\t//xCenter: '50%',\n\t\t\t\t//yCenter: '30%',\n\t\tdotSizeRatio: 0.004,\n\t\ttooltip: function (point) {\n          // parameter point contains properties x, y, z\n          return 'x1: <b>' + point.x.toFixed(2) + '</b>, x2: <b>' + point.y.toFixed(2) + '</b>, output: <b>' + point.z.toFixed(2) + '</b>, ';\n      },\n      cameraPosition: cameraPosition\n  };\n\n    // Instantiate our graph object.\n    new vis.Graph3d($('visualization'), Data, options);\n}\n\n\nvar ServerSend;\nfunction  InitTest(cb) {\n\tServerSend = new WebSocket(urlDataIn);\n\tlet ServerListen = new WebSocket(urlDataOut);\n\n\t// Connection opened\n\tServerListen.onopen = ()=> {\n\t    console.log('Hello Server!');\n\t};\n\n\t// Listen for messages\n\tServerListen.onmessage = (event)=> {\n\t    //console.log('Message from server ', event.data);\n\t    if(cb)cb(event.data);\n\t};\n\n \tServerListen.onclose = function(){\n\t   \tsetTimeout(()=>{\n\t   \t\tInitTest(cb);\n\t   \t}, 1000);\n\t};\n}\n\nfunction SendValue() {\n\tlet param = $('paramid').value;\n\tlet val = parseFloat($('paramval').value);\n\n\t;\n\tServerSend.send(JSON.stringify({\n\t\t\ttype: param,\n\t\t\tvalue: val\n\t}));\n\t\n}\n\nfunction sendToServer(msg) {\n\tif(!ServerSend || !msg) return;\n\tvar m = JSON.stringify(msg);\n\tServerSend.send(m)\n}\n\nfunction loader(l) {\n\tif(l){\n\t\t$('loader').style.display = 'block';\n\t}\n\telse{\n\t\t$('loader').style.display = 'none';\n\t}\n}\n  \t\n  </script>\n\n  <style type=\"text/css\">\n  \tbody{\n  \t\tbackground: #F0f0f0;\n  \t\tvertical-align: top;\n  \t}\n\n\n.loader {    \n\tdisplay: none;\n    position: fixed;\n    left: 50%;\n    top: 47%;\n    border: 16px solid #e6dddd;\n    border-radius: 50%;\n    border-top: 16px solid #3498db;\n    width: 120px;\n    height: 120px;\n  -webkit-animation: spin 2s linear infinite; /* Safari */\n  animation: spin 2s linear infinite;\n}\n#description{\n\twidth: 50vw;\n\tpadding: 5px 0 15px 0;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n</style>\n\n\n</head>\n<body>\n<div id=\"result\"></div>\n\n<div style=\"vertical-align: top;\">\n\t<h3>\n\t\tEvent Driven T-S Fuzzy Surface Plot\n\t</h3>\n\t<div id=\"description\">\n\t\tThis tool help for tesing Node-RED T-S FIS. After set the the parameters (IDs, start and end values of test range) press Run Test button. \n\t\tThe test values willl be sent via a WebSocket to the Node-RED FIS an the result surface plot will shown after all the output values received.\n\t\tIf Node-RED is not running on localhost please modify the URL in app.js.\n\t</div>\n\t<div>\n\t\t\n\t</div>\n\t<div style=\"display: inline-block;vertical-align: top;\">\n\t\t<table>\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th></th>\n\t\t\t\t\t<th>ID</th>\n\t\t\t\t\t<th>Start</th>\n\t\t\t\t\t<th>End</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tr>\n\t\t\t\t<td>Param 1</td>\n\t\t\t\t<td><input type=\"text\" id=\"paramid1\" step=\"0.01\" value=\"x1\"></td>\n\t\t\t\t<td><input type=\"number\" id=\"param10\" step=\"0.01\" value=\"0\"></td>\n\t\t\t\t<td><input type=\"number\" id=\"param11\" step=\"0.01\" value=\"1\"></td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>Param 2</td>\n\t\t\t\t<td><input type=\"text\" id=\"paramid2\" step=\"0.01\" value=\"x2\"></td>\n\t\t\t\t<td><input type=\"number\" id=\"param20\" step=\"0.01\" value=\"0\"></td>\n\t\t\t\t<td><input type=\"number\" id=\"param21\" step=\"0.01\" value=\"1\"></td>\n\t\t\t</tr>\n\t\t\t<tr></tr>\n\t\t\t<tr>\n\t\t\t\t<td>Step</td>\n\t\t\t\t<td><input type=\"number\" id=\"step\" step=\"0.05\" value=\"0.05\"></td>\n\t\t\t\t<td>\n\t\t\t\t\t<button onclick=\"runTest()\">Run Test</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\t\n\n\t<div style=\"display: inline-block;\">\n\t\t<div id=\"visualization\"></div>\n\t</div>\n</div>\n\n<div class=\"loader\" id=\"loader\"></div>\n</body>\n</html>",
        "output": "str",
        "x": 250,
        "y": 60,
        "wires": [
            [
                "e96a57b85ba5a719"
            ]
        ]
    },
    {
        "id": "e96a57b85ba5a719",
        "type": "http response",
        "z": "8729305e7814bf11",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 410,
        "y": 60,
        "wires": []
    },
    {
        "id": "2a3031a7fc92ce7e",
        "type": "http in",
        "z": "8729305e7814bf11",
        "name": "",
        "url": "/plot",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 80,
        "y": 60,
        "wires": [
            [
                "1c886e2b4a84c243"
            ]
        ]
    },
    {
        "id": "3f330f51.289bb8",
        "type": "websocket-listener",
        "path": "fuzzy-in",
        "wholemsg": "false"
    },
    {
        "id": "a81eb3d.5b61a5",
        "type": "websocket-listener",
        "path": "fuzzy-out",
        "wholemsg": "false"
    }
]