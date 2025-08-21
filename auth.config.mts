import { defineConfig } from 'auth-astro';
import bcrypt from 'bcryptjs';
import Credentials from '@auth/core/providers/credentials';
import { db, eq, User } from 'astro:db';

export default defineConfig({
  // TODO:
  providers: [Credentials({
    credentials: {
      email: { label: 'Correo', type: 'email', },
      password: { label: 'Contraseña', type: 'password', }
    },
    authorize: async ({ email, password}) => {
      const [ user ] = await db.select().from(User).where(eq(User.email, email as string));
      if( !user) {
        throw new Error('Usuario no encontrado');
      }

      if(!bcrypt.compareSync(password as string, user.password)) {
        throw new Error('Credenciales Incorrectas');
      }

      const { password: _, ...userInfo} = user;
      return userInfo;
    }
  })],
});