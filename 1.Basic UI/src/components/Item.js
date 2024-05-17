import './Item.css';

function Item(props){

    const name = props.name;

    return(
        <div className='top'>
            {name}
        </div>
    )

}

export default Item;