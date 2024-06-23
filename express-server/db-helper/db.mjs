import pg from 'pg'
import { config } from 'dotenv'
import { exit } from 'process';

const { Pool } = pg

class DBHelper {
    constructor(conf) {
        if(!conf) {
            config();
            this.pool = new Pool();
        } else {
            this.pool = new Pool(conf);
        }
    }
    async query( query, params ) {
        try{
            let client = await this.pool.connect();
            const result = await client.query(query, params)
            await client.release();
            return result.rows;
        } catch (e) {
            return { error: e }
        }
    }
}

export default DBHelper;