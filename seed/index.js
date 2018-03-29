const models = require('../model');

const seed = () => {
    const { Employee, Department, Function } = models;
    Department.create({ name: 'D1' })
        .then((department) => {
            Employee.create({ firstName: 'E', lastName: '1', DepartmentId: department.id })
                .then((employee) => {
                    Function.create({ name: 'F'}).then((f) => {
                        department.destroy().then(() => {
                            Employee.findById(employee.id).then((employee) => {
                                console.log(`Employee ${employee}`);
                                Function.findById(f.id).then((f1) => {
                                    console.log(`Function ${f1}`);
                                });
                            })
                        });
                    });

                });
        });
};

module.exports = seed;