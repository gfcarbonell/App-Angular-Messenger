import { User } from 'src/app/model-interfaces/user';
import { IAuthentication } from '../iauthentication';

export interface IFirebaseAuthentication extends IAuthentication<User> {

}
