import { pool } from "../config/db.js";

const criarUsuarios = async (nome, telefone, email, senha) => {
    const [result] = await pool.query(
        "INSERT INTO usuarios (nome, telefone, email, senha) VALUES (?, ?, ?, ?)",
        [nome, telefone, email, senha]
    );
    return{
        id: result.insertId,
        nome,
        telefone,
        email
    };
};

const autenticarUsuarios = async (email) => {
    const [result] = await pool.query(
        "SELECT id, nome, telefone, email, senha FROM usuarios WHERE email = ?",
        [email]
    );
    return result[0];
};

export {
    criarUsuarios,
    autenticarUsuarios
};