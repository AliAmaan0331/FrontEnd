import React from 'react';
import Button from '../../shared/components/FormElements/Button';
import './ModalPopup.css';

const ModalPopup = props => {
    const token = localStorage.getItem('token');
    const modalShow = token === null || token === undefined || token.length <= 0 ? true : false;
    return (
        modalShow ? (
        <div className="index">
                <div class="innerIndex">
                    <div className="mainModal">
                        <div
                            className="primaryModal"
                        >
                            <header>
                                <h2>Sign in</h2>
                            </header>
                            <h2>You are not signed in!</h2>
                            <footer>
                                <Button to="/auth">
                                    Sign in
                                </Button>
                            </footer>
                        </div>
                    </div>
                </div>
        </div>
            )
            :
            (
            <div className="content">
                <h2>Actual Content</h2>
            </div>
            )
    );
};

export default ModalPopup;