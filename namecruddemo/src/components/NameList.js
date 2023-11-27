const NameList=(props)=>{
    let renderList=props.namearr.map((nm,index)=><li key={index}>{nm}</li>)
    return(
        <div>
            <h1>Friend's Name List</h1>
            <ul>
                {renderList}
            </ul>
        </div>
    )
}
export default NameList