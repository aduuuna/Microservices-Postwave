This directory contains the comment service for my Blog app.

## Comment Services

**_Path_**

a) `/posts/:id/comments` – **POST METHOD** – (Create a comment associated with the given post ID)
b) `/posts/:id/comments` – **GET METHOD** – (Retrieve all comments associated with the given post ID)

---

**_Storage_**

Just like the **posts service**, I’m not using any database for now. This means that all stored data will be lost whenever the server restarts.

I’m using a `commentsById` object:
`commentsById = {}`
This object is similar to the `posts = {}` structure, but slightly different. It maps post IDs to arrays of comments associated with each post. So instead of a single post per ID, we store an **array of comments** under each post ID.

---

**_Add ons_**

- Fixed `CORS` prevention policy by configuring Express to use `cors` as a middleware.
