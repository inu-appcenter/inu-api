import express from 'express';
import GetContacts from '../../application/phonebook/GetContacts';
import {asyncHandler} from '../middleware/asyncHandler';

export default express.Router().get(
  '/phonebook/contacts',
  asyncHandler(async (req, res) => {
    const contacts = await GetContacts.run();

    return res.json(contacts.map((c) => c.toResponse()));
  })
);
