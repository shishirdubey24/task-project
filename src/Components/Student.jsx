import  { useState, useEffect } from "react";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    section: "",
    rollNumber: "",
    age: "",
    address: "",
    contact: "",
    email: "",
    guardian: "",
    admissionDate: "",
    grade: "",
    remarks: "",
  });

  const studentsCollection = collection(db, "students");

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getDocs(studentsCollection);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    await addDoc(studentsCollection, formData);
    setFormData({
      name: "",
      class: "",
      section: "",
      rollNumber: "",
      age: "",
      address: "",
      contact: "",
      email: "",
      guardian: "",
      admissionDate: "",
      grade: "",
      remarks: "",
    });
    setShowModal(false);
    window.location.reload(); // Refresh page to fetch updated list
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "students", id));
    window.location.reload(); // Refresh page to fetch updated list
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student Management</h1>
      <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
        Add Student
      </button>

      {/* Student Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Roll Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.section}</td>
              <td>{student.rollNumber}</td>
              <td>
                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => alert(`Viewing: ${student.name}`)}
                >
                  View
                </button>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => alert(`Editing: ${student.name}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm" 
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Student Modal */}
      {showModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Student</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  {Object.keys(formData).map((key) => (
                    <div className="mb-3" key={key}>
                      <label className="form-label">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        placeholder={`Enter ${key}`}
                      />
                    </div>
                  ))}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Student;
