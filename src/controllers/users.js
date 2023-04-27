import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const postUser = (req, res) => {
    const q = "INSERT INTO users(`id`, `username`) VALUES(?)";

    const values = [
        req.body.id,
        req.body.username,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cadastrado com Sucesso!");
    });
};

export const putUser = (req, res) => {
    const q = "UPDATE users SET `username` = ? WHERE `id` = ?";

    const values = [
        req.body.username,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Editado com Sucesso!");
    });
};

export const delUser = (req, res) => {
    const q = "DELETE FROM users WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Excluído com Sucesso!");
    });
};