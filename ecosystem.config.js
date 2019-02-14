module.exports = {
  apps: [{
    name: "app",
    script: "./server.js",
    env: {
	DB_HOST: "vanessacelis.cm6hb8mfglop.us-east-1.rds.amazonaws.com",
	DB_NAME: "Vane_RDS",
	DB_USER: "VanessaCelis",
	DB_PASS: "Luciano0.",
	PORT: "3000"
    }
  }]
}
