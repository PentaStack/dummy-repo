const { init, flush, shutdown } = require('ravyn-node');

init({ 
  dsn: 'http://test-key@localhost:8000', 
  service: 'dummy-service', 
  environment: 'development' 
});

async function simulateBug() {
  console.log("Starting DB operation...");
  
  // Simulated Bug
  const error = new Error('DB Timeout Error: Connection failed after 5000ms');
  console.error("Critical failure during DB operation", error);
  
  await flush();
  await shutdown();
  console.log("Log sent to ingestion API");
}

simulateBug();
