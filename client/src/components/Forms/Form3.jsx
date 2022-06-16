import Contract from '../Contract/Contract'

export default function Form3(props) {

    const { signupData, nextStage, previousStage, handleInputChange, bankingDetails, handleSubmit } = props;

    return(
        <>
            <h3>Contract</h3>
            <Contract />
            <button onClick={previousStage}>Go back</button>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    );
};