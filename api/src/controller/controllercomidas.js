const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    try {
        const comidas = await prisma.comida.findMany();
        return res.json(comidas);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const create = async (req, res) => {
    const data = req.body;
    try {
        const novaComida = await prisma.comida.create({
            data: data
        });
        return res.status(201).json(novaComida).end();
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

const update = async (req, res) => {
    const data = req.body;
    try {
        const comidaAtualizada = await prisma.comida.update({
            data: data,
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.status(202).json(comidaAtualizada).end();
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

const del = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await prisma.comida.delete({
            where: {
                id: id
            }
        });
        return res.status(204).end();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {
    read,
    create,
    update,
    del
}