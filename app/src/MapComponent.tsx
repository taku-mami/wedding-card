import {Grid, Typography} from '@mui/material';
import React from 'react';

// @ts-ignore
const MapComponent = () => (
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
            }}>
                오시는 길
            </Typography>
        </Grid>
        <Grid item sx={{
            width: '375px'
        }}>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.2em',
                fontWeight: 'bold',
            }}>
                서울시 서대문구 연세대학교 알렌관
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                서울 서대문구 신촌동 134 (서대문구 연세로 50)
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                02-2123-4101
            </Typography>
            <Typography sx={{
                marginTop: '10px',
                fontFamily: 'Gugi',
                fontSize: '1.2em',
                fontWeight: 'bold',
            }}>
                버스
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                연대앞, 세브란스병원앞, 이대부중, 이대후문 등에서 하차 후 도보 5분~15분
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                153, 163, 171, 6714, 7017, 7024, 서대문03, 서대문04, 서대문05
            </Typography>
            <Typography sx={{
                marginTop: '10px',
                fontFamily: 'Gugi',
                fontSize: '1.2em',
                fontWeight: 'bold',
            }}>
                지하철
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                2호선 신촌역 3번출구 7024번 승차 후 이대부중에서 하차
            </Typography>
            <Typography sx={{
                marginTop: '10px',
                fontFamily: 'Gugi',
                fontSize: '1.2em',
                fontWeight: 'bold',
            }}>
                주차 안내
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                에비슨의생명연구센터, 상남경영원, 어린이생활지도연구원 주차장 이용
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                연세대학교 본관 주차장 이용시 도보 약 15분 소요
            </Typography>
        </Grid>
        <Grid item sx={{
            width: '375px',
        }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.604671004585!2d126.94015171601994!3d37.56437683200794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c988f4ed3478d%3A0x30dcb5396ef49c68!2z7JWM66CM6rSA!5e0!3m2!1sko!2skr!4v1674525755235!5m2!1sko!2skr"
                width="100%" height="450" allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Grid>
    </Grid>
);


export default MapComponent;