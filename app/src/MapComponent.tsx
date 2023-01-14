import {Grid, Typography} from '@mui/material';
import React from 'react';

const temp = () => (
    <div className="ww-section ww-rsvp-detail" id="map">
        <div className="container">
            <div className="col text-center">
                <h2 className="h1 text-center pb-3 ww-title">
                    {/*style="font-family: 'Noto Serif KR', serif;"*/}
                    오시는 길
                </h2>
                <div>
                    <h5>
                        {/*style="font-family: 'Noto Serif KR', serif;"*/}
                        서울시 서대문구 연세대학교 알렌관
                    </h5>
                    <h6>
                        {/*style="font-family: 'Noto Serif KR', serif;"*/}
                        (서울 서대문구 연세로 50)
                    </h6>
                </div>
            </div>

            <div className="form-group">
                <div className="col-md-12">
                    <div className="my-3 text-center">
                        <a href="https://naver.me/G8U71aHP">
                            <img alt="naver-map" className="map-icon" id="naver-map"
                                 src="images/map/naver-map.png"/>
                        </a>
                        <a href="http://kko.to/pqfkJKSYdn">
                            <img alt="kakao-map" className="map-icon" id="kakao-map"
                                 src="images/map/kakao-map.png"/>
                        </a>
                        <a href="https://goo.gl/maps/ysrFHdhMdLewRJEF9">
                            <img alt="google-map" className="map-icon" id="google-map"
                                 src="images/map/google-map.png"/>
                        </a>
                    </div>
                    <div className="col text-center">
                        <label>
                            {/*style="font-family: 'Noto Serif KR', serif; font-size: 15px;"*/}
                            셔틀버스 - (미정)
                        </label>
                    </div>
                    <div className="my-3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.6048775236627!2d126.93787733086855!3d37.56437196740523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c988f69f9ad57%3A0x2c4970410ce2a470!2z64yA7ZWc66-86rWtIOyEnOyauO2KueuzhOyLnCDsi6DstIzrj5kg7Jew7IS464yA7ZWZ6rWQIOyVjOugjOq0gA!5e0!3m2!1sko!2sjp!4v1671810972827!5m2!1sko!2sjp"
                            width="100%" height="400" frameBorder="0" allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

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
                지하철: 신촌역 3번 출구에서 500m 가량 직진 후 학교에서 알아서 찾아와
            </Typography>
        </Grid>
        <Grid item sx={{
            width: '375px'
        }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.6048775236627!2d126.93787733086855!3d37.56437196740523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c988f69f9ad57%3A0x2c4970410ce2a470!2z64yA7ZWc66-86rWtIOyEnOyauO2KueuzhOyLnCDsi6DstIzrj5kg7Jew7IS464yA7ZWZ6rWQIOyVjOugjOq0gA!5e0!3m2!1sko!2sjp!4v1671810972827!5m2!1sko!2sjp"
                width="100%" height="400" frameBorder="0" allowFullScreen>
            </iframe>
        </Grid>
    </Grid>
);


export default MapComponent;