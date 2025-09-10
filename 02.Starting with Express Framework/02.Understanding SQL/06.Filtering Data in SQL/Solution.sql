Create the students table
CREATE TABLE students (
  student_id INTEGER PRIMARY KEY,
  student_name TEXT NOT NULL,
  gender TEXT NOT NULL,
  course_id INTEGER NOT NULL
);

SELECT student_name FROM students WHERE gender = "F";