import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, creatNewUserService, editUserService, deleteUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            currentUser: {}, // Trạng thái lưu thông tin người dùng đang chỉnh sửa
        };
    }

    async componentDidMount() {
        await this.getAllUserFromReact();
        console.log('Current User:', this.props.currentUser);
    }

    getAllUserFromReact = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            });
        }
    }

    toggleModalUser = () => {
        this.setState({ isOpenModalUser: !this.state.isOpenModalUser });
    }

    toggleModalEditUser = () => {
        this.setState({ isOpenModalEditUser: !this.state.isOpenModalEditUser });
    }

    handleAddNewUser = () => {
        this.toggleModalUser();
    }

    createNewUser = async (data) => {
        try {
            let response = await creatNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage);
            } else {
                await this.getAllUserFromReact();
                this.setState({ isOpenModalUser: false });
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleEditUser = (user) => {
        this.setState({ currentUser: user, isOpenModalEditUser: true });
    }

    editUser = async (data) => {
        try {
            // Thêm ID vào dữ liệu
            data.id = this.state.currentUser.id;
            let response = await editUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage);
            } else {
                await this.getAllUserFromReact();
                this.setState({ isOpenModalEditUser: false });
            }
        } catch (e) {
            console.log(e);
        }
    }


    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUserService(user.id);
            if (res && res.errCode === 0) {
                alert('User deleted successfully');
                await this.getAllUserFromReact();
            } else {
                alert('Error deleting user: ' + res.errMessage);
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let arrUsers = this.state.arrUsers;

        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggle={this.toggleModalUser}
                    createNewUser={this.createNewUser}
                />
                <ModalEditUser
                    isOpen={this.state.isOpenModalEditUser}
                    toggle={this.toggleModalEditUser}
                    currentUser={this.state.currentUser}
                    editUser={this.editUser}
                />
                <div className='title text-center'>Manage user</div>
                <div className='mx-1'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={this.handleAddNewUser}
                    >
                        <i className="fas fa-user-plus" style={{ paddingRight: '5px' }}></i>
                        Add new users
                    </button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                            {
                                arrUsers && arrUsers.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className='btn_edit' onClick={() => this.handleEditUser(item)}>
                                                    <i className="far fa-edit"></i>
                                                </button>
                                                <button className='btn_delete' onClick={() => this.handleDeleteUser(item)}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(UserManage);
