// import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
// import {useState, useEffect} from "react";
//
// // const PaginatedItems = ({ itemsPerPage }) => {
// //     // We start with an empty list of items.
// //     const [currentItems, setCurrentItems] = useState(null);
// //     // Here we use item offsets; we could also use page offsets
// //     // following the API or data you're working with.
// //     const [itemOffset, setItemOffset] = useState(0);
// //
// //     useEffect(() => {
// //         // Fetch items from another resources.
// //         const endOffset = itemOffset + itemsPerPage;
// //         console.log(`Loading items from ${itemOffset} to ${endOffset}`);
// //         setCurrentItems(items.slice(itemOffset, endOffset));
// //         setPageCount(Math.ceil(items.length / itemsPerPage));
// //     }, [itemOffset, itemsPerPage]);
// //
// //     // Invoke when user click to request another page.
// //
// //
// //     return (
// //         <>
// //             <Items currentItems={currentItems} />
// //         </>
// //     );
// // }
//
// const TableUserPaginate = (props) =>{
//
//     const {listUsers} = props;
//     // const listUsers = props.listUsers;
//     const [pageCount, setPageCount] = useState(0);
//
//     const handlePageClick = (event) => {
//         console.log(`User requested page number ${event.selected}`);
//     };
//     return (
//         <>
//             <br/>
//             <table className="table table-hover table-bordered">
//                 <thead>
//                 <tr>
//                     <th scope="col">id</th>
//                     <th scope="col">Username</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Role</th>
//                     <th>Action</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {listUsers && listUsers.length > 0 &&
//                     listUsers.map((item) => {
//                         return (
//                             <tr key={'tableUser+ ${index}'}>
//                                 <th scope="row">{item.id}</th>
//                                 <td>{item.username}</td>
//                                 <td>{item.email}</td>
//                                 <td>{item.role}</td>
//                                 <td>
//                                     <button className={"btn"}
//                                             onClick={() =>props.handleClickBtnView(item)}>View</button>
//                                     <button className={"btn btn-success mx-3"}
//                                             onClick={() =>props.handleClickBtnUpdate(item)}>Update</button>
//                                     <button className={"btn btn-primary"}
//                                             onClick = {() => props.handleClickBtnDelete(item)}>Delete</button>
//                                 </td>
//                             </tr>
//                         )
//                     })
//                 }
//                 {listUsers && listUsers.length === 0 &&
//                     <tr>
//                         <td colSpan={4}>Not found data</td>
//                     </tr> }
//
//                 </tbody>
//             </table>
//             <ReactPaginate
//                 nextLabel="next >"
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={3}
//                 marginPagesDisplayed={2}
//                 pageCount={10}
//                 previousLabel="< previous"
//                 pageClassName="page-item"
//                 pageLinkClassName="page-link"
//                 previousClassName="page-item"
//                 previousLinkClassName="page-link"
//                 nextClassName="page-item"
//                 nextLinkClassName="page-link"
//                 breakLabel="..."
//                 breakClassName="page-item"
//                 breakLinkClassName="page-link"
//                 containerClassName="pagination"
//                 activeClassName="active"
//                 renderOnZeroPageCount={null}
//             />
//         </>
//     )
// }
// export default TableUserPaginate