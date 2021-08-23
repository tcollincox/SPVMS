# SPVMS
Important Information
This won't work without a .env file that has a connection string in it for a mongodb

Accessing Instructions
1)Clone project from Github
2)If not installed install
-vue
-npm
3)add .env file to main project with the connection string 

4) Open terminal and run the commands:
 $npm install 
 and then 
 $npm start


Extra Information

Here are all the Api routes provided by this project

GET
http://localhost:3001/volunteers  ------- Gets All volunteers
http://localhost:3001/admins  ------- Gets All admins
http://localhost:3001/opportunities  ------- Gets All opportunities
http://localhost:3001/filledOpportunities  ------- Gets All filledOpportunities


http://localhost:3001/volunteers/Id/################# ------------- Gets any single Volunteers if you put their Id where the ############# is
http://localhost:3001/admins/Id/################# ------------- Gets any single admin if you put their Id where the ############# is
http://localhost:3001/opportunities/Id/################# ------------- Gets any single opportunity if you put their Id where the ############# is
http://localhost:3001/filledOpportunities/Id/################# ------------- Gets any single filledOpportunity if you put their Id where the ############# is


POST
http://localhost:3001/volunteers/Post ---------- Post a volunteer 
http://localhost:3001/opportunities/Post  ---------- Post an opportunity
http://localhost:3001/filledOpportunities/Post  ---------- Post a filled opportunity 

PUT
http://localhost:3001/volunteers/Update/############  ---------- allows a volunteer to be upadate by sending new json and replacing ########### with volunteer Id
http://localhost:3001/opportunities/Update/############  ---------- allows a volunteer to be upadate by sending new json and replacing ########### with opportunity Id  

Delete
http://localhost:3001/volunteers/Delete/################ - delete a volunteer by replacing the ############# with a volunteer's id
http://localhost:3001/opportunities/Delete/################ - delete a opportunity by replacing the ############# with a opportunity's id
http://localhost:3001/filledOpportunities/Delete/############## - delete a filled opportunity by replacing the ############# with a filledOpportunities' id
http://localhost:3001/filledOpportunities/DeleteByVolunteer/############## - delete all filled opportunities connected to a volunteer by replacing the ############# with a volunteer's id
http://localhost:3001/filledOpportunities/DeleteByOpportunity/############## - delete all filled opportunities connected to an opportunity by replacing the ############# with a opportunity's id
