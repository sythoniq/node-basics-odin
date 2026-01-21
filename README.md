# Basic Information Site

> Small Project to expand on some of the lessons introduced in the early node
> path.

> Basics on Node.js

>> - Got to use `createServer` and got to see how requests are passed to said server and how to work with them.
    To be specific this one allowed me to able to write a small snippet that will open a specific page depending on the url passed to the `req` parameter.
    Other than that, there is alot of content that has been read and probably all forgotten by now, but now I have a slight idea of what node is and how it kinda
    works and such.


> Commented out the entire basic node part, reimplemented most of the features using express. Mainly utilizing the `express().get()` function to process the requests through multiple different middleware functions and then finally I use `sendFile()` function to pass the appropriate file for that said route/url.

> Found a fix for the handling of the attempt to access to a page not known by using the `express().use()` to get the status of the res and since it will 404 it returns the error page.

#### Small note on the environment variable `ROOT`
- As the name entails its just the absolute path that will lead upto the files within this project repo


## To run this simple one

- Make sure to have an instance of node installed and then within the project directory just create a `.env` file and provide a `ROOT` variable that holds your absolute path for example `/home/user/ProjectsFolder...` after which you can safely run `node --env-file=.env index.js`.

- You actually read till here, what a surprise, thanks tho :)
