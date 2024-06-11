const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

const logList = async () => {
  console.log(await listContacts());
  console.log(await getContactById("qdggE76Jtbfd9eWJHrssH"));
  console.log(await removeContact("drsAJ4SHPYqZeG-83QTVW"));
  console.log(
    await addContact(
      "Karol",
      "karolcwaniaczek847892@gmail.com",
      "(748) 206-2688"
    )
  );
};

logList();
