import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

function Contact() {
    
    const [formData, updateFormData] = useState({
        email: '',
        userName: '',
        companyName: '',
        userRequest: ''
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        updateFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(formData);
        emailjs.send("service_9n1ix2x","template_z8sbk9n", formData, 'IK85_bjVJpYlgI_a-');
        updateFormData((prevState)=> {
            const fd = { ...prevState }
            fd.email = '';
            fd.userName = '';
            fd.companyName = '';
            fd.userRequest = '';
            return fd;
        })
    }

    return (
        <>
            <Form onSubmit={handleSubmit} style={{ maxWidth: "100%"}}>
                                    
                <Form.Group className="mb-3" controlId="emailCId">
                    <Form.Label style={{color: 'white'}}>Please provide your prefered contact email</Form.Label>
                    <Form.Control value={formData.email} placeholder="Email" name='email' onChange={handleFormChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="userNameCId" style={{paddingTop: '1.5rem'}}>
                    <Form.Label style={{color: 'white'}}>Please provide us with your name</Form.Label>
                    <Form.Control value={formData.userName} placeholder="Name" name="userName" onChange={handleFormChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="companyNameCId" style={{paddingTop: '1.5rem'}}>
                    <Form.Label style={{color: 'white'}}>If you are affiliated with a company or orginization please name them below</Form.Label>
                    <Form.Control value={formData.companyName} placeholder="Company Name" name='companyName' onChange={handleFormChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="userRequestCId" style={{ paddingTop: '1.5rem' }}>
                    <Form.Label style={{color: 'white'}}>Let us know what you are inquiring about</Form.Label>
                    <Form.Control as='textarea' value={formData.userRequest} placeholder="Please add as many specifics about your inquiry as possible" style={{height: '300px'}} name='userRequest' onChange={handleFormChange} required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
            </Form>
        </>
    )
}
    

export default Contact


