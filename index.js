const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");
const argv = require("yargs").argv;

// const logList = async () => {
//   console.log(await listContacts());
//   console.log(await getContactById("qdggE76Jtbfd9eWJHrssH"));
//   console.log(await removeContact("drsAJ4SHPYqZeG-83QTVW"));
//   console.log(
//     await addContact(
//       "Karol",
//       "karolcwaniaczek847892@gmail.com",
//       "(748) 206-2688"
//     )
//   );
// };

// logList();

// TODO: refaktor
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(id);
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
