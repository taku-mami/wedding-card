import {Box, Grid, Typography} from '@mui/material';
import React from 'react';
// @ts-ignore
import WeddingHallImage from './assets/images/weddinghall.jpeg';
// @ts-ignore
import WeddingPic from './assets/images/wedding_pic.jpeg';
// @ts-ignore
import WelcomeParty_1 from './assets/images/welcome_party_1.jpeg';
// @ts-ignore
import WelcomeParty_2 from './assets/images/welcome_party_2.jpeg';
// @ts-ignore
import YonseiImage from './assets/images/yonsei.jpg';


const EventComponent = () => (
    <div id='events'>
        <Grid container direction={'column'}
              spacing={3}
              sx={{
                  padding: '60px 0',
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
        >
            <Grid item>
                <Typography sx={{
                    fontFamily: '"Noto Serif KR", serif',
                    fontSize: '2.5em',
                    textAlign: 'center',
                }}>
                    초대합니다
                </Typography>
                <Typography sx={{
                    fontFamily: '"Noto Serif KR", serif',
                    fontSize: '2.5em',
                    textAlign: 'center',
                }}>
                    御招待
                </Typography>
            </Grid>
            <Grid item>
                <Typography sx={{
                    fontFamily: '"Noto Serif KR", serif',
                    fontSize: '1.0em',
                    textAlign: 'center',
                }}>
                    우리의 인연이 시작된 학교로
                </Typography>
                <Typography sx={{
                    // fontFamily: '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif',
                    fontFamily: '"Noto Serif KR", serif',
                    fontSize: '1.0em',
                    textAlign: 'center',
                }}>
                    私達が出会った延世大学にて
                </Typography>
            </Grid>
            <Grid item>
                <Box sx={{
                    background: `url(${YonseiImage}) no-repeat top center`,
                    backgroundSize: 'contain',
                    width: '375px',
                    height: '250px',
                }}/>
            </Grid>
            <Grid item>
                <Box sx={{
                    background: `url(${WeddingPic}) no-repeat top center`,
                    backgroundSize: 'contain',
                    width: '375px',
                    height: '300px',
                }}/>
            </Grid>
            <Grid item sx={{
                width: '375px'
            }}>
                <Typography sx={{
                    fontFamily: 'Gugi',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                }}>
                    웰컴 파티
                </Typography>
                <Typography sx={{
                    fontFamily: 'Gugi',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                }}>
                    ウェルカムパーティー
                </Typography>
                <Typography sx={{
                    fontFamily: 'Gugi',
                    fontSize: '1.0em',
                }}>
                    AM 11:00 ~
                </Typography>
                <Typography sx={{
                    fontFamily: 'Gugi',
                    fontSize: '1.0em',
                }}>
                    軽食、お飲み物をご用意しております。
                    挙式が始まりましたら撮影のお時間が
                    あまりございませんので、
                    是非ご参加くださいませ。
                </Typography>
            </Grid>
            <Grid item>
                <Box sx={{
                    background: `url(${WelcomeParty_1}) no-repeat top center`,
                    backgroundSize: 'contain',
                    width: '375px',
                    height: '250px',
                }}/>
            </Grid>
            <Grid item>
                <Box sx={{
                    background: `url(${WelcomeParty_2}) no-repeat top center`,
                    backgroundSize: 'contain',
                    width: '375px',
                    height: '300px',
                }}/>
            </Grid>
            <Grid item sx={{
                width: '375px'
            }}>
                <Typography sx={{
                    fontFamily: 'Gugi',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                }}>
                    웨딩 본식
                </Typography>
                <Typography sx={{
                    fontFamily: 'Gugi',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                }}>
                    挙式
                </Typography>
                <Typography sx={{
                    fontFamily: 'Gugi',
                    fontSize: '1.0em',
                }}>
                    12:00PM ~
                </Typography>
            </Grid>
            <Grid item>
                <Box sx={{
                    background: `url(${WeddingHallImage}) no-repeat top center`,
                    backgroundSize: 'contain',
                    width: '375px',
                    height: '400px',
                }}/>
            </Grid>
        </Grid>
    </div>
);

export default EventComponent;