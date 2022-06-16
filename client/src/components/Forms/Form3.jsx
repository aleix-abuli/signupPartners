import Contract from '../Contract/Contract'

export default function Form3(props) {

    const { signupData, nextStage, previousStage, handleInputChange, bankingDetails, handleSubmit, checkTerms } = props;

    return(
        <>
            <h3>Contract</h3>
            <Contract />
            <input type='checkbox' name='terms' onChange={checkTerms}/>
            <label htmlFor="terms">I have read and accept the terms and conditions</label>

            <button onClick={previousStage}>Go back</button>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    );
};