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
        "y": 160,
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
        "y": 200,
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