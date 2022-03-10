import CompanyModel from './company-model';

export default interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: CompanyModel;
}
