import { prisma } from "../db.mjs";

export const getOrganizations = async (req, res) => {
  const organizations = await prisma.organization.findMany();
  res.json({ data: organizations });
};

export const getOneOrganization = async (req, res) => {
  const id = req.params.id;
  const organization = await prisma.organization.findUnique({
    where: {
      id,
    },
  });
  res.json({ data: organization });
};

export const createOrganization = async (req, res) => {
  const organization = await prisma.organization.create({
    data: {
      name: req.body.name,
      nit: req.body.nit,
      phone: req.body.phone,
      address: req.body.address,
    },
  });
  res.json({ data: organization });
};

export const updateOrganization = async (req, res) => {
  const updatedOrganization = await prisma.organization.update({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
      nit: req.body.nit,
      phone: req.body.phone,
      address: req.body.address,
    },
  });
  res.json({ data: updatedOrganization });
};
