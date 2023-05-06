const { db } = require('../firebase')

exports.getStudentData = async (req, res) => {
  const studentID = req.params.id;

  const studentsRef = db.collection('students');
  const query = studentsRef.where('studentID', '==', studentID.toString());

  try {
    const user = await query.get();

    res.status(201).json({
      message: 'Found student',
      data: user.docs[0].data(),
    });
  } catch (err) {
    console.error(`Error! No student with studentID: ${studentID} found`, err);
    res.status(500).json({
      message: 'Unable to find student',
      error: err.message,
    });
  }
};