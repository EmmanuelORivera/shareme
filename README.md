# Shareme Project
You can visit this deployed proyect on this url: [https://share-me95.netlify.app](https://share-me95.netlify.app/).


## React frontend app created with Vite and styled with tailwind

### Env variables (Frontend)

1. VITE_GOOGLE_API_TOKEN
2. VITE_SANITY_PROJECT_ID
3. VITE_SANITY_TOKEN

### On the google cloud platform it is needed to add the under the credential section, the urls that its going to be used. (create a new google cloud project)
URI:
1. http://127.0.0.1:5173
2. http://localhost:5173
3. https://share-me95.netlify.app

## Backend created with Sanity
### Create a sanity proyect and make configurations on the sanity.io/manage
Configure the CORS origins:
1. https://share-me95.netlify.app
2. http://localhost:5173
3. http://localhost:3333

### Token
Create the token that is going to be used on the frontend.
