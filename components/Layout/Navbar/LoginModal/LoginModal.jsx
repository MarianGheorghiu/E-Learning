import { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import LoginForm from './LoginForm';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
};

const LoginModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} style={{ color: 'white' }}>
                <AccountCircleIcon />
            </Button>
            <Modal keepMounted open={open} onClose={handleClose}>
                <Box sx={style}>
                    <LoginForm />
                </Box>
            </Modal>
        </div>
    );
};

export default LoginModal;
