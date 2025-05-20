import mysql from 'mysql2/promise';
import { json } from '@sveltejs/kit';
// import { PGSQL_CONNECTION } from "$env/static/private";

interface getInterface {
    url : URL;
}

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pa$$w0rd',
  database: 'edunex',
  port: 3306
});

/**
 * Retourne soit toutes les boites, soit certaines boites basé 
 * sur des critères précisés sur la chaîne de requêtes (sensible à la casse).
 * Si des paramètres sont passés qui ne correspondes pas aux colonnes de la
 * table, ils sont ignorés.
 * @param url L'url reçu
 * @returns La réponse en format JSON
 */
export async function GET({ url } : getInterface) {
    try {
        const [rows] = await connection.execute('SELECT * FROM lesson');
        return json(rows);
    } catch (error : any) {
        return json({ error: error.message });
    } finally {
        await connection.end();
    }
    
}
