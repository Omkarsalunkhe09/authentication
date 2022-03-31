const express = require("express");

const router = express.Router();

const User = require("../models/user.model")


router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id).lean().exec();
    return res.send(user);
})

router.patch("/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, { new: true }).lean().exec();
    return res.send(user);
})

router.delete("/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.send(user);
})



module.exports = router;
