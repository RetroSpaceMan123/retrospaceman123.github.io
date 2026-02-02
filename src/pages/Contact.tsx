function Contact() {
    return (
        <>
            <h2>Contact Me</h2>
            <p>Please fill out this form if you wish to contact me. Please leave you email and contact information below so I can respond when I can.</p>
            <form action="https://formsubmit.co/retrospaceman123@gmail.com" method="POST">
                <input type="hidden" name="_next" value={'https://' + window.location.host + '/#/success'}/>
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" placeholder="Your Name" required /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" name="email" placeholder="your@email.com" required /><br />
                <label htmlFor="phone">Phone Number</label><br />
                <input type="tel" id="phone" name="phone" placeholder="555-555-5555" required /><br />
                <label htmlFor="info">Message</label><br />
                <textarea id="info" name="info" rows={10} cols={60} placeholder="Your message goes here" required></textarea><br />
                <button type="submit">Send</button>
            </form>
        </>
    )
}

export default Contact;