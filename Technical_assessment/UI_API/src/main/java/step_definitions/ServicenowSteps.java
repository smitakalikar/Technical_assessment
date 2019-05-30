package step_definitions;

/**
 * Created by Smita K on 29/05/2019.
 */

import base.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.hamcrest.CoreMatchers;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class ServicenowSteps extends TestBase {

    WebElement searchbox;
    WebElement searchbtn;
    WebElement locateusbtn;
    WebElement searchpostcode;
    WebElement submitpostcode;
    WebElement searchpage;

    public ServicenowSteps(){
        super();
    }


    @Given("^user navigates to the service now home page$")
    public void user_navigates_to_the_service_now_home_page()  {
        initialization();
    }

    @When("^user searches for (.*) on the home page$")
    public void user_searches_for_Apply_for_a_number_plate_on_the_home_page(String searchtxt) {

        searchbox = driver.findElement(By.xpath("//*[@id=\"edit-contains\"]") );
        searchbox.sendKeys(searchtxt);
        searchbtn=driver.findElement(By.xpath("//*[@id=\"edit-submit-site-search\"]"));
        searchbtn.click();
    }

    @When("^clicks the(.*) page$")
    public void clicks_the_searchmsg_page(String pagename)  {
        searchpage = driver.findElement(By.xpath("//a[@href='/transaction/apply-number-plate']"));
        searchpage.click();
    }

    @Then("^user should be landed on the appropriate page$")
    public void user_should_be_landed_on_the_appropriate_page()  {
        String current_url=driver.getCurrentUrl();
        Assert.assertThat(current_url, CoreMatchers.containsString("https://www.service.nsw.gov.au/transaction/apply-number-plate"));
        closewindow();
    }

    @Given("^clicks on Locate us link$")
    public void clicks_on_Locate_us_link()  {
        locateusbtn= driver.findElement(By.linkText("Locate us"));
        locateusbtn.click();
    }

    @When("^user enters Sydney (.*)$")
    public void user_enters_Sydney(String location)  {

        searchpostcode=driver.findElement(By.id("locatorTextSearch"));
        searchpostcode.sendKeys(location);
        submitpostcode=driver.findElement(By.xpath("//*[@id=\"locator\"]/div/div/form/div/div[2]/button"));
        submitpostcode.click();
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }

    @Then("^It should be available service centre named as (.*)$")
    public void it_should_be_available_service_centre_named_list(String Service_centre )  {
        WebElement Service_location = driver.findElement(By.xpath("//a[@class='location__title'][contains(text(),'"+Service_centre+"')]"));
        String service_centre=Service_location.getText();
        Assert.assertThat(service_centre, CoreMatchers.containsString(Service_centre));
        closewindow();
    }


}
