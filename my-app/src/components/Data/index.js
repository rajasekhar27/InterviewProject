import './index.css'
const Data = (props) => {
    const {DataList} = props
    const {status,title,userId} = DataList
   
    return(
        <li className="liList">
            <div className="listContainer">
                <p className="title">{title}</p>
                <p className='userId'>{userId}</p>
                <p className='status'>{status}</p>
            </div>
        </li>
    )
}
export default Data

