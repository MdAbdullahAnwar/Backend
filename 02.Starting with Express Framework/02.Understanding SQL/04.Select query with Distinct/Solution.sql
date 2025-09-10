Create the enrollments table
CREATE TABLE enrollments (
  student_id INTEGER,
  student_name TEXT,
  course_id INTEGER,
  enrollment_date DATE
);

SELECT DISTINCT course_id FROM enrollments;