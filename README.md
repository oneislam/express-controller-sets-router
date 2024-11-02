# controllerSets

[controller set router](https://oneislam.pro/) This helper package is designed for Node/Express.js developers to reduce boilerplate code. Use controller.js to simplify your controllers, and router to streamline your routes. Just call this function with the necessary arguments, and your API is ready. You can even eliminate the controller entirely, using only the router to get all your APIs up and running.

## Documentation

The official documentation website is [controllerSets](https://oneislam.pro/).

controllerSets 1.0.1 was released on Oct 2024. You can find more details on [backwards breaking changes in 1.0.0 on our docs site](https://oneislam.pro/). 


## Installation
* dependencies
    * [multer](https://www.npmjs.com/package/multer)
    * [multer-s3](https://www.npmjs.com/package/multer-s3)
    * [@aws-sdk/client-s3](https://www.npmjs.com/package/@aws-sdk/client-s3)
    * [controller-sets-s3-file-upload](https://www.npmjs.com/package/controller-sets-s3-file-upload)
    * [express-controller-sets](https://www.npmjs.com/package/express-controller-sets)
    * [express-controller-sets-router](https://www.npmjs.com/package/express-controller-sets-router)

```sh
$ npm i express-controller-sets-router
```

## Using router with no file upload [ControllerSets](https://www.npmjs.com/package/express-controller-sets)

```javascript
import { createRouter } from "express-controller-sets-router";
import taskModel from "../models/taskModel.js";

const exampleRouter = createRouter({
    model: taskModel,
    orderBy: "-createdAt",
    query: ["name"],
    runAfterCreate: (createdObject) => {
        console.log("New object created: ", createdObject);
    },
});

export default exampleRouter;

```


## Using router with file upload [ControllerSets](https://www.npmjs.com/package/express-controller-sets) [controller-sets-s3-file-upload](https://www.npmjs.com/package/controller-sets-s3-file-upload)


```javascript
import { createRouterS3upload } from "express-controller-sets-router";
import taskModel from "../models/taskModel.js";

const exampleRouter = createRouterS3upload({
    model: taskModel,
    orderBy: "-createdAt",
    query: ["name"],
    runAfterCreate: (createdObject) => {
        console.log("New object created: ", createdObject);
    },
    path: "users/profiles/files/",
    fields: [
        { name: "img", maxCount: 1 },
        { name: "license", maxCount: 1 },
    ],
});

export default exampleRouter;

```



## License

Copyright (c) 2023 LearnBoost &lt;https://oneislam.pro/&gt;

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
