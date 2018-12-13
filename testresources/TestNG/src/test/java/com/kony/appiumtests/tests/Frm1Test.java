/**************************************************************
Project Name			:	Test Automation Sample
Package Name			:	com.kony.appiumtests.Test
Class Name				:	FrmtwoTest
Purpose of the Class	:	Validating the Functionalities of Form Two which
                            consists of Date Picker, CheckBox,Grid Selection.  

 **************************************************************/
package com.kony.appiumtests.tests;

import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.kony.appiumtests.forms.Frm1;
import com.kony.appiumtests.forms.FrmLogin;

public class Frm1Test extends BaseTest {

	private final String CORRECT_USER_NAME = "admin";
	private final String CORRECT_PASSWORD = "123456";

	private Frm1 frmone;
	private FrmLogin frmHome;

	/**
	 * Creates FrmHome page,Frmtwo page
	 * 
	 * @Override we are overriding the abstract methods (setUpPage()), and and
	 *           customizing the implementation in the inherited classes.
	 * 
	 * @Test annotation is used for writing the test scripts. We can execute the
	 *       required tests only with the help of Group test mechanism, which is
	 *       offered by testNG.
	 * 
	 */

	@BeforeTest
	@Override
	public void setUpPage() {
		frmHome = new FrmLogin(driver);

		try {
			if (frmHome.isDisplayed()) {
				frmHome.loginIn(CORRECT_USER_NAME, CORRECT_PASSWORD);
				Thread.sleep(5000);
				//frmHome.lbl_frm1.click();
				
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		frmone = new Frm1(driver);
	}

	@BeforeClass
	@Override
	public void navigateTo(){
		
	}

	@Test
	public void testPersonalLoan() throws InterruptedException {

			System.out.println("Starts Personal Loan Test");
			frmone.checkboxSelection();
			System.out.println("Ends Personal Loan Test");
		
	}
	@Test
	public void testVehicleLoan() throws InterruptedException {

			System.out.println("Starts Vehicle Loan Test");
			frmone.vehicleLoanselection();
			System.out.println("Ends Vehicle Loan Test");
		
	}
	
	@Test
	public void testCreditCard() throws InterruptedException {

			System.out.println("Starts Vehicle Loan Test");
			frmone.creditCardsselection();
			System.out.println("Ends Vehicle Loan Test");
		
	}
	
	
	@Test
	public void testMortagageLoan() throws InterruptedException{

			System.out.println("Starts testMortagageLoan");
			frmone.mortgageLoanselection();
			System.out.println("Ends testMortagageLoan");
		
	}
}
