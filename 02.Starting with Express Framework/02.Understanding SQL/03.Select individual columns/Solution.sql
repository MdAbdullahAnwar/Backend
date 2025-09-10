CREATE TABLE enrollments (
  student_id INTEGER,
  student_name TEXT,
  course_id INTEGER,
  enrollment_date DATE
);


SELECT student_name, course_id, enrollment_date FROM enrollments;