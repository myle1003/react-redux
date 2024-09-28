import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { getAllUsers } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser ";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = () => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    const [listUser, setListUser] = useState([])

    useEffect(() => {
        fetchUserList()
    }, [])

    const fetchUserList = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUser(res.DT)
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
                    <TableUser
                        listUser={listUser}
                        setListUser={setListUser}
                        handleClickBtnUpdateUser={handleClickBtnUpdateUser}
                        handleClickBtnDeleteUser={handleClickBtnDeleteUser} />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchUserList={fetchUserList}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchUserList={fetchUserList}
                    resetUpdateData={resetUpdateData}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchUserList={fetchUserList}

                />
            </div>
        </div>
    )
}

export default ManageUser;