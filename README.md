# "Artificial Slime" is a SPA Website with a frontend and backend side both made by me and build upon Node.js!

    * Frontend - Angular, HTML & CSS
    * Backend - Express.js, MongoDB
    
# The idea behind the website

Is to lead the users to interact with the NFT's,
when hovering above the NFT it spins and expands which reveals the entire photo,
also the data about it is not displayed unless you open the detais page, in order
to create more immersive experience.

# "Artificial Slime" has the following pages: 

    * Home - Animated welcoming page available for both Users and Guests with
      interactive part where the most popular NFT's are displayed.
    
    * Catalog - The main part of the website from where both Users and Guest can see
      the list of every NFT uploaded to the website. The main catalog page inclues,
      fully working search box which supplie you with data about search input matches.
    
    * Details -  Shows the most important info about selected NFT. Guests can see
      how much likes and owns it has as well as the price and the name of the person
      who uploaded it which leads to his personal Profile page, Users can see this
      info too and gain the power to Own and Like. Liking NFT adds it to your 
      "Liked List' and owning NFT adds it to your "Owned List" but also gives you the
      ability to pick it as your profile picture to add a unique self expression customization.
      Registered users can leave comments under posts. Comments have working link to the
      Commenter's profile as well as the date on which they were added. The Commenter can
      remove it with the trashbin icon if wanted.
    
    * Profile - Every User his own personal profile page, here Guest can see the User's name, 
      description and picture as well as how much NFT's they own and like from where they can
      click the link and see the list of all of the user's owned and liked NFT's, as a User you can 
      change your picture, description and username as long as they remain unique.
    
    * Upload - Available only for Users after either Login or Register. This is from 
      where you can upload your own NFT. After uploading you are redirected to your 
      newly created details page of the NFT from where you can always edit it or delete it. 
      Every NFT you upload is automatically added your own list.
    
    * Edit - This is where you can edit the uploaded by you NFT's to your liking.
    
    * Register - sends the data  to the server if the form is filled correctly.
      Checks if the username and email are unique, and hashes your password,
      after that creates the user profile and stores the data in the MongoDB database.
      After successful register it redirects you to your newly created user profile. 
    
    * Login - sends the data to the backend server where it checks for the email 
      in the database, if there is match takes the passwords and compares them. 
      If the password match a JWT Cookie token is created and send to the Client for 
      authorization this gives access to the interactive part of the social media website.
    
    * Select Profile Picture - this is where Users can select their profile picture 
      from list of all the uploaded and owned NFT's by them.
    
    * Most Wanted - Variation of the Catalog page accessible for both Users and Guests.
      The NFT's are dispalyed in different order starting from the most expensive and popular.
    
# The website has two parts:

    * User part - After either Login or Register in the website you will be granted with access to:
       - your personal profile where you can customize your profile picture, description,
         username and email to your liking.
       - the ability like and own NFT's uploaded by other users and create and edit your own NFT's.
       - cookie used for authorization.

    * Guest part - As a guest you are given a lot of freedom, you can visit the 
      homepage, catalog , the most wanted list, detail pages and users profiles
      but you can't interact in any way.
