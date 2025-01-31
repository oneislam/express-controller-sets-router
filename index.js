import { fileUploadMiddleware } from "controller-sets-s3-file-upload";
import express from "express";
import { ControllerSets } from "express-controller-sets";

export const createRouter = ({
    model,
    orderBy = "none",
    query = [],
    search = "none",
    runAfterCreate = "none",
    middlewares = [],
}) => {
    const router = express.Router();
    if (middlewares.length > 0) {
        router.use(middlewares);
    }

    const controllerSet = new ControllerSets(
        model,
        orderBy,
        query,
        search,
        runAfterCreate
    );

    router.get("/", controllerSet.getAll.bind(controllerSet));
    router.post("/", controllerSet.create.bind(controllerSet));
    router.get("/:id", controllerSet.getById.bind(controllerSet));
    router.patch("/:id", controllerSet.update.bind(controllerSet));
    router.delete("/:id", controllerSet.delete.bind(controllerSet));

    return router;
};

export const createRouterS3upload = ({
    model,
    orderBy = "none",
    query = [],
    search = "none",
    runAfterCreate = "none",
    middlewares = [],
    path = "files/",
    fields = [{ name: "file", maxCount: 1 }],
}) => {
    const router = express.Router();
    if (middlewares.length > 0) {
        router.use(middlewares);
    }

    const controllerSet = new ControllerSets(
        model,
        orderBy,
        query,
        search,
        runAfterCreate
    );

    router.get("/", controllerSet.getAll.bind(controllerSet));
    router.post(
        "/",
        (req, res, next) => {
            fileUploadMiddleware(req, res, next, path, fields);
        },
        controllerSet.create.bind(controllerSet)
    );
    router.get("/:id", controllerSet.getById.bind(controllerSet));
    router.patch(
        "/:id",
        (req, res, next) => {
            fileUploadMiddleware(req, res, next, path, fields);
        },
        controllerSet.update.bind(controllerSet)
    );
    router.delete("/:id", controllerSet.delete.bind(controllerSet));

    return router;
};
