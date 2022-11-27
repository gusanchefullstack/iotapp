import { prisma } from "../db.mjs";
import { hashPassword, comparePasswords, createJWT } from "../modules/auth.mjs";

export const createNewUser = async (req, res) => {
  const hash = await hashPassword(req.body.password);

  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      name: req.body.name,
      password: hash,
    },
  });

  const token = createJWT(user);
  res.json({ token });
};

export const signingUser = async (req, res) => {
  const user = await prisma.user.findFirst({
    where: {
      username: req.body.username,
    },
  });

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "Invalid username or password" });
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};
