/**************************************************************
Project Name			:	Test Automation Sample
Package Name			:	com.kony.appiumtests.Forms
Class Name				:	Login
Purpose of the Class	:	To maintain the repository for the locators
 **************************************************************/

package com.kony.appiumtests.forms;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSFindBy;
import io.appium.java_client.remote.HideKeyboardStrategy;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;

public class FrmLogin extends BaseForm {

	/**
	 * The page structure is being used within this test in order to separate
	 * the page actions from the tests
	 * 
	 * Locators are saved with the help of @FindBy annotation, and can be used
	 * in the corresponding tests by extending the FrmHome class.
	 * 
	 * LoginIn() method is used to Login into the application. we can pass the
	 * user name, and password.
	 */

	public FrmLogin(RemoteWebDriver driver) {
		super(driver); // super() is used to invoke immediate parent class
						// constructor.
	}
	
	@AndroidFindBy(xpath = "//android.widget.Button[@text='Cancel' or @text='cancel' or @resource-id='android:id/button2' or @text='CANCEL']" )
	public WebElement cancel;

	@FindBy(className = "android.view.ViewGroup")
	public WebElement btnLogin;

	public void loginIn(String userName, String password) throws InterruptedException {
		if(isDisplayed()){
			System.out.println("In Login Method");
			this.cancel.click();
		
		Thread.sleep(5000);
		}
		this.btnLogin.click();
	}

	/**
	 * isDisplayed() is boolean method i.e, it returns true or false. Basically
	 * this method is used to find whether the element is being displayed.
	 */
	public boolean isDisplayed() throws InterruptedException{
		Thread.sleep(40000);
		//return (this.lbl_SignIn.isDisplayed() && this.btnLogin.isDisplayed());
		return (this.cancel.isDisplayed());
	}
}
