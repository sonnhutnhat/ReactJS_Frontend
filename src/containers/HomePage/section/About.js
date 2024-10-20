import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về BookingCare
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="350"
                            src="https://www.youtube.com/embed/RpqjD9kfy-o"
                            title="(MIXICITY 2024 #4) PHÔN LÀ VÀ ĐẠI CA HUY LÀM THỢ MỎ VỚI NHỮNG ĐIỂM ĐỎ BẤT HỢP PHÁP"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện cung cấp nền tảng công nghệ giúp bệnh nhân dễ dàng lựa chọn đúng bác sĩ từ mạng lưới bác sĩ chuyên khoa giỏi, với thông tin đã xác thực và đặt lịch nhanh chóng. BookingCare là nền tảng kết nối mạng lưới bác sĩ giỏi ở nhiều bệnh viện, phòng khám khác nhau.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);