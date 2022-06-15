import { useState } from "react";
import Form1 from "../../components/Forms/Form1";
import Form2 from "../../components/Forms/Form2";
import Form3 from "../../components/Forms/Form3";

export default function SignUpPage() {

    const [stage, setStage] = useState(1);
    const [signupData, setSignupData] = useState({

    });

    function nextStage() {
        if(stage < 3) setStage(stage++);
        else return;
    };

    function previousStage() {
        if (stage > 1) setStage(stage--);
        else return;
    };

    return (
        <>
        {(() => {
            switch(stage) {
                case 1: return <Form1 signupData={signupData} nextStage={nextStage} previousStage={previousStage} />;
                case 2: return <Form2 signupData={signupData} nextStage={nextStage} previousStage={previousStage} />;
                case 3: return <Form3 signupData={signupData} nextStage={nextStage} previousStage={previousStage} />;
            };
        })()}
        </>
    );
};