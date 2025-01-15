const students = ['John', 'Jane', 'Jack', 'Jill', 'James']; //data structure

const findSpecificStudent = (allStudents, studentName) => {
	for (let i = 0; i < allStudents.length; i++) {
		if (allStudents[i].toLowerCase() === studentName.toLowerCase()) {
			return studentName;
		}
	}

	return 'Student not found';
};
//algorithms

console.log(findSpecificStudent(students, 'ex'));
console.log(findSpecificStudent(students, 'James'));

const students = ['John', 'Jane', 'Jack', 'Jill', 'James']; //data structure

const find = (allStudents, studentName) => {
	return allStudents.find((student) => student.toLowerCase() === studentName.toLowerCase())
		? studentName
		: 'Student not found';
};

console.log(find(students, 'ex'));
console.log(find(students, 'James'));

//become a great problem solver
