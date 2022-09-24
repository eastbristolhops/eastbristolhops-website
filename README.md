<h1 align="center">
   <a href="https://eastbristolhops.co.uk/" target="_blank"><img src="static/media/repoimage.jpg" alt="logo image"/></a>
 </h1>
 
<div align="center">
    
#### Click on image for live version
</div>

A website for the community project East Bristol Hops, a collective of people who grow brewing hops in there gardens and allotments. This website is intended to act as a gateway, to connect people to the project and give the information they need to find the contact details and social media platforms.


#### Visitors to this website are searching for:
* Information on what the association is all about.
* How to join.
* Details on how to grow hops.
* Signup to newsletter.


#### The Business potentials of this website are:
* Selling advertising space to businesses with beer or hops related products.
* Become an eCommerce site selling merchandise such as clothing.


#### This Website is the best way to help them achieve these things because:
* Other websites are too cluttered and hard to navigate.
* The site has clear navigation to guide the user to designated places.
* The user can easly sign up to the newletter via a pop up modal.
* The user can easly find the social media links clearly displayed on ther footer of every page.
* The contact for is clean and clear with easy to use fields.


#### This website is:
* Uncluttered and has an intuitive process of navigation.
* Providing clean and clear infomation on all pages.

## Technology’s used will include:
<div align="center">
   <img width="45%" height:auto;" src="static/media/techlogos.jpg" alt="tech logo image"/>
 </div>
                                                                                
[HTML5](https://en.wikipedia.org/wiki/HTML5), [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets), [Bootstrap](https://getbootstrap.com/), [Javascript](https://en.wikipedia.org/wiki/JavaScript), [jQuery](https://jquery.com/), [Python3](https://www.python.org/), [VScode](https://code.visualstudio.com/), [Balsamiq Mockup 3](https://balsamiq.com/wireframes/desktop/), [Adobe Photoshop](https://www.adobe.com/uk/products/photoshop.html?gclid=EAIaIQobChMIzNru2Myo6AIVF-DtCh28Fgn0EAAYASAAEgKkdvD_BwE&sdid=88X75SKR&mv=search&ef_id=EAIaIQobChMIzNru2Myo6AIVF-DtCh28Fgn0EAAYASAAEgKkdvD_BwE:G:s&s_kwcid=AL!3085!3!394411736356!e!!g!!photoshop),
[Flask](https://flask.palletsprojects.com/en/1.1.x/) and [Heroku](https://www.heroku.com/).
##

## Features:
* All pages have a navigation bar across the top with links to home, HopsWiki , about and contact.
* Javascript contact page that sends messages stright to the assosciation email.
* A scroll to top button that appears when any page has been scrolled more than 100 pixels.
* A pop up banner asking the user to sign up to the mailing list.
* A Javascript redirect from the subcribe page.
* Footer contains social media links and copyright information.


#### Navigation: 
All pages contain the same navigation across the top and a footer to the bottom of the page. The top navigation bar consists of Home, HopsWiki, the East Bristol Hops logo that redirects to the home page when clicked, about and Contact links. All direct the user to the relevant locations. The footer contains social media links and copyright information. Easch page also contains a back to top button that appears on the right hand side of the screen when the page is scrolled.


#### Home:
The landing page has navigation across the top and footer across the bottom, 
a welcome message just below the navigation bar, followed by the East Bristol Hops Logo, followed by so what's it all about section, 
than a want to know more section below that with links to the about page. At the very bottom of this page is a website developed by 
section with a think to the developer's website.

There is also a modal pop up asking whether the user wants to sign up to the mailing list, this has the East Bristol Hops logo across the top with a X that is a close button, a subheading asking to signup and a signup link. regardless of where the signup link is pressed or the close X, the modal will be cleared and a cookie set that will stop it popping up again for 100 days.


#### HopsWiki:
The HopsWiki page has navigation across the top and footer across the bottom, a background image displaying hops and a grey semi-transparent box overlay containing the page information that consists of, clear section headers Ita all about hops, What are hops, Bine or Vine, Growing Hops.
the growing hops section has subheaders, Location, Sowing and Planting, How to test soil ph, Climbing Structure & Maintenance 
and Harvest Time. The how to test soil ph section has a button, on click will display 2 videos, one about soil ph and the other on how to use 
a ph meter, on click of the button a second time will hide the videos.

## HopsWiki UX Improvements:
During the creation of the HopsWiki, I found that when a user clicked on a pest button, the scroll to the top button would get in the way, I found it was a better UX experience if I implemented some javascript,
that changed the CSS class to hide the back to the top button and scroll the particular section into view, then onclick of the close button change the CSS back to its original class displaying the back to top button and scrolling the pest buttons centre screen.


#### About:
The About page has navigation across the top and footer across the bottom, a background image displaying the first party's images and a grey semi-transparent box overlay containing the page information that consists of, clear section headers, How to become part of our community, Where it all began, whats this beer all about and a having trouble with alcohol section.
The How to become part of our community section also consists of links to the social media pages of Facebook and twitter but also the contact page.
Where it all began has images and a story of where and how the project started.
Whats this beer all about contains pictures and information about the beer.
Having trouble with alcohol contains 2 links one to Drinkaware and the other to  Alcoholics anonymous.


#### Contact:
The Contact page has navigation across the top and footer across the bottom, with a form across the middle of the page, and a submit button below that. On submit, an overlay with hops image spinning around and loading please wait is displayed while the information is being sent to via the emailJS API, once the information is sent the overlay clears and a thank you, we have received your email message is injected via javascript. The API is linked to the East Bristol Hops email account so all correspondence from the website is sent to that inbox.


#### Subscribe:
The Subscribe page has navigation across the top and footer across the bottom, with a form across the middle of the page, and a submit button below that. On submit, the information in the form is sent to the Mailchimp API and is accessed to see if the user has already signup if the replay is a success or an error the API sends back the respective text that is displayed in the responsediv.

## Subscribe UX Improvements:
During the creation of the subscribe page, I felt it lacked a back button if there was an error, so I used Javascript to inject one that uses a global variable called globalpagename, this is created depending on where the subscribe page was first accessed from, on the landing page a modal pop up, with a link called signup! or the 'about' page with a link called mailing list these buttons also carries parameters that are the page it came from, the parameter is then sent to the backend and routed via flask to the subscribe page, when the form is filled out and the subscribe button is pressed an onclick() sends the page_name to a function in javascript it is then turned into a global variable that multiple functions can use to direct to the relevant page. 

If the form is successful, the positive response text is displayed and text mentioning that this page will automatically redirect with a back button link just in case the auto-redirect javascript fails. When auto-redirect function is called there is a delay of 3 seconds to allow the user to see the response text, and then the backbut() function is called, where an if statement, decides what page name is held in the globalpagename variable, and then runs the relevant subroutine to take the user to the page they originally started from.

##

### Styling

### Font 
<div align="center">
    <img src="static/media/fontused.jpg" alt="color card" aria-label="font used" />
</div>

* The main site headings and subheadings used a google font 'Unkempt' I felt the shape worked well with the font used on the originl logo. 
  I wanted something fun and easy to read that was inkeeping.
* Over all the main font used was standard Roboto. The standard font felt at home and was very legible.

### Colours
<div align="center">
    <img src="static/media/colourscheme.jpg" alt="color card" aria-label="color card" />
</div>

- Green/Mustard: #C6AE34
- Green/Yellow #DCE122
- Burnt Orange #F79767
- Blue/Gray #C8C9CB

* This colour selection matched as close to the original artwork as I was able to get with out loseing the pop it needed.
##

<div align="center">
    <img src="static/media/ami resposive.jpg" alt="color card" aria-label="am i responsive" />
</div>

##


#### Cross Browser Compatibility
Tested on four Browsers
* Chrome    Works as intended.
* Opera     Works as intended.
* Firefox   Some CSS around the images remders the incorrect colours some Horizontal rules are also the incorrect colour, and some javascript functions fail to trigger.
* Edge      Works as intended.


### Deployment:
##### To deploy this page to Heroku from its GitHub repository:

Log into GitHub.
Then clone this project from GitHub:

Follow this link to the Project's GitHub repository https://github.com/jonathanw82/eastbristolhops
Under the repository name, click "Clone or download".
Select clone with HTTPs, copy the clone URL for the repository.

In your local IDE open Git Bash Terminal.
Change the current working directory to the location where you want the cloned directory to be made.
Type git clone, and then paste the URL you copied earlier.
(git clone "https://github.com/USERNAME/REPOSITORY")
Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

##### Forking the repository.
If you would like to take a copy of this repository in its current state, this can be done by forking.
Create an account with github or signin if you already have one,
Follow this link to the Project's GitHub repository https://github.com/jonathanw82/eastbristolhops

From the menu items near the top of the page, select Fork.
On doing so the repository will be added to your own gitHub account. From there you can follow the deployment 
details as stated below. You will also be able to make any changes you require that will not affect the 
original master from the original repository.


##### How to deploy from Heroku
To deploy from Heroku, first sign up to do this go to https://www.heroku.com/
and click the sign up button on right hand side and fill out the form to create a new account,then select Python as the development language. 

At this point you will be sent a confirmation email, once the link in the email has been clicked you will be prompted to input a password and the account will be set up.

Once all setup and logged in, click on the create new app button, then give your project a name using hyphens instead of spaces. The name has to be unique as 
Heroku has thousands of apps and they cannot have the same name, select your region and select create app.

You will then be presented with a dashboard with listings of your app names.

From the Heroku dashboard select the app you just created, go to the deploy tab, scroll down to deployment method and click on GitHub, below you will see a connect to GitHub section, from the dropdown select your GitHub user name, then leaving the repo-name box empty click search, all the repos in your GitHub will display find the relevant repo and click connect. 

Below this, there will be 2 sections that appear Automatic deploys and Manual deploys. If you set up automatic deploy, every time you make a change to the website and push to GitHub it will be automatically deployed in Heroku, I personally would not recommend this as it can have its disadvantages if, for instance, you leave debug= True and so on. 

I would only use manual deploy then you can deploy on your terms after thew code has been tested and things are none to be working, to use this click deploy branch it will already be set to master, the site will be uploaded and deployed.

Go back to heroku go to settings click reveal config vars, there will be a few things to add here, first setup IP so in the box that says Key type (IP) and in 
the value box type (0.0.0.0) click add then do the same but type (PORT) and set that to (5000) click add. 

Once all the steps have been taken, click more, top right hand side of page and select restart all dynos the application will now be deployed.

If a message pops up stating there may be some down time until the restart has finished click OK.

Under the settings tab in Heroku, scroll down to domains and your link will be displayed there. It can be used to access the live version of the application.

Deployment: The site will be deployed by 
https://www.heroku.com/


## Media
Bine or Vine.
Infomation from: 
https://abushelofhops.co.uk/news/dried-hop-vines-v-dried-hop-bines-whats-difference/

What are Hops.
Infomation from:
https://www.britishhops.org.uk/hops/what-is-a-hop/

Javascript Email service:
https://www.emailjs.com/

Scroll to top icon:
https://paulund.co.uk/how-to-create-an-animated-scroll-to-top-button-with-jquery

User of Flask syntax in javascript:
https://stewartpark.github.io/Flask-JSGlue/

MutationObserver in Javascript:
https://stackoverflow.com/questions/2157963/is-it-possible-to-listen-to-a-style-change-event


Images: 
Images of the pots and hops belong to Jon Wheway
All East Bristol Hops logos with the hops where created by the original founders of East Bristol Hops. 

Hop Icon #181207 from:
https://icon-library.com/icon/hop-icon-1.html

Hops on the string Photo by ELEVATE from Pexels
Hops trellis photo from East Bristol Hops Twitter 
© Rido 209712791, adobestock_304075538 Purchased from Adobe stock.

favicon.ioc Unknone artist https://www.clipart.email/download/19281353.html

All images in the pest section are linked from there original sources and are therefore owned by the respective sites.

