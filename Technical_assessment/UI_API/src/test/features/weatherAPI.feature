Feature: Weather API Test

Scenario: State Code Verification
  Given Weather API is invoked
  Then Response Should contain State Code

#Scenario: Get timestamp and weather
 # Given Weather API is invoked for postal code 2150
  #Then Validate TimeStamps and Weather Description