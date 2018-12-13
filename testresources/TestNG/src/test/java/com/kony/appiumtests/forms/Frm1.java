/**************************************************************
Project Name			:	Test Automation Sample
Package Name			:	com.kony.appiumtests.Forms
Class Name				:	Gridselection
Purpose of the Class	:	To maintain the repository for the locators
 **************************************************************/

package com.kony.appiumtests.forms;

import java.util.List;

import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSFindBy;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;

/**
 * extends is the keyword used to inherit the properties of a class. In this we
 * are using extends to inherit the properties from BaseForm class.
 */

public class Frm1 extends BaseForm {

	public Frm1(RemoteWebDriver driver) {
		super(driver); // super() is used to invoke immediate parent class
						// constructor.
	}
	
	@iOSFindBy(className = "UIASwitch")
	@AndroidFindBy(className = "android.view.ViewGroup")
	public List<WebElement> checkBoxGroup;

	public WebElement first_checkbox;

	public WebElement second_checkbox;

	public WebElement third_checkbox;
	
	public WebElement fourth_checkbox;

	
	public void checkboxSelection() throws InterruptedException{
		first_checkbox = checkBoxGroup.get(0);
		this.first_checkbox.click();
		Thread.sleep(5000);
	}

	public void vehicleLoanselection() throws InterruptedException{
		second_checkbox = checkBoxGroup.get(1);
		this.second_checkbox.click();
		Thread.sleep(5000);
	}

	public void creditCardsselection() throws InterruptedException{
		third_checkbox = checkBoxGroup.get(2);
		this.third_checkbox.click();
		Thread.sleep(5000);
	}

	public void mortgageLoanselection() throws InterruptedException{
		fourth_checkbox = checkBoxGroup.get(3);
		this.fourth_checkbox.click();
		Thread.sleep(5000);
	}

}
