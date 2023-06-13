const skills  = (contactInfo) => {
    return(
        <div className="skills">
        <h2>My Skills:</h2>
        <ul>
            {contactInfo.skills.map(skill => (
                <li key={skill}>{skill}</li>
            ))}
        </ul>
    </div>
    );
}

export default skills;