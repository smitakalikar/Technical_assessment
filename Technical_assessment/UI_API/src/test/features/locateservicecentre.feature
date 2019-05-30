Feature: Search functionality of service centre
@Search
Scenario Outline: Appy for number plate
  Given user navigates to the service now home page
  When user searches for <searchtxt> on the home page
  And clicks the <pageName> page
  Then user should be landed on the appropriate page

    Examples:
      | searchtxt               | pageName            |
      | Apply for a number plate | apply-number-plate |

  @Locat_Us
Scenario Outline: Search the service centre
  Given user navigates to the service now home page
  And clicks on Locate us link
  When user enters <location>
  Then It should be available service centre named as <service_center>

   Examples:
       |  location       | service_center              |
       | Sydney 2000      |  Marrickville Service Centre|




