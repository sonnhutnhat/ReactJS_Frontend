import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from "../../../services/userService"
import { languages } from "../../../utils"
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            position: '',
            role: '',
            avatar: ''
        }
    }

    async componentDidMount() {
        try {
            let res = await getAllCodeService('gender');
            if (res && res.errCode === 0) {
                this.setState({
                    genderArr: res.data
                })
            }
            console.log('aaa', res)
        } catch (e) {
            console.log(e);
        }
    }

    handleOnChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleOnChangeImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            this.setState({
                avatar: file
            });
        }
    }

    handleSaveUser = () => {
        console.log('Current state:', this.state);
        // Add your save logic here
    }

    render() {
        console.log("abc", this.state)
        let genders = this.state.genderArr;
        let language = this.props.language;
        return (
            <div className='user-redux-container'>
                <div className='title text-center'>
                    LEARN REACT-REDUX
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'><FormattedMessage id="menu.manage-user.add" /></div>
                            <div className='col-3'>
                                <label><FormattedMessage id="menu.manage-user.email" /></label>
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleOnChangeInput}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="menu.manage-user.password" /></label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleOnChangeInput}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="menu.manage-user.first-name" /></label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleOnChangeInput}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="menu.manage-user.last-name" /></label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleOnChangeInput}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="menu.manage-user.phone-number" /></label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="phoneNumber"
                                    value={this.state.phoneNumber}
                                    onChange={this.handleOnChangeInput}
                                />
                            </div>
                            <div className='col-9'>
                                <label><FormattedMessage id="menu.manage-user.address" /></label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.handleOnChangeInput}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="menu.manage-user.gender" /></label>
                                <select
                                    className="form-control"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={this.handleOnChangeInput}
                                >
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index}>{language === languages.VI ? item.valueVi : item.valueEn}</option>

                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="menu.manage-user.position" /></label>
                                <select
                                    className="form-control"
                                    name="position"
                                    value={this.state.position}
                                    onChange={this.handleOnChangeInput}
                                >
                                    <option value="">Choose...</option>
                                    <option value="P0">Bác sĩ</option>
                                    <option value="P1">Thạc sĩ</option>
                                    <option value="P2">Tiến sĩ</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="menu.manage-user.role" /></label>
                                <select
                                    className="form-control"
                                    name="role"
                                    value={this.state.role}
                                    onChange={this.handleOnChangeInput}
                                >
                                    <option value="">Choose...</option>
                                    <option value="R1">Admin</option>
                                    <option value="R2">Doctor</option>
                                    <option value="R3">Patient</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="menu.manage-user.image" /></label>
                                <input
                                    className="form-control-file"
                                    type="file"
                                    name="avatar"
                                    onChange={this.handleOnChangeImage}
                                />
                            </div>
                            <div className='col-12 mt-3'>
                                <button
                                    className="btn btn-primary"
                                    onClick={this.handleSaveUser}
                                >
                                    <FormattedMessage id="menu.manage-user.save" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);