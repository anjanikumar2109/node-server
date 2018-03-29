module.exports = (sequelize, Sequelize) => {
    const Department = sequelize.define('Department', {
        name: {
            type: Sequelize.STRING
        }
    });

    Department.associate = (models) => {
        Department.hasMany(models.Employee, { foreignKey: { allowNull: false }, hooks: true });
    };

    return Department;
};
