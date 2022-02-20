import UseCase from '../../common/base/UseCase';
import Contact from './entity/Contact';
import ContactRepository from './data/ContactRepository';

/**
 * 교내 연락처를 주욱 가져옵니다.
 */
class GetContacts extends UseCase<void, Contact[]> {
  constructor(private readonly contactRepository: ContactRepository) {
    super();
  }

  async onExecute(params: void): Promise<Contact[]> {
    console.log('연락처를 모두 가져옵니다.');

    return await this.contactRepository.getContacts();
  }
}

export default new GetContacts(new ContactRepository());
