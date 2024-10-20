import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {
    render() {
        return (
            <footer className="home-footer">
                <section className="social-section">
                    <div className="social-text">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div className="social-links">
                        <a href="" className="social-link">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="social-link">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="social-link">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="social-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="social-link">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="social-link">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section className="main-footer">
                    <div className="footer-container">
                        <div className="footer-content">
                            <div className="footer-section">
                                <h6 className="footer-title">
                                    <i className="fas fa-gem"></i>
                                    Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="footer-section">
                                <h6 className="footer-title">Products</h6>
                                <p><a href="#">Angular</a></p>
                                <p><a href="#">React</a></p>
                                <p><a href="#">Vue</a></p>
                                <p><a href="#">Laravel</a></p>
                            </div>

                            <div className="footer-section">
                                <h6 className="footer-title">Useful links</h6>
                                <p><a href="#">Pricing</a></p>
                                <p><a href="#">Settings</a></p>
                                <p><a href="#">Orders</a></p>
                                <p><a href="#">Help</a></p>
                            </div>

                            <div className="footer-section">
                                <h6 className="footer-title">Contact</h6>
                                <p><i className="fas fa-home"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope"></i> info@example.com</p>
                                <p><i className="fas fa-phone"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="copyright">
                    © 2021 Copyright:
                    <a href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);