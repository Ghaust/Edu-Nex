import { json } from "@sveltejs/kit";
// import { PGSQL_CONNECTION } from "$env/static/private";

interface getInterface {
    url : URL;
}


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
        let test = {
            name: "hello",
            age: "world!"
        }

        return json(test)

    } catch (error) {
        return json(error);
    }
    
}
