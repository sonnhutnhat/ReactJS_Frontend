import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser && this.props.currentUser !== prevProps.currentUser) {
            let { email, password, firstName, lastName, address } = this.props.currentUser;
            this.setState({
                email: email || '',
                password: password || '',
                firstName: firstName || '',
                lastName: lastName || '',
                address: address || '',
            });
        }
    }

    toggle = () => {
        this.setState({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        });
        this.props.toggle();
    };

    handleInputChange = (event, id) => {
        this.setState({ [id]: event.target.value });
    };

    checkValidateInput = () => {
        return ['email', 'firstName', 'lastName', 'address'].every(field => this.state[field]);
    };

    handleEditUser = () => {
        if (this.checkValidateInput()) {
            this.props.editUser(this.state);
        }
    };

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.toggle} className='model-user-container' size='lg' centered>
                <ModalHeader toggle={this.toggle}>Edit user information</ModalHeader>
                <ModalBody>
                    <div className="input-container">
                        <div className='form-group col-md-6'>
                            <label>Email</label>
                            <input type='email' className='form-control' value={this.state.email} onChange={(event) => this.handleInputChange(event, 'email')} />
                        </div>
                        <div className='form-group col-md-6'>
                            <label>Password</label>
                            <input type='password' className='form-control' value={this.state.password} onChange={(event) => this.handleInputChange(event, 'password')} />
                        </div>
                    </div>

                    <div className="input-container">
                        <div className='form-group col-md-6'>
                            <label>First Name</label>
                            <input type='text' className='form-control' value={this.state.firstName} onChange={(event) => this.handleInputChange(event, 'firstName')} />
                        </div>
                        <div className='form-group col-md-6'>
                            <label>Last Name</label>
                            <input type='text' className='form-control' value={this.state.lastName} onChange={(event) => this.handleInputChange(event, 'lastName')} />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>Address</label>
                        <input type='text' className='form-control' value={this.state.address} onChange={(event) => this.handleInputChange(event, 'address')} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={this.handleEditUser}>
                        Save changes
                    </Button>
                    <Button color="secondary" className='px-3' onClick={this.toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ModalEditUser;
