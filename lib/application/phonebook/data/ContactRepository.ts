import BaseOracleRepository from '../../../common/base/BaseOracleRepository';
import Contact from '../entity/Contact';

export default class ContactRepository extends BaseOracleRepository {
  async getContacts(): Promise<Contact[]> {
    const sql = `
      select 
         nm as name, 
         job_div as position, 
         offi_tel_no as phone, 
         dpt_nm as dpart, 
         univ_nm as part 
      from 
          v_campus_tel_no, v_org 
      where 
          v_campus_tel_no.dpt_cd = v_org.dpt_cd
    `;

    const result = await this.execute(sql);

    // @ts-ignore
    return result.rows?.map((row) => Contact.fromRow(row)) ?? [];
  }
}
