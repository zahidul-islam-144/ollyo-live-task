const personalInfo = [
    {
        id: 1,
        label: 'Name*',
        type: 'text',
        placeholder: "Write your name",
        name: 'nameField',
        for: 'nameField'
    },
    {
        id: 2,
        label: 'Email*',
        type: 'text',
        placeholder: "Write your email",
        name: 'emailField',
        for: 'emailField'
    },
    {
        id: 3,
        label: 'Phone Number',
        type: 'tel',
        placeholder: "Write phone number",
        name: 'phnNumField',
        for: 'phnNumField'
    },
    {
        id: 4,
        label: 'Address',
        type: 'text',
        placeholder: "2464 Royal Ln. Mesa, New Jersey 45463",
        name: 'addressField',
        for: 'addressField'
    },
    {
        id: 5,
        label: 'Hobbies (Max 5)',
        type: 'text',
        placeholder: "hobbies",
        name: 'hobbyField',
        for: 'hobbyField'
    }
]

export const formUtility = {
    personalInfo
}