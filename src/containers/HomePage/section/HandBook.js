import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';


class HandBook extends Component {

    render() {

        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='section-title'>Cẩm nang</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook' />
                                <div>Tai Mũi Họng</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook' />
                                <div>Cột sống</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook' />
                                <div>Y học Cổ truyền</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook' />
                                <div>Chăm cứu</div>
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
