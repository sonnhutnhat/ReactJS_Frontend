import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {

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

    toggle = () => {
        this.props.toggle(); // Gọi hàm toggle từ prop
    };

    // Hàm xử lý thay đổi dữ liệu của các input
    handleInputChange = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
    };

    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['email', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    // Hàm này sẽ được gọi khi nhấn nút Add new
    handleAddNewUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            this.props.createNewUser(this.state);
        }
    };

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={this.toggle}
                className='model-user-container'
                size='lg'
                centered
            >
                <ModalHeader toggle={this.toggle}>Create a new user</ModalHeader>
                <ModalBody >
                    <div className="input-container">
                        <div className='form-group col-md-6'>
                            <label>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                value={this.state.email}
                                onChange={(event) => this.handleInputChange(event, 'email')}
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <label>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                name='password'
                                value={this.state.password}
                                onChange={(event) => this.handleInputChange(event, 'password')}
                            />
                        </div>
                    </div>

                    <div className="input-container">
                        <div className='form-group col-md-6'>
                            <label>First Name</label>
                            <input
                                type='text'
                                className='form-control'
                                name='firstName'
                                value={this.state.firstName}
                                onChange={(event) => this.handleInputChange(event, 'firstName')}
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <label>Last Name</label>
                            <input
                                type='text'
                                className='form-control'
                                name='lastName'
                                value={this.state.lastName}
                                onChange={(event) => this.handleInputChange(event, 'lastName')}
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>Address</label>
                        <input
                            type='text'
                            className='form-control'
                            name='address'
                            value={this.state.address}
                            onChange={(event) => this.handleInputChange(event, 'address')}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className='px-3'
                        onClick={this.handleAddNewUser}
                    >
                        Add new
                    </Button>{' '}
                    <Button
                        color="secondary"
                        className='px-3'
                        onClick={this.toggle}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ModalUser;