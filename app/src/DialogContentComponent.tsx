import {
    Divider,
    Grid, IconButton,
    Snackbar,
    Typography
} from '@mui/material';
import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import CallIcon from '@mui/icons-material/Call';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface ContactItemProps {
    name: string;
    value: string;
}

const StyledCallIcon = styled(CallIcon)`
  cursor: pointer;
`;

const StyledContentCopyIcon = styled(ContentCopyIcon)`
  cursor: pointer;
`;

const ContactItem = (props: ContactItemProps) => {
    const {name, value} = props;
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCopyClick = async () => {
        await navigator.clipboard.writeText(value);
        setOpenSnackbar(true);
    }

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <Grid item>
            <Grid container direction={'row'}
                  alignItems={'center'}
                  spacing={2}
            >
                <Grid item xs={5}>
                    <Typography sx={{
                        fontFamily: 'Gugi',
                        fontSize: '1.0em',
                    }}>
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography sx={{
                        fontFamily: 'Gugi',
                        fontSize: '1.0em',
                    }}>
                        {(name === '신한은행') ? `${value} (예금주: 윤성탁)` : `${value}`}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    {
                        (name === '신한은행') ?
                            <StyledContentCopyIcon onClick={handleCopyClick}/> :
                            <StyledCallIcon onClick={handleCopyClick}/>
                    }
                </Grid>
            </Grid>
            <Snackbar
                open={openSnackbar}
                message="클립보드에 복사되었습니다."
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            />
        </Grid>
    );
};


const DialogContentComponent = () => {
    return (
        <Grid container direction={'column'}
              spacing={1}
              sx={{
                  width: '320px',
              }}
        >
            <Grid item>
                <Typography sx={{
                    fontFamily: 'Gugi',
                    fontSize: '1.0em',
                }}>
                    연락처
                </Typography>
            </Grid>
            <Divider/>
            <Grid item>
                <ContactItem name="신랑 윤성탁" value="010-2749-3905"/>
                <ContactItem name="신랑 부 윤진" value="010-3764-3905"/>
                <ContactItem name="신랑 모 김정현" value="010-4525-4905"/>
                <ContactItem name="신부 山本 真実" value="080-3139-8495"/>
                <ContactItem name="신부 부 山本武司" value="080-4028-5567"/>
                <ContactItem name="신부 모 山本桂子" value="080-3782-9666"/>
            </Grid>
            <Grid item>
                <Typography sx={{
                    fontFamily: 'Gugi',
                    fontSize: '1.0em',
                }}>
                    계좌번호
                </Typography>
            </Grid>
            <Divider/>
            <Grid item>
                <ContactItem name="신한은행" value="110-365-872128"/>
            </Grid>
        </Grid>

    );
};

export default DialogContentComponent;