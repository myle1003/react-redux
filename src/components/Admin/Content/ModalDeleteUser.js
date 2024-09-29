import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiServices';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete, currentPage } = props;

    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = async () => {
        const data = await deleteUser(dataDelete.id)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose();
            // await props.fetchUserList()
            props.setCurrentPage(1)
            await props.fetchUserListWithPaginate(1)
        } else {
            toast.error(data.EM);
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete the user?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this use. email = <b>{dataDelete?.email}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmitDeleteUser}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;