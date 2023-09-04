import { Selector } from "testcafe";

fixture ('Automate Register form')
.page("https://dev.deepthought.education/register")

test('Register', async t=>{

    await t
    .click(Selector('a').withText('Register'))
    .typeText(Selector('email'),'g.tambe2811@gmail')
    .typeText(Selector('username'),'Geet123')
    .typeText(Selector('password'),'Geetanjali@123')
    .typeText(Selector('password-confirm'),'Geetanjali@123')
    .click(Selector('.btn'))
});

    fixture`TestController.click`
    .page`https://dev.deepthought.education/register/complete`;

test('Click a check box 1', async t => {
    await t
        .click("gdpr_agree_data")
        .expect(checkbox.checked).ok()
 
});
 
 fixture`TestController.click`
    .page`https://dev.deepthought.education/register/complete`;

test('Click a check box 2', async t => {
    await t
        .click("gdpr_agree_email")
        .expect(checkbox.checked).ok()
        .click(Selector('.btn'))
        .expect(Selector('body').withExactText('page-dtpen page-dtpen-dashboard page-status-404')
        .click (Selector('logo-deep'),('//*[@logo-deep="content"]/div/p/a'))
    
});

fixture('Login user with valid username and password')
    .page("https://dev.deepthought.education/login")

    test('Login', async t=>{
  await t
  .typeText(Selector('username'),'g.tambe2811@gmail.com')
  .typeText(Selector('password'),'Geetanjali@123')
  .click(Selector('.login'))
  .expect(Selector('H5').withExactText('Welcome to DeepThought').exists).ok();
  
    })

fixture('Login user with invalid credentials')
.page("https://dev.deepthought.education/login")

test('Login', async t=>{
await t
.typeText(Selector('username'),'abc12@gmail.com')
.typeText(Selector('password'),'abc@123456')
.click(Selector('login'))
.expect(Selector('p').withExactText('Login Unsuccessful').exists).ok();

})

fixture('Validate that appropriate error messages are displayed for invalid login attempts')
.page("https://dev.deepthought.education/login")

test('Login', async t=>{
await t
.typeText(Selector('username'),'abc12@gmail.com')
.typeText(Selector('password'),'abc@123456')
.click(Selector('login'))
.expect(Selector('p').withExactText('Invalid login credentials').exists).ok();

})


fixture('On successful login, validate that the user is redirected to the dashboard screen')
.page("https://dev.deepthought.education/login")

test('Login', async t=>{
await t
.typeText(Selector('username'),'g.tambe2811@gmail.com')
.typeText(Selector('password'),'Geetanjali@123')
.click(Selector('login'))
.expect(Selector('H5').withExactText('Welcome to DeepThought').exists).ok();

})


