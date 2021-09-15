import styles from './Form.module.css';
import Button from '@material-ui/core/Button';
import React, {useState, useRef} from 'react';
import Questionnaire from './Questionnaire';

function Form() {
    const [name, setName] = useState('');
    const [nameIsValid, setNameIsValid] = useState(false);
    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneIsValid, setPhoneIsValid] = useState(false);

    const [formSubmit, setFormSubmit] = useState(false);



    const [nextClicked, setNextClicked] = useState(false);

    const nameChangeHandler = (event) => {
        setFormSubmit(false);
        console.log(event.target.value);
        if(event.target.value.length > 3){
            setNameIsValid(true);
        }
        else{
            setNameIsValid(false);
        }
    }

    const emailChangeHandler = (event) => {
        setFormSubmit(false)
        console.log(event.target.value);
        let re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const found = event.target.value.match(re);
        console.log(found);
        if(found !== null){
            setEmailIsValid(true)
        }
        else{
            setEmailIsValid(false);
        }
    }

    const phoneChangeHandler = (event) => {
        setFormSubmit(false);
        console.log(event.target.value);
        let re =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        const found=event.target.value.match(re);
        console.log(found);
        if(found !==null){
            setPhoneIsValid(true)
        }
        else{
            setPhoneIsValid(false);
        }
    }

    const detailsSubmitHandler = () => {
        setFormSubmit(true);
        // console.log(nameRef, emailRef, phoneRef);
        // if(nameRef.current.value === ''){
        //     console.log('name empty');
        // }
        // else if(emailRef.current.value === ''){
        //     console.log('email empty');
        // }
        // else if(phoneRef.current.value===''){
        //     console.log('phone empty');
        // }
        // else{
        //     console.log('all good');
        //     setNextClicked(true);
        // }
        const inputs = document.getElementsByTagName('input');
        setName(inputs[0].value);
        setEmail(inputs[1].value);
        setPhone(inputs[2].value);



        if(!nameIsValid){
            console.log(inputs[0].style.border='1px solid red');
        }
        if(!emailIsValid){
            console.log(inputs[1].style.border='1px solid red');
        }
        if(!phoneIsValid){
            console.log(inputs[2].style.border='1px solid red');
        }

        if(nameIsValid && phoneIsValid && emailIsValid){
            setNextClicked(true);
        }
    }

    return (
        <>
        {!nextClicked && (<div className={styles.container}>
            <form className={styles.formcontainer}>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' id='name' onChange = {nameChangeHandler} style={{border:`${nameIsValid? '1px solid purple':'1px solid #ddd'}`}}/>
                    {formSubmit && !nameIsValid && <p style={{color:'red', margin:'0px', fontSize:'15px', marginTop:'10px', marginLeft:'5px'}}>Error: This is a mandatory field</p>}
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' id='email' onChange={emailChangeHandler} style={{border:`${emailIsValid? '1px solid purple':'1px solid #ddd'}`}}/>
                    {formSubmit && !emailIsValid && <p style={{color:'red', margin:'0px', fontSize:'15px', marginTop:'10px', marginLeft:'5px'}}>Error: This is a mandatory field</p>}
                </div>
                <div>
                    <label htmlFor='phone'>Phone:</label>
                    <input type='tel' id='phone' onChange = {phoneChangeHandler} style={{border:`${phoneIsValid? '1px solid purple':'1px solid #ddd'}`}}/>
                    {formSubmit && !phoneIsValid && <p style={{color:'red', margin:'0px', fontSize:'15px', marginTop:'10px', marginLeft:'5px'}}>Error: This is a mandatory field</p>}
                </div>
                <Button variant='contained' style={{backgroundColor:'green', color:'white', position:'relative', left:'46%', marginTop:'50px'}} onClick = {detailsSubmitHandler}>Next</Button>
            </form>
        </div>)}
        {nextClicked && <Questionnaire info={{name:name, email:email, phone:phone}}/>}
        </>
    )
};


export default Form;
