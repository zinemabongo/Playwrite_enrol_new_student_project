export interface UserCredential {
  email: string;
  password: string;
}

export const validUsers: Record<string, UserCredential> = {
  adminUser: {
    email: 'admin@gmail.com',
    password: '@12345678'
  },

  registeredUser: {
    email: 'zine.mabongo@gmail.com',
    password: 'Mabongo@1'
  },

};