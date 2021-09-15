import styles from './Questionnaire.module.css';
import Button from '@material-ui/core/Button';
import React, { useState, useContext } from 'react';
import RadioForm from './RadioForm';
import AlertDialog from '../layout/Modal';
import {ModalContext} from '../store/modal-context';

function Questionnaire(props) {
    const [service, setService] = useState('');
    const [beverage, setBeverage] = useState('');
    const [clean, setClean] = useState('');
    const [dining, setDining] = useState('');

    const ModalCtx = useContext(ModalContext);
    console.log(ModalCtx);



    const submitClickHandler = () => {
        console.log(props.info);
        console.log(service);
        console.log(beverage);
        console.log(clean);
        console.log(dining);
        localStorage.setItem('name', props.info.name);
        localStorage.setItem('email', props.info.email);
        localStorage.setItem('phone', props.info.phone);
        localStorage.setItem('reviews',JSON.stringify([service, beverage, clean, dining]));
        ModalCtx.setmodal(true);

    }

    return (
        <div className={styles.container}>
            <form className={styles.formcontainer}>
                <div onChange={(event) => { setService(event.target.value) }}>
                    <p>Please rate the quality of service you received from your host: </p>
                    <RadioForm />
                </div>
                <div onChange={(event) => { setBeverage(event.target.value) }}>
                    <p>Please rate the quality of your beverage: </p>
                    <RadioForm />
                </div>
                <div onChange={(event) => { setClean(event.target.value) }}>
                    <p>Was our restaurant clean? </p>
                    <RadioForm />
                </div>
                <div onChange={(event) => { setDining(event.target.value) }}>
                    <p>Please rate your overall dining experience: </p>
                    <RadioForm />
                </div>
                <Button variant='contained' style={{ backgroundColor: 'green', color: 'white', position: 'relative', left: '46%', marginTop: '50px' }} onClick={submitClickHandler}>Submit</Button>
            </form>
            <AlertDialog />
        </div>
    )
};


export default Questionnaire;