import { DataTypes, Model } from 'sequelize';
import connection from '../connection/connection.js';
import bcrypt from 'bcrypt'
class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'No tiene formato de email',
        },
      },
    },
    salt: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accessToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    modelName: 'User',
  }
);

User.beforeCreate(async(user)=>{
  const salt = await bcrypt.genSalt()
  user.salt = salt

  const hashPassword = await bcrypt.hash(user.password, salt)
  user.password = hashPassword
})

export default User;
