export default function Form1(props) {

    const { signupData, nextStage, previousStage, handleInputChange } = props;
    const { businessName, country, city, userName, userSurname, email, phone, type, nOfLocals } = signupData;

    return(
        <>
            <h3>Tell us a little bit more about you and your business.</h3>
            <form>
                <label htmlFor="country">Country<sup>*</sup></label>
                <select name='country' value={country} onChange={handleInputChange} >
                    <option></option>
                    <option value='Spain'>Spain</option>
                    <option value='Georgia'>Georgia</option>
                    <option value='Croatia'>Croatia</option>
                    <option value='Italia'>Italia</option>
                    <option value='Kenya'>Kenya</option>
                    <option value='Kazakhstan'>Kazakhstan</option>
                    <option value='Ivory Coast'>Ivory Coast</option>
                    <option value='Morocco'>Morocco</option>
                    <option value='Poland'>Poland</option>
                    <option value='Portugal'>Portugal</option>
                    <option value='Romania'>Romania</option>
                    <option value='Serbia'>Serbia</option>
                    <option value='Ukraine'>Ukraine</option>
                    <option value='Kyrgyzstan'>Kyrgyzstan</option>
                    <option value='Moldavia'>Moldavia</option>
                    <option value='Uganda'>Uganda</option>
                    <option value='Ghana'>Ghana</option>
                    <option value='Bulgaria'>Bulgaria</option>
                    <option value='Bosnia and Herzegovina'>Bosnia and Herzegovina</option>
                    <option value='Montenegro'>Montenegro</option>
                    <option value='Tunisia'>Tunisia</option>
                    <option value='Belarus'>Belarus</option>
                    <option value='Nigeria'>Nigeria</option>
                    <option value='Armenia'>Armenia</option>
                    <option value='Slovenia'>Slovenia</option>
                    <option value='Andorra'>Andorra</option>
                </select>
                
                <label htmlFor="city">City<sup>*</sup></label>
                <input name='city' value={city} onChange={handleInputChange} required />
                
                <label htmlFor="businessName">Business name<sup>*</sup></label>
                <input name='businessName' value={businessName} onChange={handleInputChange} required />
                
                <label htmlFor="userName">Name<sup>*</sup></label>
                <input name='userName' value={userName} onChange={handleInputChange} required />
                
                <label htmlFor="userSurname">Last name<sup>*</sup></label>
                <input name='userSurname' value={userSurname} onChange={handleInputChange} required />
                
                <label htmlFor="email">e-mail<sup>*</sup></label>
                <input name='email' value={email} onChange={handleInputChange} required />
                
                <label htmlFor="phone">Phone number<sup>*</sup></label>
                <input name='phone' value={phone} onChange={handleInputChange} required />

                <label htmlFor="type">Type of establishment<sup>*</sup></label>
                <select name='type' value={type} onChange={handleInputChange} >
                    <option></option>
                    <option value='restaurant'>Restaurant</option>
                    <option value='pharmacy'>Pharmacy</option>
                    <option value='store'>Store</option>
                    <option value='supermarket'>Supermarket</option>
                </select>

                <label htmlFor="nOfLocals">Number of establishments</label>
                <select name='nOfLocals' value={nOfLocals} onChange={handleInputChange} >
                    <option></option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5+'>5+</option>
                </select>

                <button type="submit" onClick={nextStage}>Next</button>
            </form>
        </>
    );
};