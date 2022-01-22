Feature: As an amazon.com customer, I want to test the landing page

@landingPage @SignIn
Scenario: Customer is displayed with sign in page
Given I am on the amazon.com website
When I hover over Sign In text
Then I should see Sign In Button
When I click on Sign In Button
Then I should see login screen

@landingPage @search @ProductSearch @thirdtag
Scenario: Customer searches a product
Given I am on the amazon.com website
When I enter iphone in the search box
And I click create account button
Then I should see results

@landingPage @search @SellerSearch @thirdtag
Scenario: Customer searches a seller
Given I am on the amazon.com seller website
When I enter bestseller in the search box
And I click Search icon
Then I should see results

@landingPage @LowPricedSection @thirdtag
Scenario: Cusomter scrolls down to low priced subscriptions section
Given I am on amazon.com website
When I scroll down to the bottom
Then I should see Low Priced Subscriptions

@landingPage @Sections @thirdtag
Scenario outline: Customer scrolls down to mutliple Sections
Given I am on amazon.com website
When I scroll down to the '<Section Name>' section
Then I should see '<Section product>' products

Examples:
Section Name                            | Section product
K-12 Classroom management printables    | printable
Valentine's Day gift ideas              | gift
low priced subscriptions                | low price
Must-see fashion                        | fashion
