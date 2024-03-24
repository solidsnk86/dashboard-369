const { db } = require('@vercel/postgres');
const { mainUser } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUser(client) {
  try {
    const insertedUser = await Promise.all(
      mainUser.map(async (user) => {
        const hasheredPassword = bcrypt.hash(user.password, 10);
        return client.sql`
                INSERT INTO users (id, name, email, password)
                VALUES (${user.id} ${user.name} ${user.email} ${hasheredPassword})
                ON CONFLICT (id) DO NOTHING;
                `;
      }),
    );

    console.log(`Sembrado ${insertedUser.length} usuarios`);

    return {
      users: insertedUser,
    };
  } catch (error) {
    console.error('Error sembrando usuarios:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUser(client);

  await client.end();
}

main().catch((error) => {
  console.error('Error al sembrar los datos en el servidor', error);
});
