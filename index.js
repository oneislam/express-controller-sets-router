import express from "express";
import { ControllerSets } from "express-controller-sets";

export const createRouter = ({
    model,
    orderBy = "none",
    query = [],
    runAfterCreate = "none",
}) => {
    const router = express.Router();
    const controllerSet = new ControllerSets(
        model,
        orderBy,
        query,
        runAfterCreate
    );

    router.get("/", controllerSet.getAll.bind(controllerSet));
    router.post("/", controllerSet.create.bind(controllerSet));
    router.get("/:id", controllerSet.getById.bind(controllerSet));
    router.patch("/:id", controllerSet.update.bind(controllerSet));
    router.delete("/:id", controllerSet.delete.bind(controllerSet));

    return router;
};
