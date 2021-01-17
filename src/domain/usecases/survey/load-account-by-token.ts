import { AccountModel } from '@/domain/models/account'

export interface LoadAccountByToken {
  load: (accountToken: string, role?: string) => Promise<AccountModel>
}
