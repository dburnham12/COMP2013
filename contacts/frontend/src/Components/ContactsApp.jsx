import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ContactsCardsContainer from "./ContactsCardsContainer";
import ContactForm from "./ContactForm";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function ContactsApp() {
    // states
    const [contactsData, setContactsData] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        image: "",
    });
    const [postResponse, setPostResponse] = useState({ message: "", date: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(() => {
        const jwtToken = Cookies.get("jwt-authorization");
        if (!jwtToken) {
            return "";
        }
        try {
            const decodedToken = jwtDecode(jwtToken);
            return decodedToken.username;
        } catch {
            return "";
        }
    });

    const navigate = useNavigate();

    // useEffect
    useEffect(() => {
        handleContactsDB();
    }, [postResponse]);

    useEffect(() => {
        if (!currentUser) navigate("/not-authorized");
    }, []);

    // Logout handler
    const handleLogout = () => {
        Cookies.remove("jwt-authorization");
        setCurrentUser("");
        navigate("/");
    };

    // GET Data from DB handler
    const handleContactsDB = async () => {
        try {
            const response = await axios.get("http://localhost:3000/contacts");
            setContactsData(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleResetForm = () => {
        setFormData({
            name: "",
            email: "",
            address: "",
            phone: "",
            image: "",
        });
    };

    // Handle the submission of data
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                handleOnUpdate(formData._id);
                handleResetForm();
                setIsEditing(false);
            } else {
                await axios
                    .post("http://localhost:3000/contacts", formData)
                    .then((response) => setPostResponse(response.data))
                    .then(() => handleResetForm());
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    // Handle the onChange event for the form
    const handleOnChange = (e) => {
        setFormData((prevData) => {
            return { ...prevData, [e.target.name]: e.target.value };
        });
    };

    // Handle to delete one contact by id
    const handleOnDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/contacts/${id}`);
            setPostResponse(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleOnEdit = async (id) => {
        try {
            const contactToEdit = await axios.get(`http://localhost:3000/contacts/${id}`);
            setFormData({
                name: contactToEdit.data.name,
                phone: contactToEdit.data.contact.phone,
                email: contactToEdit.data.contact.email,
                address: contactToEdit.data.contact.address,
                image: contactToEdit.data.image,
                _id: contactToEdit.data._id,
            });
            setIsEditing(true);
        } catch (error) {
            console.log(error);
        }
    };

    // Handle updating the api patch route
    const handleOnUpdate = async (id) => {
        try {
            const result = await axios.patch(`http://localhost:3000/contacts/${id}`, formData);
            setPostResponse({ message: result.data.message, date: result.data.date });
        } catch (error) {
            console.log(error);
        }
    };

    // render
    return (
        <div>
            <div className="ContactsHeader">
                <h2>Welcome {currentUser}</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <ContactForm
                name={formData.name}
                email={formData.email}
                address={formData.address}
                phone={formData.phone}
                image={formData.image}
                handleOnSubmit={handleOnSubmit}
                handleOnChange={handleOnChange}
                isEditing={isEditing}
            />
            <p style={{ color: "green" }}>{postResponse.message}</p>
            <ContactsCardsContainer
                contacts={contactsData}
                handleOnDelete={handleOnDelete}
                handleOnEdit={handleOnEdit}
            />
        </div>
    );
}
