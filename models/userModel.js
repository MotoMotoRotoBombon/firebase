import bcrypt from 'bcryptjs';  // Cambié 'require' por 'import'

let users = [
  {
    username: 'admin',
    password: bcrypt.hashSync('12345', 10), // Contraseña encriptada
  },
  {
    username: 'user',
    password: bcrypt.hashSync('password', 10), // Contraseña encriptada
  },
];
function getUserByUsername(username) {
  return users.find((user) => user.username === username);
}

// Exportar por defecto todo el modelo
export default {
  getUserByUsername,
};
