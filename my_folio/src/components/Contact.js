import React from 'react';
import axios from 'axios';
import {Form, Card} from 'react-bootstrap';
import '../styles/contact.scss'


class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''

        }
    }

     handleSubmit(e){
        e.preventDefault();
        // console.log(this.state);
        axios({
            method: 'POST',
            url: "http://localhost:3000/send",
            data: this.state
        }).then((response)=>{
            if(response.data.status === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send")
            }
        })
    }
    resetForm(e){
        this.setState({name: '', email: '', phone: '', message: ''})
    }

    render(){

        return(
            <div className='form-container transitions'>
            <Card  style={{width: '30rem'}} className='card-form'>
                <Form  onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <Form.Group controlId="formName">
                        <Form.Label htmlFor='name'>Name</Form.Label>
                        <Form.Control type="text" placeholder="name" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                    </Form.Group>
                     <Form.Group controlId="formEmail">
                        <Form.Label htmlFor='email-input'>Email</Form.Label>
                        <Form.Control type="email" placeholder="email" aria-describedby="email" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                    </Form.Group>
                     <Form.Group controlId="formPhone">
                        <Form.Label htmlFor='phone-input'>Phone</Form.Label>
                        <Form.Control type="phone" placeholder="phone" aria-describedby="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)}/>
                    </Form.Group>
                     <Form.Group controlId="formMessage">
                        <Form.Label htmlFor='Message'>Message</Form.Label>
                        <Form.Control as="textarea"  rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)}/>
                    </Form.Group>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Card>
        </div>
        )
    }

    onNameChange(e){
        this.setState({name: e.target.value})
    }
    onEmailChange(e){
        this.setState({email: e.target.value})
    }

    onPhoneChange(e){
        this.setState({phone: e.target.value})
    }

    onMessageChange(e){
        this.setState({message: e.target.value})
    }
}

export default Contact;