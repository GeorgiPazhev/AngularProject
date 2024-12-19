## Angular project
The project is based on three parts: 
- The frond end Angular 18 application flightCargo, located in sub-folder "flightCargo".
- The MongoDB database with documents located in sub-folder "MongoDBData/flightCargo".
- The Backend located in "Rest-Api" subfolder.

## How to run
- Clone the repository first
- Please apply the MongoDB data in your local MongoDB server via MongoDB restore tool
- Go to subfolder Rest-Api, open new terminal in this folder and run the "npm start" command
- Go to subfolder flightCargo, open new terminal in this folder and run the "ng serve" command

## flightCargo Angular application
This application is frond-end app, based on Angular 18. It contains the following parts:
 - User management
 - News section
 - Flights section
 - Shipments section

 The User management part consists Log In/Register/Edit profile and User list and changing user privileges. 
 The user could have two roles - Administrator and Customer. The administrator can see all users and change their privileges.
 The News section has component list of all added news and details component to show all details of specific news record.
 The administrator can also edit or delete specific news record.
 The Flights section shows all planned flights, which date before departure date. The administrator user can see all flights.
 The shipments section shows all shipments by specific flight personalized by the user. The administrator see all shipments by the specific flight.



