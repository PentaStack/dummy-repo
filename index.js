const { init, flush, shutdown } = require('ravyn');

init({ 
  dsn: 'http://test-key@localhost:8000', 
  service: 'dummy-service', 
  environment: 'development' 
});

const { fetchUser } = require('./user-service');

async function simulateBug() {
  console.log("Starting web request handler...");
  
  try {
    const user = await fetchUser(101);
    console.log("Fetched user", user);
  } catch (error) {
    // Simulated Bug
    console.error("Uncaught exception in web handler", error);
  }
  
  await flush();
  await shutdown();
  console.log("Log sent to ingestion API");
}

simulateBug();
