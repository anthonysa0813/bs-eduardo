"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// get all flights
router.get("/", (req, res) => {
    res.json({
        message: "all users",
    });
});
// get flight by Id
router.get("/:id", (req, res) => {
    res.json({
        message: "user 10",
    });
});
exports.default = router;
//# sourceMappingURL=user.js.map