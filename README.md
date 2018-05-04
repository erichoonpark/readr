## Readr

Looking to explore the Google Vision API but don't know how to get started? 

Readr is an open source web application that allows user to test and demo Google's Vision API. This is a project built with Reactstrap, Express.js, and Node.js allowing you to explore how to use and implement the Google Vision API.

- __Developer:__ Eric

### Requirements
- Node.js
- Express.js
- Reactstrap
- Multer
- Google Vision API

## Development

### Getting Started 
First things first, you will need to get familiar with Google Cloud! There's a Getting Started guide that you can find here

https://cloud.google.com/getting-started/

The Getting Started guide will help you create the fundamental resources needed to start using anything from Google Cloud Platform. Some mandatory steps are: 

1. Creating a Gmail/Google Account
2. Creating a Project within that Google Account for this particular project, you can name it 'Readr' or 'Vision API Project'
3. Enable the Vision API
4. Import the Vision API credential for authentication on your server

### Get the Google API Key 
[Authenticate at Google Cloud](https://cloud.google.com/vision/docs/auth)

### Save API Keys in separate file
After enabling the Vision API in your Google Cloud account, you will be provided with a file that holds your authentication credentials. Make sure to save this file as "keys.json" in the root directory. You will be using this file to set the keys as an environment variable that ultimately help verify your application. 
   
### Installing Dependencies 

From within the root directory:

```sh
npm install
```

### NPM Scripts
npm scripts are provided for starting development server. From within the root directory:

Start Server:
```sh
npm run s
```

Start React: 
```sh
npm start
```
After running these scripts, open you page to your localhost:8080.
