
const TableUser = (props) =>{

    const {listUsers} = props;
    // const listUsers = props.listUsers;
    return (
        <>
            <br/>
            <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {listUsers && listUsers.length > 0 &&
                listUsers.map((item,index) => {
                    return (
                        <tr key={'tableUser+ ${index}'}>
                            <th scope="row">{item.id}</th>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <button className={"btn"}>View</button>
                                <button className={"btn btn-success mx-3"}
                                        onClick={() =>props.handleClickBtnUpdate(item)}>Update</button>
                                <button className={"btn btn-primary"}>Delete</button>
                            </td>
                        </tr>
                    )
                })
                }
                {listUsers && listUsers.length === 0 &&
                    <tr>
                        <td colSpan={4}>  Not found data</td>
                </tr> }

                </tbody>
            </table>
        </>
    )
}
export default TableUser