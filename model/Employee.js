module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('Employee', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    });

    Employee.associate = (models) => {
        Employee.belongsTo(models.Department, { foreignKey: { allowNull: false } });
    };

    return Employee;
};
