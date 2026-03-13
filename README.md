# Morse Code Decoder 
A simple Rreact Application that converts Morse code into text
The app includes an input text box, a read only output and a reference table for Morse code characters

---
# Local Setup

## 1. Local Setup Steps
In your terminal run:
~~~bash 
	git clone <repo-url>
	cd <project-folder>
	Node -v
	npm install
~~~

## 2. How to Run Locally 
In your terminal:
~~~bash 
	cd <project-folder>
	npm run dev
~~~
Copy http://localhost:5173 into your web browser

## 3. How to Deploy on Firebase Hosting
In your terminal:
~~~bash
	npm install -g firebase-tools
	firebase login
~~~
This will send you to google to login with an email
~~~bash
	cd <project-folder>
	firebase init
~~~
- Select HOSTING
- Choose the project
- Set the public directory
   - Dist (if using vite)
   - Or build (if using Create React App)
- Configure as a single page: YES
- DO NOT OVERWRITE index.html
~~~bash
	npm run build
	firebase deploy
~~~

## Technologies Used
- React
- JavaScript
- CSS
- Firebase Hosting 

## Author
Evan Castner