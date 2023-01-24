import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Typography
} from '@mui/material';
import React, {useState} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import DialogContentComponent from './DialogContentComponent';

const AccountNumberComponent = () => {
    const [dialogueOpen, setDialogueOpen] = useState(false);

    const handleClick = () => {
        setDialogueOpen(!dialogueOpen);
    }

    return (
        <div id='send'>
            <Grid container direction={'column'}
                  spacing={3}
                  sx={{
                      padding: '60px 0',
                      marginBottom: '40px',
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}
            >
                <Grid item>
                    <Typography sx={{
                        fontFamily: '"Noto Serif KR", serif',
                        fontSize: '2.5em',
                    }}>
                        마음 전하실 곳
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{
                        fontFamily: '"Noto Serif KR", serif',
                        fontSize: '1.0em',
                    }}>
                        신랑 신부의 정보를 확인 할 수 있습니다.
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant={'contained'}
                            onClick={handleClick}
                            sx={{
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                border: 0,
                                borderRadius: 3,
                                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                                color: 'white',
                                height: 48,
                                padding: '0 30px',
                            }}
                    >
                        <GitHubIcon sx={{
                            marginRight: '5px',
                        }}/>
                        신랑 신부 정보 확인
                    </Button>
                    <Dialog
                        open={dialogueOpen}
                        onClose={handleClick}
                        aria-labelledby="dialogue-title"
                    >
                        <DialogTitle id="dialogue-title">
                            <Typography sx={{
                                fontFamily: '"Noto Serif KR", serif',
                                fontSize: '1.0em',
                            }}>
                                신랑 신부의 정보
                            </Typography>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentComponent/>
                        </DialogContent>
                    </Dialog>
                </Grid>
            </Grid>
        </div>
    );
}

export default AccountNumberComponent;