# "Artificial Slime" is a SPA Website with a frontend and backend side both made by me!
### Built With

* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
* ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
   
## The idea behind the website

Is to lead the users to interact with the NFT's,
when hovering above the NFT it spins and expands which reveals the entire photo,
also the data about it is not displayed unless you open the detais page, in order
to create more immersive experience.

# "Artificial Slime" has the following pages: 



## Home 
```diff
- Animated welcoming page available for both Users and Guests with interactive part where the most popular NFT's are displayed.
``` 
      
![Front-Page](https://user-images.githubusercontent.com/98179343/216161956-c5f8b56c-26b8-4407-9bb0-c65daa2da8f7.png)

 ## Catalog 
```diff
- The main part of the website from where both Users and Guest can see
      the list of every NFT uploaded to the website. The main catalog page inclues,
      fully working search box which supplie you with data about search input matches.
```      
![Art-Page](https://user-images.githubusercontent.com/98179343/216162538-c2c30f9b-ea3c-4a70-a762-18dd9e7e1d50.png)

## Details
```diff
- Shows the most important info about selected NFT. Guests can see
      how much likes and owns it has as well as the price and the name of the person
      who uploaded it which leads to his personal Profile page, Users can see this
      info too and gain the power to Own and Like. Liking NFT adds it to your 
      "Liked List' and owning NFT adds it to your "Owned List" but also gives you the
      ability to pick it as your profile picture to add a unique self expression customization.
      Registered users can leave comments under posts. Comments have working link to the
      Commenter's profile as well as the date on which they were added. The Commenter can
      remove it with the trashbin icon if wanted.
```      

![NFT-Page](https://user-images.githubusercontent.com/98179343/216162599-0cb92fd4-20f8-4fdb-8f3c-2ec84a62ca99.PNG)

![NFT-Page-2](https://user-images.githubusercontent.com/98179343/216162601-956501b6-5dac-4f03-a5fb-ba150d207d7b.PNG)

![Comments](https://user-images.githubusercontent.com/98179343/216162549-7c576b52-a465-4263-b1f8-37ae5c63f3e0.PNG)

 ## Profile 
```diff
- Every User his own personal profile page, here Guest can see the User's name, 
      description and picture as well as how much NFT's they own and like from where they can
      click the link and see the list of all of the user's owned and liked NFT's, as a User you can 
      change your picture, description and username as long as they remain unique.
```        
      
![Profila-Page](https://user-images.githubusercontent.com/98179343/216163517-b7c1ab22-cb06-400f-a165-f84b9c1284df.PNG)    
    
##  Profile List 
```diff
- there both Users and Guests can see the list with every profile page,
      and access their profile pages.
```       

![User-List-Page](https://user-images.githubusercontent.com/98179343/216162633-fb020e96-fecd-4494-92a2-0f60db0069f6.png)
ercontent.com/98179343/216162625-97af782d-62e2-4615-82d6-64ab0c853783.PNG)
      
##  Create 
```diff
- Available only for Users after either Login or Register. This is from 
      where you can upload your own NFT. After uploading you are redirected to your 
      newly created details page of the NFT from where you can always edit it or delete it. 
      Every NFT you upload is automatically added your own list.
```   

![Create](https://user-images.githubusercontent.com/98179343/216162553-87355ae1-5c03-4080-8ec6-cba64dc819ca.PNG)

##  Register 
```diff
- sends the data  to the server if the form is filled correctly.
      Checks if the username and email are unique, and hashes your password,
      after that creates the user profile and stores the data in the MongoDB database.
      After successful register it redirects you to your newly created user profile. 
```
    
##  Edit 
```diff
- This is where you can edit the uploaded by you NFT's to your liking.
```    

##  Login 
```diff
- sends the data to the backend server where it checks for the email 
      in the database, if there is match takes the passwords and compares them. 
      If the password match a JWT Cookie token is created and send to the Client for 
      authorization this gives access to the interactive part of the social media website.
```      
      
![Login-Page](https://user-images.githubusercontent.com/98179343/216162591-6fe6703e-4c79-4b11-a64f-74c190699679.png)

##  Select Profile Picture 
```diff
- this is where Users can select their profile picture 
      from list of all the uploaded and owned NFT's by them.
```     
  ##  Popular
```diff
- Variation of the Catalog page accessible for both Users and Guests.
      The NFT's are dispalyed in different order starting from the most expensive and popular.
```  

![Popuar-Page](https://user-images.githubusercontent.com/98179343/216162615-e7f1842a-3960-45c2-9071-bc4d4722edfa.png)
    
```diff
! Also every page except for the login in register there is animated list with all all
      the subscribtion plans - "Bronze", "Silver" and "Gold" but for now there is no way to
      subscribe.
```  

![Subscribtion-List-Page](https://user-images.githubusercontent.com/98179343/216162629-63fce849-e10f-4380-8e2c-bda3be34b90a.png)

# The website has two parts:

## User
* After either Login or Register in the website you will be granted with access to:
* your personal profile where you can customize your profile picture, description, username and email to your liking.
* the ability like and own NFT's uploaded by other users and create and edit your own NFT's.
* cookie used for authorization.
* subscribe.
 
    * User - After either Login or Register in the website you will be granted with access to:
       - your personal profile where you can customize your profile picture, description,
         username and email to your liking.
       - the ability like and own NFT's uploaded by other users and create and edit your own NFT's.
       - cookie used for authorization.

    * Guest - As a guest you are given a lot of freedom, you can visit the 
      homepage, catalog , the most wanted list, detail pages and users profiles
      but you can't like, own, upload, edit or comment the NFT's.

## Contact

Jan Milenkov - [https://github.com/instamenta](https://github.com/instamenta) - instamenta@abv.bg

Project Link - [https://github.com/instamenta/NFT-Social-Trading-System](https://github.com/instamenta/NFT-Social-Trading-System)
