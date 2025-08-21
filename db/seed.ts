import { db, Role, User  } from 'astro:db';
import bcrypt from 'bcryptjs';
import { v4 as UUID } from 'uuid';

// https://astro.build/db/seed
export default async function seed() {

	const roles = [
		{ id: 'admin', name: 'Administrador' },
		{ id: 'member', name: 'Member' },
		{ id: 'pastor', name: 'Pastor' }
	]

	const eduardoVargas = {
		id: UUID(),
		name: 'Eduardo Vargas',
		email: 'eduardovargas@gmail.com',
		password: bcrypt.hashSync('1234'),
		role: 'pastor'
	}

	const sergioOrozco = {
		id: UUID(),
		name: 'Sergio Orozco',
		email: 'sergioa.orozcoo@gmail.com',
		password: bcrypt.hashSync('...Chechodg1...'),
		role: 'admin'
	}

	await db.insert(Role).values(roles);
	await db.insert(User).values([eduardoVargas, sergioOrozco]);
}
