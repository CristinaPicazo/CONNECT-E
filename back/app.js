const { app } = require("./server");
const { userRouter } = require("./routes/userRouter");
const { postRouter } = require("./routes/postRouter");

// Settings
const port = process.env.PORT || 4200;

// Routes
app.use("/", userRouter);
app.use("/posts", postRouter);

// Listen
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
