import '../../Form.css';
import NewStore from '../../components/StoreForms/NewStore';

export default function NewStorePage() {
    return(
        <>
            <h2>Add a new establishment for your business</h2>
            <div className='formContainer tigerBack' style={{'min-height': '70vh'}}>
                <NewStore />
            </div>
        </>
    );
};