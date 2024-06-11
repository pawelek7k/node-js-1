const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");
const yargs = require("yargs");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      try {
        const contacts = await listContacts();
        console.log(contacts);
      } catch (error) {
        console.error("Failed to list contacts:", error);
      }
      break;

    case "get":
      try {
        const contact = await getContactById(id);
        console.log(contact);
      } catch (error) {
        console.error("Failed to get contact:", error);
      }
      break;

    case "add":
      try {
        const newContact = await addContact(name, email, phone);
        console.log(newContact);
      } catch (error) {
        console.error("Failed to add contact:", error);
      }
      break;

    case "remove":
      try {
        const updatedContacts = await removeContact(id);
        console.log(updatedContacts);
      } catch (error) {
        console.error("Failed to remove contact:", error);
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const action = argv._[0];
invokeAction({ action, ...argv });
