import pg from 'pg'
import { config } from 'dotenv'
import { exit } from 'process';
config();

const { Client } = pg
const client = new Client()

await client.connect()
try {
    const result = await client.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE,
            password VARCHAR(255) NOT NULL,
            email text UNIQUE,
            profile_image text,
            age integer
        );
        CREATE TABLE IF NOT EXISTS posts (
            id SERIAL PRIMARY KEY,
            header text,
            content text,
            additionalContent text
        );
        CREATE TABLE IF NOT EXISTS relations (
            user_id integer REFERENCES users(id),
            other_user_Id integer REFERENCES users(id)
        )`
    );
    await client.end();
    console.log("Database initialised successfuly!");
    exit(0);
} catch(e) {
    console.log(e);
    await client.end();
    exit(-1)
}
 