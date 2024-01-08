const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const { mean, median, mostFrequent, convertToNums } = require("./calculaters");

app.get("/mean", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("Not valid numbers", 400);
  }
  let stringNums = req.query.nums.split(",");
  let nums = convertToNums(stringNums);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    calculation: "mean",
    result: mean(nums),
  };
  return res.send(result);
});

app.get("/median", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("Not valid numbers", 400);
  }
  let stringNums = req.query.nums.split(",");
  let nums = convertToNums(stringNums);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    calculation: "median",
    result: median(nums),
  };
  return res.send(result);
});

app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("Not valid numbers", 400);
  }
  let stringNums = req.query.nums.split(",");
  let nums = convertToNums(stringNums);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    calculation: "mode",
    result: mostFrequent(nums),
  };
  return res.send(result);
});

app.use(function(req,res,next){
const err = new ExpressError("Not Found",404);
return next(err)
});


app.use(function (err.req,res,next){
    res.status(err.status);
    return res.jason({
        error:err,
        message:err.message
    })
});
