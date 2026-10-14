import { pool } from "../config/db.js";

const criarAlertas = async (medida, valor, mensagem) => {
    const [result] = await pool.query(
        "INSERT INTO tb_alertas (medida, valor, mensagem) VALUES (?, ?, ?)",
        [medida, valor, mensagem]
    );

    return{
        id: result.insertId,
        medida,
        valor,
        mensagem,
    };
};
const pegarAlertas = async() => {
    const [result] = await pool.query(
        "SELECT * FROM tb_alertas ORDER BY data_hora DESC LIMIT 10"
    );
    return result;
}

export {
    criarAlertas,
    pegarAlertas
};