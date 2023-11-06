import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model {}

Role.init(
  {
    roleName: {
      type: DT.STRING(50),
      // allowNull: false,
      defaultValue: "user",
      unique: true,
    },
  },
  {
    sequelize: connection,
    modelName: "Role",
  }
);

export default Role;
