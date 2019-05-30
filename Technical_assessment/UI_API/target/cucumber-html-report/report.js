$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("locateservicecentre.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality of service centre",
  "description": "",
  "id": "search-functionality-of-service-centre",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Appy for number plate",
  "description": "",
  "id": "search-functionality-of-service-centre;appy-for-number-plate",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to the service now home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user searches for \u003csearchtxt\u003e on the home page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks the \u003cpageName\u003e page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be landed on the appropriate page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "search-functionality-of-service-centre;appy-for-number-plate;",
  "rows": [
    {
      "cells": [
        "searchtxt",
        "pageName"
      ],
      "line": 10,
      "id": "search-functionality-of-service-centre;appy-for-number-plate;;1"
    },
    {
      "cells": [
        "Apply for a number plate",
        "apply-number-plate"
      ],
      "line": 11,
      "id": "search-functionality-of-service-centre;appy-for-number-plate;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Appy for number plate",
  "description": "",
  "id": "search-functionality-of-service-centre;appy-for-number-plate;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to the service now home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user searches for Apply for a number plate on the home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks the apply-number-plate page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be landed on the appropriate page",
  "keyword": "Then "
});
formatter.match({
  "location": "ServicenowSteps.user_navigates_to_the_service_now_home_page()"
});
formatter.result({
  "duration": 23812318999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apply for a number plate",
      "offset": 18
    }
  ],
  "location": "ServicenowSteps.user_searches_for_Apply_for_a_number_plate_on_the_home_page(String)"
});
formatter.result({
  "duration": 2854864959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " apply-number-plate",
      "offset": 10
    }
  ],
  "location": "ServicenowSteps.clicks_the_searchmsg_page(String)"
});
formatter.result({
  "duration": 4241938265,
  "status": "passed"
});
formatter.match({
  "location": "ServicenowSteps.user_should_be_landed_on_the_appropriate_page()"
});
formatter.result({
  "duration": 15694447,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Search the service centre",
  "description": "",
  "id": "search-functionality-of-service-centre;search-the-service-centre",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user navigates to the service now home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "clicks on Locate us link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters \u003clocation\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "It should be available service centre named as \u003cservice_center\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "search-functionality-of-service-centre;search-the-service-centre;",
  "rows": [
    {
      "cells": [
        "location",
        "service_center"
      ],
      "line": 21,
      "id": "search-functionality-of-service-centre;search-the-service-centre;;1"
    },
    {
      "cells": [
        "Sydney 2000",
        "Marrickville Service Centre"
      ],
      "line": 22,
      "id": "search-functionality-of-service-centre;search-the-service-centre;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Search the service centre",
  "description": "",
  "id": "search-functionality-of-service-centre;search-the-service-centre;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user navigates to the service now home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "clicks on Locate us link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters Sydney 2000",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "It should be available service centre named as Marrickville Service Centre",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ServicenowSteps.user_navigates_to_the_service_now_home_page()"
});
formatter.result({
  "duration": 20173469044,
  "status": "passed"
});
formatter.match({
  "location": "ServicenowSteps.clicks_on_Locate_us_link()"
});
formatter.result({
  "duration": 11593405524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 19
    }
  ],
  "location": "ServicenowSteps.user_enters_Sydney(String)"
});
formatter.result({
  "duration": 273940108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marrickville Service Centre",
      "offset": 47
    }
  ],
  "location": "ServicenowSteps.it_should_be_available_service_centre_named_list(String)"
});
formatter.result({
  "duration": 1075870589,
  "status": "passed"
});
formatter.uri("weatherAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Weather API Test",
  "description": "",
  "id": "weather-api-test",
  "keyword": "Feature"
});
});