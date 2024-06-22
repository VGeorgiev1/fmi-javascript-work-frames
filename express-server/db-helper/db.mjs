import pg from 'pg'
import { config } from 'dotenv'
import { exit } from 'process';

const { Client } = pg
const client = new Client()

const query= ({ query , params }) => {

}


await client.connect()
try {
} catch(e) {

}

class DBHelper {
    constructor(config) {
        if(!config) {
            config();
            this.client = new Client();
        } else {
            this.client = new Client(config);
        }
    }
    async query( { query, params } ) {
        try{
            await client.connect()
            const result = await client.query(query, params)
            return result;
        } catch (e) {
            return { error: e }
        }
    }
    async end() {
        await client.end()
    }
}