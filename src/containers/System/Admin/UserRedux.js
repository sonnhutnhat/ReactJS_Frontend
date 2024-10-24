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
            isOpen: false
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
        // try {
        //     let res = await getAllCodeService('gender');
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        //     console.log('aaa', res)
        // } catch (e) {
        //     console.log(e);
        // }
    }

    handleOnChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleOnChangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImgURL: objectUrl
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
        console.log('Current state:', this.state);
        // Add your save logic here
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
                                    {genderArr && genderArr.length > 0 &&
                                        genderArr.map((item, index) => {
                                            return (
                                                <option key={index}>{language === languages.VI ? item.valueVi : item.valueEn}</option>

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
                                                <option key={index} value={item.keyMap}>
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
                                                <option key={index} value={item.keyMap}>
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
        getRoleStart: () => dispatch(actions.fetchRoleStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);