/**
 * Created by Smita K on 29/05/2019.
 */

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/reports",
                "junit:target/reports/report.xml",
                "json:target/reports/report.json"},
        //features = "classpath:features",
        features = "src/test/features",
        format = {"pretty", "html:target/cucumber-html-report"},
        tags = {},
        glue={"step_definitions"}
)
public class RunTests {


}
