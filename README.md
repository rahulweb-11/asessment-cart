# asessment-cart

get a clone by copy HTTPS url and run command in your cmd:
git clone <URL>
 
goto project and open in editor and in terminal run the following commands:
npm i --force
npm start

<----------------PORT--------------------->  

application will start running on port http://localhost:3000
  
<--------------Usage---------------------->

After runnig the first screen will be the Login screen.
 for login use the following credentials:-
 
 Username - kminchelle
 Password - 0lelplR
 
  After successfully login All Products Listing is visible.
  Search bar working on the top of the header.
  on every product there is a button view product which give single view of the product.
  On click on the avatar icon on header, there is a logout button.
  
  <------------------------- libraries used ------------------------------>
   
1. MUI and Bootstrap for designing
2. React redux for state managament
3. React Rersist for persisting the state in redux store
4. Yup and Formik for validation.
5. Axios for API call
    
<-------------Optimization------------->
 
Used custom debounce hook for search filter.
Used token authentication for login.
