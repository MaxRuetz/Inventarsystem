define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/item/allItems",
    "title": "Request all Item information",
    "name": "GetAllItem",
    "group": "Public_Item",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ [\n  \"Id\": 1,\n  \"Name\": \"Phillips screwdriver\",\n  \"State\": 1,\n  \"Category\": \"srewdriver\",\n  \"BuildType\": NULL,\n  \"Saleprice\": 19.99,\n  \"StorageValue\": \"NULL\",\n  \"material_id\": 1               // material_id = 1 -> Device; material_id != 1 -> Material\n  ],\n  [\"Id\": 2,\n  \"Name\": \"Claw hammer\",\n  \"State\": 1,\n  \"Category\": \"Handtools\",\n  \"BuildType\": null,\n  \"Saleprice\": 5,\n  \"StorageValue\": null,\n  \"material_id\": 1\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotFound",
            "description": "<p>The id of the Item was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Public_Item"
  },
  {
    "type": "get",
    "url": "/api/v1/item/details/{id}",
    "title": "Request a single Item Detail information",
    "name": "GetDetailSingleItem",
    "group": "Public_Item",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n  [\n         \"Id\": 1,\n         \"Name\": \"Phillips screwdriver\",\n         \"State\": 1,\n         \"Category\": \"screwdriver\",\n         \"BuildType\": null,\n         \"Description\": \"description screwdriver\",\n         \"Saleprice\": 3,\n         \"UoM\": null,\n         \"UoM_short\": null,\n         \"StorageValue\": null,\n         \"material.id\": 1\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotFound",
            "description": "<p>The id of the Item was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Public_Item"
  },
  {
    "type": "get",
    "url": "/api/v1/item/allIds",
    "title": "Request all Item IDs",
    "name": "GetItemIDs",
    "group": "Public_Item",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n         1,\n         2,\n         3,\n         4,\n         5,\n         6,\n         7,\n         8,\n         9,\n         10\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotFound",
            "description": "<p>The id of the Item was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Public_Item"
  },
  {
    "type": "get",
    "url": "/api/v1/item/{id}",
    "title": "Request a single Item information",
    "name": "GetSingleItem",
    "group": "Public_Item",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n  [\n         \"Id\": 1,\n         \"Name\": \"Phillips screwdriver\",\n         \"State\": 1,\n         \"Category\": \"screwdriver\",\n         \"BuildType\": null,\n         \"Saleprice\": 3,\n         \"StorageValue\": null\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotFound",
            "description": "<p>The id of the Item was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Public_Item"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/category/create",
    "title": "Create a Category",
    "name": "CreateCategory",
    "group": "Restricted_Category",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"name\": \"House M\",\n        \"before\": 1,\n        \"description\": \"This is Description\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Enter Place</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "before",
            "description": "<p>Enter the BeforeID</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "description",
            "description": "<p>Enter the Description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  category_Id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlaceNotUpdated",
            "description": "<p>Place could not be updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Category"
  },
  {
    "type": "get",
    "url": "/api/v1/restricted/category/allCategory",
    "title": "Request all Categories",
    "name": "GetAllCategory",
    "group": "Restricted_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n          [\n            \"id\": 1,\n            \"Name\": \"Handtools\",\n            \"Description\": \"Tools you can use with one hand\",\n            \"BeforeID\": null,\n            \"created_at\": null,\n            \"updated_at\": null\n          ],\n          [\n            \"id\": 2,\n            \"Name\": \"screwdriver\",\n            \"Description\": \"Tool to srew soemthing in or out\",\n            \"BeforeID\": 1,\n            \"created_at\": null,\n            \"updated_at\": null\n          ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryNotFound",
            "description": "<p>No category were not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Category"
  },
  {
    "type": "get",
    "url": "/api/v1/restricted/category/{id}",
    "title": "Request single Category information",
    "name": "GetSingleCategory",
    "group": "Restricted_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n          [\n            \"Name\": \"Handtools\",\n            \"Description\": \"Tools you can use with one hand\",\n            \"BeforeID\": null,\n            \"created_at\": null,\n            \"updated_at\": null\n          ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryNotFound",
            "description": "<p>No category were not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Category"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/category/update/{id}",
    "title": "Update a Category",
    "name": "UpdateCategory",
    "group": "Restricted_Category",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"name\": \"House M\",\n        \"before\": 1,\n        \"description\": \"This is Description\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Enter Place</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "before",
            "description": "<p>Enter the BeforeID</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "description",
            "description": "<p>Enter the Description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  item_id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryNotUpdated",
            "description": "<p>Category could not be updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Category"
  },
  {
    "type": "get",
    "url": "/api/v1/restricted/comment/{id}",
    "title": "Request Comment",
    "name": "GetComment",
    "group": "Restricted_Comment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        [\n            \"Comment\": \"2\",\n            \"created_at\": \"2016-06-07 13:59:31\",\n            \"updated_at\": \"2016-06-08 13:59:31\"\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the Comment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Comment"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/comment/update/{id}",
    "title": "Update a Comment",
    "name": "UpdateComment",
    "group": "Restricted_Comment",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"comment\": \"This is a comment\",\n        \"created_at\": \"2016-06-07 13:59:31\",\n        \"updated_at\": \"2016-06-08 13:59:31\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Comment",
            "description": "<p>Enter the Comment</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "state",
            "description": "<p>Enter the state</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotUpdated",
            "description": "<p>Item could not be updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Comment"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/event/8",
    "title": "Set Device as defect",
    "name": "EventDeviceDefective",
    "group": "Restricted_Event",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"itemid\": 4,\n        \"comment\": \"This is a comment\",\n        \"createdbyid\": 3\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "itemid",
            "description": "<p>Enter the item id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Enter the comment</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "createdbyid",
            "description": "<p>Enter the id of the creator</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  item_id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotCreated",
            "description": "<p>Event could not be created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Event"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/event/9",
    "title": "Marks Item as lost",
    "name": "EventItemLost",
    "group": "Restricted_Event",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"itemid\": 4,\n        \"comment\": 200,\n        \"createdbyid\": 3\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "itemid",
            "description": "<p>Enter the item id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Enter the comment</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "createdbyid",
            "description": "<p>Enter the id of the creator</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  item_id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotCreated",
            "description": "<p>Event could not be created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Event"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/event/7",
    "title": "Refill a Material",
    "name": "EventRefillMaterial",
    "group": "Restricted_Event",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"itemid\": 4,\n        \"amount\": 200,\n        \"createdbyid\": 3\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "itemid",
            "description": "<p>Enter the item id</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "amount",
            "description": "<p>Enter the amount</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "createdbyid",
            "description": "<p>Enter the id of the creator</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  item_id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotCreated",
            "description": "<p>Event could not be created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Event"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/event/10",
    "title": "Sell a Material",
    "name": "EventSellMaterial",
    "group": "Restricted_Event",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"itemid\": 4,\n        \"price\": 5,\n        \"amount\": 200,\n        \"createdbyid\": 3\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "itemid",
            "description": "<p>Enter the item id</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "price",
            "description": "<p>Enter the price</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Enter the comment</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "createdbyid",
            "description": "<p>Enter the id of the creator</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  item_id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotCreated",
            "description": "<p>Event could not be created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Event"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/event/6",
    "title": "Use a Material",
    "name": "EventUseMaterial",
    "group": "Restricted_Event",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"itemid\": 4,\n        \"amount\": 200,\n        \"createdbyid\": 3\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "itemid",
            "description": "<p>Enter the item id</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "amount",
            "description": "<p>Enter the amount</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "createdbyid",
            "description": "<p>Enter the id of the creator</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  item_id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotCreated",
            "description": "<p>Event could not be created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Event"
  },
  {
    "type": "get",
    "url": "/api/v1/restricted/event/AllEvents",
    "title": "Request all Events",
    "name": "GetEvent",
    "group": "Restricted_Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n          [\n            \"ID\": 1,\n            \"Name\": \"CreateItem\",\n            \"Description\": \"Create a new Item\",\n            \"EventValue\": null,\n            \"CreatedByID\": 1\n          ],\n          [\n            \"ID\": 2,\n            \"Name\": \"DeactivateItem\",\n            \"Description\": \"Deactivate an item\",\n            \"EventValue\": null,\n            \"CreatedByID\": 1\n          ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>No Event were not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Event"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/device/create",
    "title": "Create a new Device",
    "name": "CreateDevice",
    "group": "Restricted_Item",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"name\": \"srewdriver\",\n     \"state\": 1,\n     \"createdbyid\": 1,\n     \"place\": 2,\n     \"category\": 3,\n     \"description\": \"Description srewdrivee\",\n     \"comment\": \"Comment Srewdriver\",\n     \"visible\": 1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Enter the name</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "state",
            "description": "<p>Enter the state</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "createdbyid",
            "description": "<p>Enter the ID of the Creator</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "place",
            "description": "<p>Enter the ID of the start place</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "category",
            "description": "<p>Enter the ID of the start category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Enter a description</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "comment",
            "description": "<p>Enter a attachment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "visible",
            "description": "<p>1 = visible 0 = not visible in the public list</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  item_id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotCreated",
            "description": "<p>Item could not be created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Item"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/material/create",
    "title": "Create a new Material",
    "name": "CreateMateral",
    "group": "Restricted_Item",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"name\":\"screws\",\n        \"state\": 1,\n        \"description\": \"description screwdriver\",\n        \"buildtype\": \"cross\",\n        \"visible\": 1,\n        \"createdbyid\": 1,\n        \"place\": 5,\n        \"category\": 2,\n        \"saleprice\": 3.50,\n        \"uom\": \"Kilogram\",\n        \"uom_short\": \"kg\",\n        \"storagevalue\": 300,\n        \"criticalstoragevalue\": 200,\n        \"comment\": \"Created a srew\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Enter the name</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "state",
            "description": "<p>Enter the state</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Enter a description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "buildtype",
            "description": "<p>Enter a buildtype</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "visible",
            "description": "<p>1 = visible 0 = not visible in the public list</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "createdbyid",
            "description": "<p>Enter the ID of the Creator</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "place",
            "description": "<p>Enter the ID of the start place</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "category",
            "description": "<p>Enter the ID of the start category</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": true,
            "field": "saleprice",
            "description": "<p>Enter a saleprice</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "uom",
            "description": "<p>Enter a unit of measurement</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "uom_short",
            "description": "<p>Enter a unit of measurement (short)</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "storagevalue",
            "description": "<p>Enter a storagevalue</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": true,
            "field": "criticalstoragevalue",
            "description": "<p>Enter a unit of measurement</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Enter a comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  item_id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotCreated",
            "description": "<p>Item could not be created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Item"
  },
  {
    "type": "delete",
    "url": "/api/v1/restricted/item/deactivate/{id}",
    "title": "Deacticate an Item",
    "name": "DeacticateItem",
    "group": "Restricted_Item",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"createdbyid\": 1,\n        \"comment\": \"Created a srew\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Enter a comment</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "createdbyid",
            "description": "<p>Enter the ID of the creator</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "Token",
            "optional": false,
            "field": "Authoriziation",
            "description": "<p>Only logged in users can deactivate items</p>"
          }
        ]
      }
    },
    "description": "<p>This function can delete an material or device (item). You only have to enter the item id in the URL.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotDeactivated",
            "description": "<p>The Item could not be deactivated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Item"
  },
  {
    "type": "get",
    "url": "/api/v1/restricted/item/allItems",
    "title": "Request all Item information",
    "name": "GetAllItem",
    "group": "Restricted_Item",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      [\n        \"Id\": 1,\n        \"Name\": \"Phillips screwdriver\",\n        \"State\": 1,\n        \"Category\": \"screwdriver\",\n        \"BuildType\": null,\n        \"StorageValue\": null,\n        \"CriticalStorageValue\": null,\n        \"Place\": \"Locker 5\",\n        \"material_id\": 1\n        \"PublicVisible\": 1,\n        \"Deactivated\": 0,\n        \"Created_at\": \"2016-04-03\",\n        \"Updated_at\": \"2016-04-04\",\n        \"Saleprice\": 3.50\n      ],\n      [\n        \"Id\": 2,\n        \"Name\": \"Claw hammer\",\n        \"State\": 1,\n        \"Category\": \"Handtools\",\n        \"BuildType\": null,\n        \"StorageValue\": null,\n        \"CriticalStorageValue\": null,\n        \"Place\": \"Locker 5\",\n        \"material_id\": 1,\n        \"PublicVisible\": 1,\n        \"Deactivated\": 0,\n        \"Created_at\": \"2016-04-03\",\n        \"Updated_at\": \"2016-04-04\",\n        \"Saleprice\": 3.50\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotFound",
            "description": "<p>The id of the Item was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Item"
  },
  {
    "type": "get",
    "url": "/api/v1/restricted/item/allIds",
    "title": "Request all Item IDs",
    "name": "GetAllItemIDs",
    "group": "Restricted_Item",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        1,\n        2,\n        3,\n        4,\n        5,\n        6,\n        7,\n        8,\n        9,\n        10\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotFound",
            "description": "<p>The id of the Item was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Item"
  },
  {
    "type": "get",
    "url": "/api/v1/restricted/item/details/{id}",
    "title": "Request single Item Detailinformation",
    "name": "GetDetailSingleItem",
    "group": "Restricted_Item",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        [\n            \"Id\": 1,\n            \"Name\": \"Phillips screwdriver\",\n            \"State\": 1,\n            \"Place\": \"Locker 5\",\n            \"Category\": \"screwdriver\",\n            \"BuildType\": null,\n            \"Description\": \"description screwdriver\",\n            \"UoM\": null,\n            \"UoM_short\": null,\n            \"PublicVisible\": 1,\n            \"Deactivated\": 0,\n            \"StorageValue\": null,\n            \"CriticalStorageValue\": null,\n            \"Created_at\": \"2016-04-03\",\n            \"Updated_at\": \"2016-04-03\",\n            \"Saleprice\": 3.50\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotFound",
            "description": "<p>The id of the Item was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Item"
  },
  {
    "type": "get",
    "url": "/api/v1/restricted/item/getHistory/{id}",
    "title": "Request history information",
    "name": "GetHistory",
    "group": "Restricted_Item",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        [\n            \"CommentID\": 1,\n            \"CreatedByID\": 1,\n            \"Event_ID\": 1,\n            \"created_at\": null\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotFound",
            "description": "<p>The id of the Item was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Item"
  },
  {
    "type": "get",
    "url": "/api/v1/restricted/item/{id}",
    "title": "Request single Item information",
    "name": "GetSingleItem",
    "group": "Restricted_Item",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        [\n        \"Id\": 1,\n        \"Name\": \"Phillips screwdriver\",\n        \"State\": 1,\n        \"Category\": \"screwdriver\",\n        \"BuildType\": null,\n        \"StorageValue\": null,\n        \"CriticalStorageValue\": null,\n        \"Place\": \"Locker 5\",\n        \"PublicVisible\": 1,\n        \"Deactivated\": 0,\n        \"Created_at\": \"2016-04-03\",\n        \"Updated_at\": \"2016-04-03\",\n        \"Saleprice\": 3.50\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotFound",
            "description": "<p>The id of the Item was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Item"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/device/update/{id}",
    "title": "Update a Device",
    "name": "UpdateDevice",
    "group": "Restricted_Item",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"name\": \"Phillips screwdriver\",\n        \"state\": 0,\n        \"description\"=> \"description screwdriver\",\n        \"place\": 5,\n        \"category\": 2,\n        \"comment\": \"Updated a Srewdriver\",\n        \"createdbyid\" : 1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Enter the name</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "state",
            "description": "<p>Enter a state</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Enter a description</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "createdbyid",
            "description": "<p>Enter the ID of the Creator</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "place",
            "description": "<p>Enter the ID of the start place</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "category",
            "description": "<p>Enter the ID of the start category</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Enter a comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  item_id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotUpdated",
            "description": "<p>Item could not be updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Item"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/material/update/{id}",
    "title": "Update a Material",
    "name": "UpdateMaterial",
    "group": "Restricted_Item",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"name\":\"screws\",\n        \"state\": 1,\n        \"description\": \"description screwdriver\",\n        \"buildtype\": \"cross\",\n        \"visible\": 1,\n        \"createdbyid\": 1,\n        \"place\": 5,\n        \"category\": 2,\n        \"saleprice\": 3.50,\n        \"uom\": \"Kilogram\",\n        \"uom_short\": \"kg\",\n        \"criticalstoragevalue\": 200,\n        \"comment\": \"Created a srew\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Enter the name</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "state",
            "description": "<p>Enter the state</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Enter a description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "buildtype",
            "description": "<p>Enter a buildtype</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "visible",
            "description": "<p>1 = visible 0 = not visible in the public list</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "createdbyid",
            "description": "<p>Enter the ID of the Creator</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "place",
            "description": "<p>Enter the ID of the start place</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "category",
            "description": "<p>Enter the ID of the start category</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": true,
            "field": "saleprice",
            "description": "<p>Enter a saleprice</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "uom",
            "description": "<p>Enter a unit of measurement</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "uom_short",
            "description": "<p>Enter a unit of measurement (short)</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": true,
            "field": "criticalstoragevalue",
            "description": "<p>Enter a critical storagevalue</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Enter a comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  item_id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ItemNotUpdated",
            "description": "<p>Item could not be updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Item"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/place/create",
    "title": "Create a Place",
    "name": "CreatePlace",
    "group": "Restricted_Place",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"name\": \"House M\",\n        \"before\": 1,\n        \"createdbyid\": 2\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Enter Place</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "Before",
            "description": "<p>Enter the BeforeID</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "createdbyid",
            "description": "<p>Enter the ID of the creator</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  place_id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlaceNotCreated",
            "description": "<p>Place could not be created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Place"
  },
  {
    "type": "get",
    "url": "/api/v1/restricted/place/allPlace",
    "title": "Request all Places",
    "name": "GetAllPlaces",
    "group": "Restricted_Place",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      [\n        \"id\": 1,\n        \"Name\": \"House M\",\n        \"BeforeID\": null,\n        \"CreatedByID\": 4,\n        \"created_at\": null,\n        \"updated_at\": null\n      ],\n      [\n        \"id\": 2,\n        \"Name\": \"House L\",\n        \"BeforeID\": null,\n        \"CreatedByID\": 3,\n        \"created_at\": \"2016-06-07 13:59:31\",\n        \"updated_at\": \"2016-06-07 13:59:31\"\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlaceNotFound",
            "description": "<p>No places were not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Place"
  },
  {
    "type": "get",
    "url": "/api/v1/restricted/place/{id}",
    "title": "Request all Places",
    "name": "GetAllPlaces",
    "group": "Restricted_Place",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object form the Item with a special Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n          [\n            \"Name\": \"House M\",\n            \"CreatedByID\": 4,\n            \"BeforeID\": null,\n            \"created_at\": \"2016-06-07 13:59:31\",\n            \"updated_at\": \"2016-06-07 13:59:31\"\n          ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlaceNotFound",
            "description": "<p>No places were not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Place"
  },
  {
    "type": "post",
    "url": "/api/v1/restricted/place/update/{id}",
    "title": "Update a Place",
    "name": "UpdatePlace",
    "group": "Restricted_Place",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"name\": \"House M\",\n        \"before\": 1,\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Enter Place</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "before",
            "description": "<p>Enter the BeforeID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "JSON",
            "description": "<p>Object with a success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  item_id;\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlaceNotUpdated",
            "description": "<p>Place could not be updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"42\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/Max/Desktop/Api_ordner/api/routes.php",
    "groupTitle": "Restricted_Place"
  }
] });
