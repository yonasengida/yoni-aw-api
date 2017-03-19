define({ "api": [
  {
    "description": "<p>This end point allow to create new Farmer information based on below parameter.</p>",
    "type": "post",
    "url": "/farmers",
    "title": "Create Farmer",
    "name": "CreateFarmer",
    "group": "Farmer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Farmer First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "middle_name",
            "description": "<p>Farmers MIddle Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>Farmer Mobile NUmber</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>Farmers Location</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location.lati",
            "description": "<p>Latitude  of Location</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location.long",
            "description": "<p>Longitude of Location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Exmaple",
          "content": "{\n  \"first_name\":\"abebe\",\n  \"middle_name\":\"kebede\",\n  \"mobile\":\"+251930015100\",\n  \"location\":{\n            \"lati\":1,\n             \"long\":1 \n             },\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n    \"first_name\": \"abebe\",\n    \"middle_name\": \"kebede\",\n    \"mobile\": \"+251930015100\",\n    \"location\": {\n        \"lati\": \"1\",\n        \"long\": \"1\"\n    },\n    \"_id\": \"58cdab596a13435788a9725d\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/farmer.js",
    "groupTitle": "Farmer"
  },
  {
    "description": "<p>This Endpoint is allow to delete specific farmer information</p>",
    "type": "delete",
    "url": "/farmers/:id",
    "title": "Delete Specific farmer information",
    "name": "DeleteFarmer",
    "group": "Farmer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Farmers ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n      \"first_name\": \"abebe\",\n      \"middle_name\": \"kebede\",\n      \"mobile\": \"+251930015100\",\n      \"location\": {\n          \"lati\": \"1\",\n          \"long\": \"1\"\n      },\n      \"_id\": \"58cdab596a13435788a9725d\"\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/farmer.js",
    "groupTitle": "Farmer"
  },
  {
    "description": "<p>This Endpoint is allow to get specific collection.</p>",
    "type": "get",
    "url": "/farmers/:id",
    "title": "Get Specific farmer information",
    "name": "GetFarmer",
    "group": "Farmer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Farmer  ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP/1.1 200 OK\n     {\n     \"first_name\": \"abebe\",\n     \"middle_name\": \"kebede\",\n     \"mobile\": \"+251930015100\",\n     \"location\": {\n         \"lati\": \"1\",\n         \"long\": \"1\"\n     },\n     \"_id\": \"58cdab596a13435788a9725d\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/farmer.js",
    "groupTitle": "Farmer"
  },
  {
    "description": "<p>This Endpoint is allow to get all farmers Collection.</p>",
    "type": "get",
    "url": "/farmers",
    "title": "Get Farmers Collection",
    "name": "GetFarmers",
    "group": "Farmer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"first_name\": \"abebe\",\n        \"middle_name\": \"kebede\",\n        \"mobile\": \"+251930015100\",\n        \"location\": {\n            \"lati\": \"1\",\n            \"long\": \"1\"\n        },\n        \"_id\": \"58cdab596a13435788a9725d\"\n     }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/farmer.js",
    "groupTitle": "Farmer"
  },
  {
    "description": "<p>Get farmers Collection by Pagination. Use below parameters to query with pagination :- page=&lt;RESULTS_PAGE&gt; and per_page=&lt;RESULTS_PER_PAGE&gt;.</p>",
    "type": "get",
    "url": "/farmers/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE>",
    "title": "Farmers Collection by Pagination",
    "name": "Get_farmers_Collection",
    "group": "Farmer",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Farmer First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "middle_name",
            "description": "<p>Farmers MIddle Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>Farmer Mobile NUmber</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>Farmers Location</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "location.lati",
            "description": "<p>Latitude  of Location</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "location.long",
            "description": "<p>Longitude of Location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"first_name\": \"abebe\",\n        \"middle_name\": \"kebede\",\n        \"mobile\": \"+251930015100\",\n        \"location\": {\n            \"lati\": \"1\",\n            \"long\": \"1\"\n        },\n        \"_id\": \"58cdab596a13435788a9725d\"\n     }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/farmer.js",
    "groupTitle": "Farmer"
  },
  {
    "description": "<p>This endpoint is allow to update specific farmer information</p>",
    "type": "put",
    "url": "/farmers/:id",
    "title": "Update Specific farmer information",
    "name": "UpdateFarmer",
    "group": "Farmer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Update Data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Exmaple",
          "content": "{\n \"firs_tname\":\"engida\",\n \"middle_name\":\"yonas\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n   {\n       \"first_name\": \"engida\",\n       \"middle_name\": \"yonas\",\n       \"mobile\": \"+251930015100\",\n       \"location\": {\n           \"lati\": \"1\",\n           \"long\": \"1\"\n       },\n       \"_id\": \"58cdab596a13435788a9725d\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/farmer.js",
    "groupTitle": "Farmer"
  },
  {
    "description": "<p>This Endpoint allow to Create Land information</p>",
    "type": "post",
    "url": "/lands",
    "title": "Create Land Information",
    "name": "CreateLand",
    "group": "Land",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>Location of  landname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location.lati",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location.long",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "soil_fertility",
            "description": "<p>Land Soil Fertility</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "soil_fertility.macro",
            "description": "<p>Macronutrients of Soil Fertility</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soil_fertility.macro.nitrogen",
            "description": "<p>Nitrogen amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soil_fertility.macro.phosphorus",
            "description": "<p>Phosphorus amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soil_fertility.macro.potassium",
            "description": "<p>Potassium amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soil_fertility.macro.sulfur",
            "description": "<p>Sulfur amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soil_fertility.macro.calcium",
            "description": "<p>Calcium amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soil_fertility.macro.magnesium",
            "description": "<p>Magnesium amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "soil_fertility.micro",
            "description": "<p>Mironutrients of Soil Fertility</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soil_fertility.micro.iron",
            "description": "<p>Iron amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soil_fertility.micro.manganese",
            "description": "<p>Manganese amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soil_fertility.micro.copper",
            "description": "<p>Copper amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soil_fertility.micro.boron",
            "description": "<p>Boron amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soil_fertility.micro.molybdenum",
            "description": "<p>Molybdenum amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "soil_fertility.micro.chlorine",
            "description": "<p>Chlorine amount</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Exmaple",
          "content": "{\n  \"location\":{\n        \"lati\": \"8.9880E\",\n        \"long\":\"38.7893N\"\n\n    },\n    \"soil_type\": \"Clay\",\n    \"soil_fertility\": {\n                    \"macro\": {\n                        \"nitrogen\":1.4,\n                        \"phosphorus\":3.1,\n                        \"potassium\":2.5,\n                        \"sulfur\":5.0,\n                        \"calcium\":1.8,\n                        \"magnesium\":1.1\n                    },\n                    \"micro\":{\n                        \"iron\":1.1,\n                        \"manganese\":1.7,\n                        \"copper\" :1.9,\n                        \"boron\" :1.3,\n                        \"molybdenum\" :3.1,\n                        \"chlorine\" :1.01\n                    }\n    },\n    \"area\": 400,\n    \"humidity\":40,\n    \"temp\":13,\n    \"farmer\":1\t\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n        \"location\": {\n            \"lati\": \"8.9880E\",\n            \"long\": \"38.7893N\"\n        },\n        \"soil_type\": \"Clay\",\n        \"soil_fertility\": {\n            \"macro\": {\n            \"nitrogen\": \"1.4\",\n            \"phosphorus\": \"3.1\",\n            \"potassium\": \"2.5\",\n            \"sulfur\": \"5\",\n            \"calcium\": \"1.8\",\n            \"magnesium\": \"1.1\"\n            },\n            \"micro\": {\n            \"iron\": \"1.1\",\n            \"manganese\": \"1.7\",\n            \"copper\": \"1.9\",\n            \"boron\": \"1.3\",\n            \"molybdenum\": \"3.1\",\n            \"chlorine\": \"1.01\"\n            }\n        },\n        \"area\": \"400\",\n        \"humidity\": \"40\",\n        \"temp\": \"13\",\n        \"_id\": \"58ce45caaffc177a22c76629\"\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/land.js",
    "groupTitle": "Land"
  },
  {
    "description": "<p>This End point is allow to delete specific Land Information</p>",
    "type": "delete",
    "url": "/lands/:id",
    "title": "Delete Specific land information",
    "name": "DeleteLand",
    "group": "Land",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>land  ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "*HTTP/1.1 200 OK\n       {\n       \"location\": {\n           \"lati\": \"8.9880E\",\n           \"long\": \"38.7893N\"\n       },\n       \"soil_type\": \"Clay\",\n       \"soil_fertility\": {\n           \"macro\": {\n           \"nitrogen\": \"1.4\",\n           \"phosphorus\": \"3.1\",\n           \"potassium\": \"2.5\",\n           \"sulfur\": \"5\",\n           \"calcium\": \"1.8\",\n           \"magnesium\": \"1.1\"\n           },\n           \"micro\": {\n           \"iron\": \"1.1\",\n           \"manganese\": \"1.7\",\n           \"copper\": \"1.9\",\n           \"boron\": \"1.3\",\n           \"molybdenum\": \"3.1\",\n           \"chlorine\": \"1.01\"\n           }\n       },\n       \"area\": \"400\",\n       \"humidity\": \"40\",\n       \"temp\": \"13\",\n       \"_id\": \"58ce45caaffc177a22c76629\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/land.js",
    "groupTitle": "Land"
  },
  {
    "type": "get",
    "url": "/lands",
    "title": "Request lands information",
    "name": "Get_All_Lands",
    "group": "Land",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n        \"location\": {\n            \"lati\": \"8.9880E\",\n            \"long\": \"38.7893N\"\n        },\n        \"soil_type\": \"Clay\",\n        \"soil_fertility\": {\n            \"macro\": {\n            \"nitrogen\": \"1.4\",\n            \"phosphorus\": \"3.1\",\n            \"potassium\": \"2.5\",\n            \"sulfur\": \"5\",\n            \"calcium\": \"1.8\",\n            \"magnesium\": \"1.1\"\n            },\n            \"micro\": {\n            \"iron\": \"1.1\",\n            \"manganese\": \"1.7\",\n            \"copper\": \"1.9\",\n            \"boron\": \"1.3\",\n            \"molybdenum\": \"3.1\",\n            \"chlorine\": \"1.01\"\n            }\n        },\n        \"area\": \"400\",\n        \"humidity\": \"40\",\n        \"temp\": \"13\",\n        \"_id\": \"58ce45caaffc177a22c76629\"\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/land.js",
    "groupTitle": "Land"
  },
  {
    "description": "<p>Get Specific land Collection. To get Sepecific land information pass id  as parameter.</p>",
    "type": "get",
    "url": "/lands/:id",
    "title": "Request Specific land information",
    "name": "Getland",
    "group": "Land",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>land ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n        \"location\": {\n            \"lati\": \"8.9880E\",\n            \"long\": \"38.7893N\"\n        },\n        \"soil_type\": \"Clay\",\n        \"soil_fertility\": {\n            \"macro\": {\n            \"nitrogen\": \"1.4\",\n            \"phosphorus\": \"3.1\",\n            \"potassium\": \"2.5\",\n            \"sulfur\": \"5\",\n            \"calcium\": \"1.8\",\n            \"magnesium\": \"1.1\"\n            },\n            \"micro\": {\n            \"iron\": \"1.1\",\n            \"manganese\": \"1.7\",\n            \"copper\": \"1.9\",\n            \"boron\": \"1.3\",\n            \"molybdenum\": \"3.1\",\n            \"chlorine\": \"1.01\"\n            }\n        },\n        \"area\": \"400\",\n        \"humidity\": \"40\",\n        \"temp\": \"13\",\n        \"_id\": \"58ce45caaffc177a22c76629\"\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/land.js",
    "groupTitle": "Land"
  },
  {
    "type": "put",
    "url": "/lands/:id",
    "title": "Update Specific land information",
    "name": "Updateland",
    "group": "Land",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Update Data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Exmaple",
          "content": "{\n\"location\": {\n          \"lati\": \"8.9880E\",\n          \"long\": \"38.7893N\"\n      },\n      \"soil_type\": \"Clay\",\n      \"soil_fertility\": {\n          \"macro\": {\n          \"nitrogen\": \"1.4\",\n          }\n      }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n        {\n        \"location\": {\n            \"lati\": \"8.9880E\",\n            \"long\": \"38.7893N\"\n        },\n        \"soil_type\": \"Clay\",\n        \"soil_fertility\": {\n            \"macro\": {\n            \"nitrogen\": \"1.4\",\n            \"phosphorus\": \"3.1\",\n            \"potassium\": \"2.5\",\n            \"sulfur\": \"5\",\n            \"calcium\": \"1.8\",\n            \"magnesium\": \"1.1\"\n            },\n            \"micro\": {\n            \"iron\": \"1.1\",\n            \"manganese\": \"1.7\",\n            \"copper\": \"1.9\",\n            \"boron\": \"1.3\",\n            \"molybdenum\": \"3.1\",\n            \"chlorine\": \"1.01\"\n            }\n        },\n        \"area\": \"400\",\n        \"humidity\": \"40\",\n        \"temp\": \"13\",\n        \"_id\": \"58ce45caaffc177a22c76629\"\n     }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/land.js",
    "groupTitle": "Land"
  },
  {
    "description": "<p>Get lands Collection by Pagination. Use below parameters to query with pagination :- page=&lt;RESULTS_PAGE&gt; and per_page=&lt;RESULTS_PER_PAGE&gt;.</p>",
    "type": "get",
    "url": "/lands/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE>",
    "title": "lands Collection by Pagination",
    "name": "Get_lands_Collection",
    "group": "land",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "land_name",
            "description": "<p>lands landname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>lands Password</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "realem",
            "description": "<p>lands Group</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>lands First Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>lands last_name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>lands email</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "date_of_birth",
            "description": "<p>lands Date of Birth</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>lands City</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "country",
            "description": "<p>lands Country</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "mobile",
            "description": "<p>lands Mobile</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "gender",
            "description": "<p>lands Gender</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "land_type",
            "description": "<p>land Type , Like Staff, customer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n     {\n  \"_id\": \"589fb45b48baee02dc7c713b\",\n     \"land_name\": \"Tsegaw\",\n  \"realm\": \"land\",\n   \"profile\": {\n    \"_id\": \"589fb45b48baee02dc7c713c\",\n    \"land\": \"589fb45b48baee02dc7c713b\",\n    \"first_name\": \"Tsegaw\",\n    \"last_name\": \"Tsegaw\",\n    \"email\": \"test@gmail.com\",\n  \n  },\n  \"last_modified\": \"2017-02-12T01:03:23.983Z\",\n  \"status\": \"active\",\n  \"role\": \"staff\"\n}\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/land.js",
    "groupTitle": "land"
  }
] });
