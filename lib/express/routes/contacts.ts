import express from 'express';
import GetContacts from '../../application/phonebook/GetContacts';

export default express.Router().get('/phonebook/contacts', async (req, res) => {
  const contacts = await GetContacts.run();

  return res.json(contacts.map((c) => c.toResponse()));
});
