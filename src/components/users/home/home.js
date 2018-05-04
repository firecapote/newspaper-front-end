import React from 'react';

const HomeUsers = ({name, token}) => {
    const welcomeText = (!token)
        ? "You need Sign in"
        : `Welcome ${name} !!!`;

    return (
        <div>
            <p>{welcomeText}</p>
        </div>
    );
};

export default HomeUsers;