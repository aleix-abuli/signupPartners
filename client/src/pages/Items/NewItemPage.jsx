import '../../Form.css';
import NewItem from '../../components/ItemForms/NewItem';

export default function NewItemPage() {
    return(
        <>
            <h2>Add a new item</h2>
            <div className='formContainer tigerBack' style={{'min-height': '70vh'}} >
                <NewItem />
            </div>
        </>
    );
};