const models = require('../model');

const seed = () => {
    const { Employee, Department } = models;
    Department.create({ name: 'D1' })
        .then((department) => {
            Employee.create({ firstName: 'E', lastName: '1', DepartmentId: department.id })
                .then((employee) => {
                    department.destroy().then(() => {
                        Employee.findById(employee.id).then((employee) => {
                            console.log(employee);
                        })
                    });
                });
        });
};

module.exports = seed;