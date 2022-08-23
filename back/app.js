const { app } = require("./server");
const { userRouter } = require("./routes/userRouter");
const { postRouter } = require("./routes/postRouter");

// settings
const port = process.env.PORT || 3000;

// routes
app.use("/", userRouter);
app.use("/", postRouter);

// listen
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
