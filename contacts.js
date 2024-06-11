const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");
const path = require("node:path");

const contactsPath = path.basename(__dirname + "\\contacts.json");

// funkcja zwraca tablice obiektów z pliku contacts.json
async function listContacts() {
  try {
    const results = await fs.readFile(contactsPath);
    return results.toString();
  } catch (e) {
    return e;
  }
}

// funkcja wyszukuje w tablicy obiektu o id contactId
async function getContactById(contactId) {
  try {
    const contacts = JSON.parse(await listContacts());
    const contact = contacts.find((c) => c.id === contactId);
    return contact;
  } catch (e) {
    return e;
  }
}

// funkcja usuwa kontakt o id contactId
async function removeContact(contactId) {
  try {
    const contacts = JSON.parse(await listContacts());
    const contact = contacts.filter((c) => c.id !== contactId);
    return contact;
  } catch (e) {
    return e;
  }
}

// funkcja dodaje kontakt z danymi, id jest generowane dzięki uuid
async function addContact(name, email, phone) {
  try {
    const contacts = JSON.parse(await listContacts());
    const contact = contacts.push({ id: uuidv4(), name, email, phone });
    return contacts;
  } catch (e) {
    return e;
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
