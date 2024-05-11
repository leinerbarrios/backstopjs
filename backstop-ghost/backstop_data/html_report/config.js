report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_ghost_Login_0_document_0_default.png",
        "test": "..\\bitmaps_test\\20240510-104714\\backstop_ghost_Login_0_document_0_default.png",
        "selector": "document",
        "fileName": "backstop_ghost_Login_0_document_0_default.png",
        "label": "Login",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://ec2-54-91-89-99.compute-1.amazonaws.com:2368/ghost/",
        "referenceUrl": "http://ec2-54-158-234-189.compute-1.amazonaws.com:2368/ghost",
        "expect": 0,
        "viewportLabel": "default",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 111,
            "height": 3
          },
          "rawMisMatchPercentage": 11.808502310984412,
          "misMatchPercentage": "11.81",
          "analysisTime": 99
        },
        "diffImage": "..\\bitmaps_test\\20240510-104714\\failed_diff_backstop_ghost_Login_0_document_0_default.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_ghost"
});