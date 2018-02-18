import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as formActions from '../../actions/formActions';
import Header from './Header';
import Body from './Body';
import Form from './Form';
import ConfirmationDialog from './ConfirmationDialog';
import ApplicationButton from './Button';
import BackToHomepage from '../BackToHomepage';
import PawPrint from '../assets/grey-paw-print.png';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className={'adoption-page'}>
        <div className={'wrapper'}>
            <div style={{
                height: 30,
                width: 'calc(100% - 20px)',
                padding: '30px 10px',
                display: 'inline-block',
                textAlign: 'center'
            }}>
                <img
                style={{margin: '0px 5px'}}
                src={PawPrint}
                alt={'paw-print'}
                height={10}
                width={10}
                />
                <img
                style={{margin: '0px 5px'}}
                src={PawPrint}
                alt={'paw-print'}
                height={20}
                width={20}
                />
                <img
                style={{margin: '0px 5px'}}
                src={PawPrint}
                alt={'paw-print'}
                height={30}
                width={30}
                />
                <div
                style={{
                    display: 'inline-block',
                    lineHeight: '30px',
                    letterSpacing: '3px',
                    fontSize: '30px',
                    margin: '0px 5px'
                }}>
                    THE ADOPTION PROJECT
                </div>
                <img
                style={{margin: '0px 5px'}}
                src={PawPrint}
                alt={'paw-print'}
                height={30}
                width={30}
                />
                <img
                style={{margin: '0px 5px'}}
                src={PawPrint}
                alt={'paw-print'}
                height={20}
                width={20}
                />
                <img
                style={{margin: '0px 5px'}}
                src={PawPrint}
                alt={'paw-print'}
                height={10}
                width={10}
                />
            </div>
            <Header />
            <Body />
            <ApplicationButton {...this.props}/>
            <Form {...this.props}/>
            {
                this.props.showConfirmation ?
                <ConfirmationDialog {...this.props}/> : null
            }
            <BackToHomepage />
        </div>
      </div>
    );
  }
}

App.propTypes = {
    formActions: PropTypes.object,
    form: PropTypes.array
};

function mapStateToProps(state) {
    return {
        formOpen: state.form.get('formOpen'),
        showConfirmation: state.form.get('showConfirmation'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        formActions: bindActionCreators(formActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);