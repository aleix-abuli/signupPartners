export default function Form2(props) {

    const { signupData, nextStage, previousStage, handleInputChange, bankingDetails } = props;
    const { legalName, taxID, address, bank, accNumber, ownerName, ownerSurname } = bankingDetails;
    
    function goToNext(e) {
        /* if(Object.values(bankingDetails).every(key => key !== null && key !== "")) {
            nextStage(e);
        }; */
        nextStage(e);
    }

    return(
        <>
            <h3>Our proposal</h3>
            <h4>Terms of our collaboration</h4>
            <p>You are a step closer to join Glovo! Together we’ll increase your sales and reach new customers. Currently we are proposing you:</p>
            <div>
                <p>Activation fee</p>
                <h3>0€</h3>
                <p>One time payment</p>
            </div>
            <div>
                <p>Platform + Courier Access fees</p>
                <h3>30%</h3>
                <p>For every order</p>
            </div>

            <h4>Billing details</h4>
            <form>
                <label htmlFor="legalName">Legal entity name<sup>*</sup></label>
                <input name='legalName' value={legalName} onChange={handleInputChange} required />
                
                <label htmlFor="taxID">Tax ID number of your legal entity<sup>*</sup></label>
                <input name='taxID' value={taxID} onChange={handleInputChange} required />
                
                <label htmlFor="address">Billing Address<sup>*</sup></label>
                <input name='address' value={address} onChange={handleInputChange} required />

            </form>

            <h4>Payment details</h4>
            <form>
                <label htmlFor="bank">Bank name<sup>*</sup></label>
                <input name='bank' value={bank} onChange={handleInputChange} required />
                
                <label htmlFor="accNumber">Account number<sup>*</sup></label>
                <input name='accNumber' value={accNumber} onChange={handleInputChange} required />
                
                <label htmlFor="ownerName">Owner name<sup>*</sup></label>
                <input name='ownerName' value={ownerName} onChange={handleInputChange} required />
                
                <label htmlFor="ownerSurname">Owner last name<sup>*</sup></label>
                <input name='ownerSurname' value={ownerSurname} onChange={handleInputChange} required />

            </form>

            <input type='checkbox' name='terms' />
            <label htmlFor="terms">I agree to the <a href="https://glovoapp.com/en/legal/privacy/">terms and conditions</a></label>

            <button onClick={previousStage}>Go back</button>
            <button type="submit" onClick={goToNext}>Next</button>
        </>
    );
};