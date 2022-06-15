export default function Form2(props) {

    const { signupData, nextStage, previousStage, handleInputChange } = props;

    return(
        <form>
            <button onClick={previousStage}>Go back</button>
            <button type="submit" onClick={nextStage}>Next</button>
        </form>
    );
};