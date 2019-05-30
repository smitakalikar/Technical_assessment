package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Assert;

/**
 * Created by Smita K on 29/05/2019.
 */
public class WeatherAPISteps {

    @Given("^Weather API is invoked$")
    public void weather_API_is_invoked()  {
       Response resp= RestAssured.get("https://api.weatherbit.io/v2.0/current?lat=40.730610&lon=-73.935242&key=52137f3b568b43ebb0e9683ae80edd55");

    }

    @Then("^Response Should contain State Code$")
    public void response_Should_contain_State_Code()  {
        Response resp= RestAssured.get("https://api.weatherbit.io/v2.0/current?lat=40.730610&lon=-73.935242&key=52137f3b568b43ebb0e9683ae80edd55");
        Assert.assertEquals(200, resp.getStatusCode());
        Assert.assertNotNull(resp.getBody());
        Assert.assertTrue(resp.asString().contains("\"state_code\":\"NY\""));
    }

}
