This directory contains the posts service for my Blog app.

## Post Services

**\_ Path \_**

a) `/posts` – **POST Method** – (Create a new post with a title and a body)
b) `/posts` – **GET Method** – (Retrieve all posts)

---

**\_ Storage \_**

This service currently uses **in-memory storage** instead of a database. This means all stored content is lost whenever the server restarts.

I’m using a `posts` object:
`posts = {}`
This object will store all posts. A `.get` request retrieves all posts in memory, while a `.post` request adds a new post to the `posts` object.

Each post is assigned a unique `id`, which is generated using `randomBytes` from the `crypto` module.

---

**\_ Add-ons \_**

- Integrated `body-parser` to allow the server to accept incoming JSON-formatted request bodies.
- Configured CORS policy to prevent cross-origin issues by adding `cors` middleware to Express.
