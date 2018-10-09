CREATE TABLE client (
  clientId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  clientName VARCHAR(250) NOT NULL,
  clientDescription VARCHAR(1000) NOT NULL,
  gicsSector VARCHAR(50) NOT NULL,
  gicsSubIndustry VARCHAR(50) NOT NULL,
  headquarters VARCHAR(50) NOT NULL
);

CREATE TABLE sensor (
  sensorId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  sensorName VARCHAR(50) NOT NULL,
  sensorDescription VARCHAR(500) NOT NULL,
  manufacturer VARCHAR(50) NOT NULL,
  totalLifeExpentancyHours INT NOT NULL
);

CREATE TABLE turbine (
  turbineId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  turbineName VARCHAR(25) NOT NULL,
  turbineDescription VARCHAR(250) NOT NULL,
  capacity INT NOT NULL,
  rampUpTime INT NOT NULL,
  maintenanceInterval INT NOT NULL
);

CREATE TABLE site (
  siteId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  siteName VARCHAR(30) NOT NULL,
  siteDescription VARCHAR(500) NOT NULL,
  primaryContact VARCHAR(20) NOT NULL,
  capacity INT NOT NULL,
  commercialDate DATE NOT NULL,
  addrLine1 VARCHAR(50) NOT NULL,
  addrLine2 VARCHAR(50),
  addrCity VARCHAR(30) NOT NULL,
  addrState VARCHAR(5) NOT NULL,
  addrZip INT NOT NULL,
  addrCountry VARCHAR(5) NOT NULL,
  clientId INT FOREIGN KEY REFERENCES client(clientId)
);

CREATE TABLE turbineDeployed (
  turbineDeployedId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  serialNumber VARCHAR (50) NOT NULL,
  deployedDate DATE NOT NULL,
  totalFiredHours INT NOT NULL,
  totalStarts INT NOT NULL,
  lastPlannedOutageDate DATE NOT NULL,
  lastUnplannedOutageDate DATE,
  turbineId INT FOREIGN KEY REFERENCES turbine(turbineId),
  siteId INT FOREIGN KEY REFERENCES site(siteId)
  );

CREATE TABLE sensorDeployed (
  sensorDeployedId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  serialNumber VARCHAR (50),
  deployedDate DATE,
  sensorId INT FOREIGN KEY REFERENCES sensor(sensorId),
  turbineDeployedId INT FOREIGN KEY REFERENCES turbineDeployed(turbineDeployedId)
);

CREATE TABLE sensorTimeSeries (
  dataCollectedDate DATE NOT NULL,
  output DECIMAL(25,15) NOT NULL,
  heatRate DECIMAL(25,15) NOT NULL,
  compressorEfficiency DECIMAL(25,15) NOT NULL,
  availability DECIMAL(25,15) NOT NULL,
  reliability DECIMAL(25,15) NOT NULL,
  firedHours DECIMAL(25,15) NOT NULL,
  trips INT NOT NULL,
  starts INT NOT NULL,
  sensorDeployedId INT FOREIGN KEY REFERENCES sensorDeployed(sensorDeployedId)
);
