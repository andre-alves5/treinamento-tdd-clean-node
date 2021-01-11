import { AccountModel } from '../models/account'

export interface LoadAccountByToken {
  load: (accountToken: string, role?: string) => Promise<AccountModel>
}
