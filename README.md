# ONE ISLAM

[oneislam](https://oneislam.pro/) is an IT company founded to connect humanity with Islam and usher in a `new era of halal platforms for Muslims`.

# controllerSets

[controller set router](https://oneislam.pro/) Tis a helper package for Node/Express.js developers, designed to reduce boilerplate code. Simplify your controllers with controller.js and streamline your routes with the router. Just call the function with the required arguments, and your API is ready. You can even skip the controller entirely and use the router to quickly set up your APIs.

## Update logs:
* Develop a middleware for `uploading files to S3`.
* Enable `search` functionality.
* Set the default `page size` to 50.
* Add support for custom `middlewares`.
* Enable S3 file uploads via `.env` configuration.

## Documentation

The official documentation website is [controllerSets](https://oneislam.pro/).

controllerSets 1.0.0 was released on May 2023. You can find more details on [backwards breaking changes in 1.0.0 on our docs site](https://oneislam.pro/). 


## Installation
* dependencies
    * [multer](https://www.npmjs.com/package/multer)
    * [multer-s3](https://www.npmjs.com/package/multer-s3)
    * [@aws-sdk/client-s3](https://www.npmjs.com/package/@aws-sdk/client-s3)
    * [controller-sets-s3-file-upload](https://www.npmjs.com/package/controller-sets-s3-file-upload)
    * [express-controller-sets](https://www.npmjs.com/package/express-controller-sets)
    * [express-controller-sets-router](https://www.npmjs.com/package/express-controller-sets-router)

```sh
$ npm i multer multer-s3 @aws-sdk/client-s3 controller-sets-s3-file-upload express-controller-sets express-controller-sets-router
```

## Create Rest API using [express-controller-sets-router](https://www.npmjs.com/package/express-controller-sets-router)

```javascript
import { createRouter } from "express-controller-sets-router";
import taskModel from "../models/taskModel.js";

const exampleRouter = createRouter({
    model: taskModel,
    orderBy: "-createdAt",
    query: ["name"],
    search:"name",
    runAfterCreate: (createdObject) => {
        console.log("New object created: ", createdObject);
    },
    middlewares: [authenticated],
});

export default exampleRouter;

```


## Create Rest API with file upload using [express-controller-sets-router](https://www.npmjs.com/package/express-controller-sets-router) [controller-sets-s3-file-upload](https://www.npmjs.com/package/controller-sets-s3-file-upload)


```javascript
import { createRouterS3upload } from "express-controller-sets-router";
import taskModel from "../models/taskModel.js";

const exampleRouter = createRouterS3upload({
    model: taskModel,
    orderBy: "-createdAt",
    query: ["name"],
    search:"name",
    runAfterCreate: (createdObject) => {
        console.log("New object created: ", createdObject);
    },
    middlewares: [authenticated],
    path: "users/profiles/files/",
    fields: [
        { name: "img", maxCount: 1 },
        { name: "license", maxCount: 1 },
    ],
});

export default exampleRouter;

```



## License

Copyright (c) 2023 Learn&lt;https://oneislam.pro/&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
