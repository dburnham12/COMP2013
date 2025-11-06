import { useState, useEffect } from "react";
import axios from "axios";
import ContactsCardsContainer from "./ContactsCardsContainer";

export default function ContactsApp() {
    // states
    const [contactsData, setContactsData] = useState([]);

    // useEffect
    useEffect(() => {
        handleContactsDB();
    }, []);

    // handlers
    const handleContactsDB = async () => {
        try {
            const response = await axios.get("http://localhost:3000/contacts");
            console.log(response.data);
            setContactsData(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    // render
    return (
        <div>
            <ContactsCardsContainer contacts={contactsData} />
        </div>
    );
}
