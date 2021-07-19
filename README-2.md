# Installation

Make sure you have yarn installed. (Or npm should work too, just didn't test with npm).

1. From project root, run `yarn`
2. From folder `client` run `yarn`

# Development

Use `npm run dev` to start developing. This starts up a react dev server on port 3000, and an express server on port 3001. React dev server proxies to the express server for api requests, use port 3000 for development. 

# Build and Run

`npm run start` will build both the frontend and backend, backend is transpiled into `dist` and frontend into `client/build` folders. This starts up the application on port 3001.

# Routes

Response format: 

```javascript
{
  "data": ["Object or array of response data"],
  "success": true // Indicates success/failure
}

```

1. `/api/photos` Returns a list of strings for the URL all photos. 
2. `/api/sharks` Returns a list of strings for the URL shark photos. 
3. `/api/cats` Returns a list of strings for the URL cat photos. 

# Notes

1. Material UI was used for theming
2. Didn't end up using webpack because of existing features with typescript compiler. 


