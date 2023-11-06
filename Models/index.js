import Role from "./Role.js";
import User from "./User.js";

Role.hasMany(User, {
  foreignKey: "roleId",
  //   onDelete: "RESTRICT",
});
User.belongsTo(Role, { foreignKey: "roleId" });

// Role.hasMany(User);
// User.belongsTo(Role);

export { Role, User };
