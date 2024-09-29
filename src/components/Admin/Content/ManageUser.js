import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { getAllUsers, getAllUsersWithPage } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser ";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = () => {
    const LIMIT = 2
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    const [listUser, setListUser] = useState([])

    useEffect(() => {
        // fetchUserList()
        fetchUserListWithPaginate(currentPage)
    }, [])

    const fetchUserList = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUser(res.DT)
        }

    }

    const fetchUserListWithPaginate = async (page) => {
        let res = await getAllUsersWithPage(page, LIMIT);
        if (res.EC === 0) {
            setListUser(res.DT.users)
            setPageCount(res.DT.totalPages)
        }

    }

    const handleClickBtnUpdateUser = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)

    }

    const handleClickBtnDeleteUser = (user) => {
        setShowModalDeleteUser(true)
        setDataDelete(user)
    }

    const resetUpdateData = () => {
        setDataUpdate({})
    }


    return (
        <div className="manage-user-container">
            <div className="title">
                Manage user
            </div>
            <div className="user-content">
                <div className="btn-add-user">
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus />
                        Add new user
                    </button>
                </div>
                <div className="table-user-container">
                    <TableUserPaginate
                        listUser={listUser}
                        setListUser={setListUser}
                        handleClickBtnUpdateUser={handleClickBtnUpdateUser}
                        handleClickBtnDeleteUser={handleClickBtnDeleteUser}
                        fetchUserListWithPaginate={fetchUserListWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchUserList={fetchUserList}
                    fetchUserListWithPaginate={fetchUserListWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchUserList={fetchUserList}
                    resetUpdateData={resetUpdateData}
                    fetchUserListWithPaginate={fetchUserListWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchUserList={fetchUserList}
                    fetchUserListWithPaginate={fetchUserListWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default ManageUser;