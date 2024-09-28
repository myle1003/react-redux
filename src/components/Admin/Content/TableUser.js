import { useEffect, useState } from "react"
import { getAllUsers } from "../../../services/apiServices"

const TableUser = (props) => {
    const { listUser, setListUser } = props

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUser && listUser.length > 0 &&
                        listUser.map((user, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="btn btn-secondary">View</button>
                                        <button
                                            className="btn btn-warning mx-3"
                                            onClick={() => props.handleClickBtnUpdateUser(user)}
                                        >Update</button>
                                        <button className="btn btn-danger"
                                            onClick={() => props.handleClickBtnDeleteUser(user)}
                                        >delete</button>
                                    </td>
                                </tr>
                            )

                        })
                    }
                    {listUser && listUser.length === 0 &&
                        <tr>
                            <td colSpan="4">No data</td>
                        </tr>}


                </tbody>
            </table>
        </>
    )
}
export default TableUser