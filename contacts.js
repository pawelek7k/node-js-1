const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");
const path = require("node:path");

const contactsPath = path.basename(__dirname + "\\contacts.json");

// funkcja zwraca tablice obiektów z pliku contacts.json

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading contacts:", error);
    throw error;
  }
}

// funkcja wyszukuje w tablicy obiektu o id contactId
async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contact = contacts.find((c) => c.id === contactId);
    return contact || null;
  } catch (error) {
    console.error("Error getting contact by ID:", error);
    throw error;
  }
}
// funkcja usuwa kontakt o id contactId
async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const updatedContacts = contacts.filter((c) => c.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    return updatedContacts;
  } catch (error) {
    console.error("Error removing contact:", error);
    throw error;
  }
}

// funkcja dodaje kontakt z danymi, id jest generowane dzięki uuid
async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { id: uuidv4(), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
