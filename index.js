const {
  listContacts,
  getContactById,
  removeContact,
} = require("./contacts.js");

const logList = async () => {
  console.log(await listContacts());
  console.log(await getContactById("qdggE76Jtbfd9eWJHrssH"));
};

logList();
