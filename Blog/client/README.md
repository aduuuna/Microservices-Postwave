## Client Layout (React App)

This is the `client` directory, which renders the actual blog interface for users to interact with and experience the app visually.

### Components

1. `PostList`
2. `PostCreate`
3. `CommentList`
4. `CommentCreate`

---

**Chaleges Faced**

While trying to access data from the `posts` service at `http://localhost:4000/post` from the client running on `http://localhost:3000`, I encountered a **CORS Prevention Policy** issue.

There was no additional configuration I could apply on the client side to fix it. I had to go back and resolve the issue directly on the server by configuring CORS properly.
