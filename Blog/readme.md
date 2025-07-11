This directory contains a simple Blog application that demonstrates key features of a microservices architecture.

## Services

**1. Post Service**

Create a new post

Retrieve all posts

**2. Comment Service**

Add a new comment

Retrieve all comments

# Challenges encountered

**1. Reducing Requests**

In the comment service, I noticed that creating a comment triggered multiple requests—one to create the comment and another to fetch the related post. This made the process slower. I later realized I could combine them into a single request that returns the comment along with its related post data, which is more efficient.

`Solution: ` I created a query service that acts an intermediary even when the post or comments service stops working, the query service will still be actively working..So a request sent to post doesn't necersarly goes to the comment or post but the query service..so with that we get only one request. No dependencies needed.

Event Bus. This is also an approach of how I went about the challenge. This event bus helped share events or resources between the services.

So I added anew route to the post, comment and query service.
These routes will have a post request to a `post/events` .. in the post request, I attached some sort of data. So in this request makes serveral services
