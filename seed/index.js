const models = require('../model');

const seed = async () => {
    const { Employee, Department, Function } = models;
    const department = await Department.create({ name: 'D1' });
    const employee = await Employee.create({ firstName: 'E', lastName: '1', DepartmentId: department.id });
    const f = await Function.create({ name: 'F', DepartmentId: department.id });
    await department.destroy();
    const emp = await Employee.findById(employee.id);
    console.log(`Employee ${emp}`);
    const f1 = await Function.findById(f.id);
    console.log(`Function ${f1}`);
};

module.exports = seed;