import { useState } from "react";
import Form1 from "../../components/Forms/Form1";
import Form2 from "../../components/Forms/Form2";
import Form3 from "../../components/Forms/Form3";

export default function SignUpPage() {

    const [stage, setStage] = useState(1);
    const [signupData, setSignupData] = useState({
        businessName: '',
        city: '',
        country: '',
        userName:'',
        userSurname:'',
        email: '',
        phone: '',
        type: '',
        locals: '',
        nOfLocals: ''
    });

    function nextStage(e) {

        e.preventDefault();
        console.log('CURRENT DATA: ', signupData);

        if(stage < 3) setStage(stage+1);
        else return;
    };

    function previousStage(e) {

        e.preventDefault();

        if (stage > 1) setStage(stage-1);
        else return;
    };

    function handleInputChange(e) {
        const { value, name } = e.currentTarget;
        setSignupData({ ...signupData, [name]: value });
    };

    return (
        <>
        <h1>Become a Partner</h1>
        {(() => {
            switch(stage) {
                case 1: return <Form1 signupData={signupData} nextStage={nextStage} previousStage={previousStage} handleInputChange={handleInputChange} />;
                case 2: return <Form2 signupData={signupData} nextStage={nextStage} previousStage={previousStage} handleInputChange={handleInputChange} />;
                case 3: return <Form3 signupData={signupData} nextStage={nextStage} previousStage={previousStage} handleInputChange={handleInputChange} />;
            }
        })()}
        </>
    );
};