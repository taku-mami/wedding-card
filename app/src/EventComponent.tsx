import {Box, Grid, Typography} from '@mui/material';
import React from 'react';
// @ts-ignore
import WeddingHallImage from './assets/images/weddinghall.jpeg';
// @ts-ignore
import YonseiImage from './assets/images/yonsei.jpg';

const temp = () => (
    <div className="ww-section bg-light" id="events">
        <div className="container ww-wedding-event">
            <h2 className="h1 text-center pb-3 ww-title">
                {/*style="font-family: 'Noto Serif KR', serif;"*/}
                초대합니다
            </h2>
            <div className="col text-center mb-5">
                <h6>
                    {/*style="font-family: 'Noto Serif KR', serif;"*/}
                    1463
                    <br/>
                    (만난지 4년+1일 되는날 결혼 = 1463일)
                </h6>
            </div>
            <div className="row">
                <div className="col-md-7 col-sm-12">
                    <div className="my-3">
                        <div className="h4">웨딩 본식</div>
                        <ul>
                            <li>
                                <i className="text-muted fas fa-map-marker-alt"></i>
                                <span className="pl-2 text-muted">서울시 서대문구 연세대학교 알렌관</span>
                            </li>
                            <li className="pt-2">
                                <i className="text-muted far fa-calendar-alt"></i>
                                <span className="pl-2 text-muted">2023년 4월 22일, 12:00PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-5 col-sm-12">
                    <div className="my-3">
                        <img alt="Wedding Party" className="img-fluid" src="images/wedding-party.jpg"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7 col-sm-12">
                    <div className="my-3">
                        <div className="h4">식사</div>
                        <ul>
                            <li>
                                <i className="text-muted fas fa-map-marker-alt "></i>
                                <span className="pl-2 text-muted">서울시 서대문구 연세대학교 알렌관</span>
                            </li>
                            <li className="pt-2">
                                <i className="text-muted far fa-calendar-alt "></i>
                                <span className="pl-2 text-muted">2023년 4월 22일, 1:00PM - 3:00PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-5 col-sm-12">
                    <div className="my-3"><img alt="Reception" className="img-fluid" src="images/reception.jpg"/></div>
                </div>
            </div>
        </div>
    </div>
);

const EventComponent = () => (
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
                초대합니다
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{
                fontFamily: '"Noto Serif KR", serif',
                fontSize: '1.0em',
            }}>
                우리의 인연이 시작된 학교로
            </Typography>
        </Grid>
        <Grid item>
            <Box sx={{
                background: `url(${YonseiImage}) no-repeat top center`,
                backgroundSize: 'contain',
                width: '375px',
                height: '235px',
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
                fontSize: '1.0em',
            }}>
                서울시 서대문구 연세대학교 알렌관
            </Typography>
            <Typography sx={{
                fontFamily: 'Gugi',
                fontSize: '1.0em',
            }}>
                2023년 4월 22일, 11:30PM
            </Typography>
        </Grid>
        <Grid item>
            <Box sx={{
                background: `url(${WeddingHallImage}) no-repeat top center`,
                backgroundSize: 'contain',
                width: '375px',
                height: '350px',
            }}/>
        </Grid>
    </Grid>
);

export default EventComponent;