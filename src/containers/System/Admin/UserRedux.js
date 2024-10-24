import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from "../../../services/userService"
import { languages } from "../../../utils"
import * as actions from "../../../store/actions";
import './UserRedux.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: ''
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    handleOnChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log('value', this.state)
    }

    handleOnChangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImgURL: objectUrl,
                avatar: file
            })
        }
    }
    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({
            isOpen: true
        })
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;

        // Tạo object data mà không bao gồm password để log
        const dataToLog = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phonenumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positonID: this.state.position
        };

        console.log('Current state:', dataToLog); // Log data không có password

        // Vẫn gửi đầy đủ data bao gồm password tới action
        this.props.createNewUser({
            ...dataToLog,
            password: this.state.password
        });
    }
    checkValidateInput = () => {
        let isValid = true;
        let arrFields = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address', 'gender', 'position', 'role'];
        for (let i = 0; i < arrFields.length; i++) {
            if (!this.state[arrFields[i]]) {
                isValid = false;
                alert('this input emty' + arrFields[i])
                break;
            }
        }
        return isValid;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }
    render() {
        let { genderArr, positionArr, roleArr } = this.state;
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;
        let isLoadingPosition = this.props.isLoadingPosition;
        let isLoadingRole = this.props.isLoadingRole;
        return (
            <div className='user-redux-container'>
                <div className='title text-center'>
                    LEARN REACT-REDUX
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'><FormattedMessage id="menu.manage-user.add" /></div>
                            <div>{isLoadingGender === true ? 'Loading genders' : ''}</div>
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
                                    <option value="">Choose...</option>
                                    {genderArr && genderArr.length > 0 &&
                                        genderArr.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>
                                                    {language === languages.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            {/* Position Select */}
                            <div className='col-3'>
                                <label><FormattedMessage id="menu.manage-user.position" /></label>
                                {isLoadingPosition === true ? 'Loading positions' : ''}
                                <select
                                    className="form-control"
                                    name="position"
                                    value={this.state.position}
                                    onChange={this.handleOnChangeInput}
                                >
                                    <option value="">Choose...</option>
                                    {positionArr && positionArr.length > 0 &&
                                        positionArr.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>
                                                    {language === languages.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            {/* Role Select */}
                            <div className='col-3'>
                                <label><FormattedMessage id="menu.manage-user.role" /></label>
                                {isLoadingRole === true ? 'Loading roles' : ''}
                                <select
                                    className="form-control"
                                    name="role"
                                    value={this.state.role}
                                    onChange={this.handleOnChangeInput}
                                >
                                    <option value="">Choose...</option>
                                    {roleArr && roleArr.length > 0 &&
                                        roleArr.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>
                                                    {language === languages.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="menu.manage-user.image" /></label>
                                <div className='preview-img-container'>
                                    <input
                                        id='previewImg'
                                        type="file"
                                        name="avatar"
                                        hidden
                                        onChange={(event) => this.handleOnChangeImage(event)}
                                    />
                                    <label className='label-upload' htmlFor='previewImg'>Tải ảnh <i class="fas fa-upload"></i></label>
                                    <div className='preview-img'
                                        style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                        onClick={() => this.openPreviewImage()}
                                    >

                                    </div>
                                </div>
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
                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}

                    />
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender,
        isLoadingPosition: state.admin.isLoadingPosition,
        isLoadingRole: state.admin.isLoadingRole
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);