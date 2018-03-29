module.exports = (sequelize, Sequelize) => {
    const Function = sequelize.define('Function', {
        name: {
            type: Sequelize.STRING
        }
    });

    Function.associate = (models) => {
        Function.belongsTo(models.Department);
    };

    return Function;
};
