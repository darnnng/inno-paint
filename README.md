# Innowise-Lab-Internship-Level-2-Mini-paint

## 1.TASK

https://docs.google.com/document/d/1v2QD8u79P-eydVO12eVlTlAtbIfg2EzVqAqzFQVbDgg/edit?usp=sharing
## 2.HOW TO RUN THE APP

### npm i

To get all the dependencies installed.

### npm start

To start the app in browser

### deploy
https://minipaintinno.netlify.app/

## 3.DATABASE SNAPSHOT

The authentication of users is done via email/password.
The firestore has 2 collections(users and images):

users -- [id] -- email <br/>
| -------[id2]--email2 ... <br/>
| -------[id3]--email3 ...

images -- [id] -- email, image(in base64 format), userId <br/>
| -------[id2]--email2,image2,userId ... <br/>
| -------[id3]--email3 ...


## 4.APPLICATION STACK

**react-router-dom** was used for routing <br/>
**MUI** provides a simple, customizable, and accessible library of React components. <br/>
**Redux Toolkit** includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more  <br/>
**react-redux** official React bindings for Redux

## 5.FOLDER STRUCTURE

**Public** folder stores html-file. <br/>
In **src** folder there are: <br/> 

-**components** which stores the main logic of the app: <br/>
-----**Auth:**<br/>
-----------**Form**<br/>
--------------Form.tsx<br/>
-----------**SignIn**<br/>
--------------SignIn.tsx<br/>
-----------**SignUp**<br/>
--------------SignUp.tsx<br/>
-----------**authstyles.ts**<br/>
-----**Editor**<br/>

-----------**Canvas**<br/>
--------------Canvas.tsx<br/>
--------------Toolbar.tsx<br/>
-----------**Editor.tsx**<br/>
-----------**editorstyles.ts**<br/>
-----**GalleryPage**<br/>
-----------**GalleryPage.tsx**<br/>
-----------**gallerystyles.ts**<br/>
-----**general**<br/>
-----------**ErrorToast**<br/>
--------------Error.tsx<br/>
-----------**Switcher**<br/>
--------------Switch.tsx<br/>
--------------themes.ts<br/>

-**tools** in which there are files with logic for every canvas tool(brush,circle..)<br/>
-**hooks** which stores part of redux logic <br/>
-**services** which stores logic for working with firestore <br/>
-**store** which stores redux-logic (store and slices) <br/>
