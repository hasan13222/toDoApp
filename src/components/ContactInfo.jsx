const Contact  = (contactInfo) => {
    return(
            <div className="contact_info">
                <p><strong>Email: </strong>{contactInfo.mail}</p>
                <p><strong>Phone: </strong>{contactInfo.phone}</p>
            </div>
    );
}


export default Contact;