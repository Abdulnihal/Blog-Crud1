# Blog Crud
Here I used Mongo-Db,Node.js and express for this project.
Model of a blog consists of Title and description.
And our route address is http://localhost:4000/blogs/
We can use postman to test our project,by running our server using visual studio code 'npm start'.
1.Post: add a new blog
Method=Post, Address:http://localhost:4000/blogs/
We pass title and description in body,and it is saved in mongo db.

2.Get:Get all blog
Method=Get, Address:http://localhost:4000/blogs/
We get all blogs as result.

3.Get:get a blog by id
Method=Get, Address:http://localhost:4000/blogs/add-id-you-want-to-search
Example:Method=Get, Address:http://localhost:4000/blogs/60a746282b57f81720d24b9c
here we get a specific blog as result.

4.Delete:delete a blog of given id
Method=delete, Address:http://localhost:4000/blogs/add-id-you-want-to-delete
Example:Method=delete, Address:http://localhost:4000/blogs/60a746282b57f81720d24b9c
Here blog with passed id get deleted.

5.Update:Update a blog of given id
Method=Patch, Address:http://localhost:4000/blogs/add-id-you-want-to update
Example:Method=Patch, Address:http://localhost:4000/blogs/60a746282b57f81720d24b9c
We have pass the updated title and description in body part.
So the specific blog get updated.