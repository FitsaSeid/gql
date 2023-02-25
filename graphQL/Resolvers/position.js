const { student_data } = require('../database')

exports.position = {
    students: (parent, args, context) => {
        const { position_id } = parent;
        return student_data.filter((student) => student.position_id === position_id);
    }
}