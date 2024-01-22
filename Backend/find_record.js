const { MongoClient } = require('mongodb');
const { DateTime } = require('luxon');

async function querySendingStats() {
  const client = new MongoClient('mongodb+srv://inboxclub_admin:KC.eE-BGJA2RLC2wN@inboxclub-dev-g9xm6.mongodb.net/inbox', { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    const database = client.db('inbox');
    const sendingStatsCollection = database.collection('sendingstats');

    // Define the target date
    const targetDate = DateTime.fromISO('2024-01-01', { zone: 'UTC' });

    // Query the sendingstats collection for records with the specified creation date
    const result = await sendingStatsCollection.find({
      createdAt: {
        $gte: targetDate.startOf('day').toJSDate(),
        $lt: targetDate.endOf('day').toJSDate()
      }
    }).toArray();

    // Process the query result as needed
    console.log(result);
    console.log(" length of result array : ",result.length)
  } finally {
    await client.close();
  }
}

querySendingStats();
