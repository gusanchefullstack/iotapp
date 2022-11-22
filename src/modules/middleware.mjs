export const myMiddlware = (req, res, next) => {
  console.log("Logged")
  next();
};

export const myMiddlware2 = (req, res, next) => {
  console.log("again")
  next();
};