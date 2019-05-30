package base; /**
 * Created by @Smita K on 29/05/2019.
 */
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
public class TestBase {

    public static WebDriver driver;
    public static Properties prop;


    public TestBase(){
        try {
            prop = new Properties();
            prop.load(getClass().getClassLoader().getResourceAsStream("config.properties"));
             } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public static void initialization(){
        String browserName = prop.getProperty("browser");

        if(browserName.equals("chrome")){
            System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/chromedriver.exe");
            driver = new ChromeDriver();
                }

        driver.manage().window().maximize();
        driver.get("https://www.service.nsw.gov.au/");
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.get(prop.getProperty("url"));
    }

    public static void closewindow(){
        driver.quit();
    }


}

