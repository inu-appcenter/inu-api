import GetContacts from '../../../application/phonebook/GetContacts';
import {defineRoute} from '../../libs/route';

export default defineRoute('get', '/contactgroup', async (req, res) => {
  const contacts = await GetContacts.run();

  return res.json(contacts.map((c) => c.toLegacyResponse()));
});
