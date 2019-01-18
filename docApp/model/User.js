import Doctor from './Doctor';
import Patient from './Patient';
class User {
    constructor(doctor , patient ){
        this.doctor = new Doctor(doctor.id,doctor.email,doctor.password,doctor.userName,doctor.phone,doctor.type,doctor.education,doctor.experience,
                                     doctor.charges,doctor.availability,doctor.category);
        this.patient = new Patient(patient.id,patient.email,patient.password,patient.userName,patient.phone,patient.type);
    }
}
export default User;