const { listContacts } = require("./contacts.js");

const logList = async () => {
  console.log(await listContacts());
};

logList();
