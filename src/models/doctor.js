export const typeofDoctor = {
    id: 0,
    userType: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    designation: "",
    dateOfBirth: "",
    phone: "",
    address: "",
    specialty: "",
    services: [],
    experience: "",
    dateAdded: "",
    status: "Declined",
};

export class Doctor {
    constructor({
        id,
        userType,
        firstName,
        lastName,
        email,
        gender,
        designation,
        dateOfBirth,
        phone,
        address,
        specialty,
        services,
        experience,
        dateAdded,
        status,
    }) {
        this.id = id;
        this.userType = userType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.designation = designation;
        this.dateOfBirth = dateOfBirth;
        this.phone = phone;
        this.address = address;
        this.specialty = specialty;
        this.services = services;
        this.experience = experience;
        this.dateAdded = dateAdded;
        this.status = status;
    }
}
