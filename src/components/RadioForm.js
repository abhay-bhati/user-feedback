
function RadioForm() {
    return (
        <>
            <input type='radio' id='excellent' value='Excellent' />
            <label htmlFor='excellent'>Excellent</label>
            <input type='radio' id='good' value='Good' />
            <label htmlFor='good'>Good</label>
            <input type='radio' id='fair' value='Fair' />
            <label htmlFor='fair'>Fair</label>
            <input type='radio' id='bad' value='Bad' />
            <label htmlFor='bad'>Bad</label>
        </>
    )
};


export default RadioForm;