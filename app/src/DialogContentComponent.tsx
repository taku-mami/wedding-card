import {
    Divider,
    Grid, IconButton,
    Typography
} from '@mui/material';
import React from "react";
import CallIcon from '@mui/icons-material/Call';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GitHubIcon from "@mui/icons-material/GitHub";

const DialogContentComponent = () => {
    const accountNumber = '신한 110-365-872128';

    const handleCopyClick = () => {
        navigator.clipboard.writeText(accountNumber);
    }

    return (
        <Grid container direction={'column'}
              spacing={1}
        >
            <Grid item>
                <Typography sx={{
                    fontFamily: 'Gugi',
                    fontSize: '1.0em',
                }}>
                    신랑 정보
                </Typography>
            </Grid>
            <Divider/>
            <Grid item>
                <Grid container direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      spacing={3}
                >
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            연락처
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            010-2749-3905
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleCopyClick}>
                            <CallIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      spacing={3}
                >
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            부 연락처
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            010-3764-3905
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleCopyClick}>
                            <CallIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      spacing={3}
                >
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            모 연락처
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            010-4525-4905
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleCopyClick}>
                            <CallIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      spacing={3}
                >
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            계좌번호
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            신한은행 110-365-872-128 (예금주: 윤성탁)
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleCopyClick}>
                            <ContentCopyIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography sx={{
                    marginTop: '5px',
                    fontFamily: 'Gugi',
                    fontSize: '1.0em',
                }}>
                    신부 정보
                </Typography>
            </Grid>
            <Divider/>
            <Grid item>
                <Grid container direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      spacing={3}
                >
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            연락처
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            010-9467-3905
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleCopyClick}>
                            <CallIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      spacing={3}
                >
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            부 연락처
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            080-0000-0000
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleCopyClick}>
                            <CallIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      spacing={3}
                >
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            모 연락처
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            080-0000-0000
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleCopyClick}>
                            <CallIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography sx={{
                    marginTop: '5px',
                    fontFamily: 'Gugi',
                    fontSize: '1.0em',
                }}>
                    깃허브
                </Typography>
            </Grid>
            <Divider/>
            <Grid item>
                <Grid container direction={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      spacing={3}
                >
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            링크
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{
                            fontFamily: 'Gugi',
                            fontSize: '1.0em',
                        }}>
                            https://github.com/taku-mami/wedding-card
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleCopyClick}>
                            <GitHubIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default DialogContentComponent;