const { student_data, position_list } = require('../database')


exports.Query = {
    students: () => {
        return student_data
    },

    student: (parent, args, context) => {
        const stud_id = args.id;
        const student = student_data.find(item => item.id === stud_id);

        return student;
    },

    stud: (parent, args, context) => {
        console.log(args)
        const { f_name } = args;

        let filtered_student = new Array;
        student_data.find((student) => {
            if (student.f_name === f_name) {
                filtered_student.push(student)
            }
        })

        return filtered_student;
    },

    positions: () => {
        return position_list;
    },

    position: (parent, args, context) => {
        const { id } = args;
        return position_list.find(position => id === position.position_id)
    }
}