$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/JobSearch.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Job Search",
  "description": "",
  "id": "job-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@srikanya4"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Check the advanced search happy Path",
  "description": "",
  "id": "job-search;check-the-advanced-search-happy-path",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "JobSeeker is on landing page and open advance search",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "He search for a job with following details \"\u003cJobTitle\u003e\", \"\u003cLocation\u003e\", \"\u003cDistance\u003e\", \"\u003cSalaryMin\u003e\",\"\u003cSalaryMax\u003e\",\"\u003cSalarytype\u003e\",\"\u003cJobtype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Search for the jobs",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "He should receive the matching jobs",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "job-search;check-the-advanced-search-happy-path;",
  "rows": [
    {
      "cells": [
        "JobTitle",
        "Location",
        "Distance",
        "SalaryMin",
        "SalaryMax",
        "Salarytype",
        "Jobtype"
      ],
      "line": 13,
      "id": "job-search;check-the-advanced-search-happy-path;;1"
    },
    {
      "cells": [
        "Automation Tester",
        "London",
        "up to 10 miles",
        "20000",
        "50000",
        "Per annum",
        "Any"
      ],
      "line": 14,
      "id": "job-search;check-the-advanced-search-happy-path;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10495589500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Check the advanced search happy Path",
  "description": "",
  "id": "job-search;check-the-advanced-search-happy-path;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@srikanya4"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "JobSeeker is on landing page and open advance search",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "He search for a job with following details \"Automation Tester\", \"London\", \"up to 10 miles\", \"20000\",\"50000\",\"Per annum\",\"Any\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Search for the jobs",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "He should receive the matching jobs",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.jobseeker_is_on_landing_page()"
});
formatter.result({
  "duration": 1594890100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 44
    },
    {
      "val": "London",
      "offset": 65
    },
    {
      "val": "up to 10 miles",
      "offset": 75
    },
    {
      "val": "20000",
      "offset": 93
    },
    {
      "val": "50000",
      "offset": 101
    },
    {
      "val": "Per annum",
      "offset": 109
    },
    {
      "val": "Any",
      "offset": 121
    }
  ],
  "location": "Stepdefs.he_search_for_a_job_with_following_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2393922400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.search_for_the_jobs()"
});
formatter.result({
  "duration": 1182779000,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1053, 382). Other element would receive the click: \u003ciframe src\u003d\"https://gdpr-consent-tool.privacymanager.io/1/index.html#/notice\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"min-height: 220px; max-height: 350px; width: 100%; left: 0px; bottom: 0px; position: fixed; display: block; z-index: 2147483647; height: 219px; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d86.0.4240.111)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-A4QDKH7\u0027, ip: \u0027192.168.0.83\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Srikanya\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:65275}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2cb4153f19f346ced83d3159e49b7dc1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat pages.HomePage.clickFindJobs(HomePage.java:72)\r\n\tat stepDefinitions.Stepdefs.search_for_the_jobs(Stepdefs.java:61)\r\n\tat ✽.And Search for the jobs(src/test/java/features/JobSearch.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefs.he_should_receive_the_matching_jobs()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1582297200,
  "status": "passed"
});
});