import { pool } from "../config/db.js";

const criarMedidas = async(temperatura, umidade) => {
    const [result] = await pool.query(
        "INSERT INTO tb_medidas (temperatura, umidade) VALUES (?, ?)",
        [temperatura, umidade]
    );
    return{
        id: result.insertId,
        temperatura,
        umidade,
    };
};

const pegarMedidas = async() => {
    const [result] = await pool.query(
        "SELECT * FROM tb_medidas ORDER BY data_hora DESC LIMIT 1"
    );
    return result[0] ?? null;
};

const mediaHora = async() => {
    const [result] = await pool.query(
        "SELECT AVG(temperatura) AS mediaTemperatura, AVG(umidade) AS mediaUmidade FROM tb_medidas WHERE data_hora >= NOW() - INTERVAL 1 HOUR"
    );
    return result[0] ?? null;;
};

export{
    criarMedidas,
    pegarMedidas,
    mediaHora
};
