const fs = require("fs").promises;
const path = require("node:path");

const contactsPath = path.basename(__dirname + "\\contacts.json");

// TODO: udokumentuj każdą funkcję
async function listContacts() {
  try {
    const results = await fs.readFile(contactsPath);
    return results.toString();
  } catch (e) {
    return e;
  }
}

async function getContactById(contactId) {
  try {
    const contacts = JSON.parse(await listContacts());
    const contact = contacts.find((c) => c.id === contactId);
    return contact;
  } catch (e) {
    return e;
  }
}

function removeContact(contactId) {
  // ...twój kod
}

function addContact(name, email, phone) {
  // ...twój kod
}

module.exports = { listContacts, getContactById, removeContact };
