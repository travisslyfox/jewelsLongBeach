import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contact() {
    
    const [formData, updateFormData] = useState({
        uName: 'uName',
        cName: 'cName',
        uReq: 'uReq'
    });

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(e);
        updateFormData((prevState)=> {
            const fd = { ...prevState }
            fd.uName = prevState.uName;
            fd.cName = prevState.cName;
            fd.uReq = prevState.uReq;
            return fd;
        })
    }

    return (
        <>
            <h1>
                { formData.uName}
            </h1>
            <h1>
                { formData.cName}
            </h1>
            <h1>
                { formData.uReq}
            </h1>

            <Form onSubmit={handleSubmit}>
                    
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label style={{color: 'white'}}>Please provide us with your name</Form.Label>
                    <Form.Control type="name" placeholder="Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formComanyName" style={{paddingTop: '1.5rem'}}>
                    <Form.Label style={{color: 'white'}}>If you are affiliated with a company or orginization please name them below</Form.Label>
                    <Form.Control type="text" placeholder="Company Name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUserRequest" style={{ paddingTop: '1.5rem' }}>
                    <Form.Label style={{color: 'white'}}>Let us know what you are inquiring about</Form.Label>
                    <Form.Control type="textarea" style={{height: '300px'}} required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
            </Form>
        </>
    )
}
    

export default Contact


