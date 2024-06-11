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

function getContactById(contactId) {
  // ...twój kod
}

function removeContact(contactId) {
  // ...twój kod
}

function addContact(name, email, phone) {
  // ...twój kod
}

module.exports = { listContacts };
