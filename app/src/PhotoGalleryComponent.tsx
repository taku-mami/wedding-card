import {Grid, Typography} from '@mui/material';
import React from 'react';

const temp = () => (
    <div className="ww-section" id="gallery">
        <div className="ww-photo-gallery">
            <div className="container">
                <h2 className="h1 text-center pb-3 ww-title">
                    {/*style="font-family: 'Noto Serif KR', serif;"*/}
                    포토 갤러리
                </h2>
                <div className="ww-gallery">
                    <div className="card-columns">
                        <div className="card" data-groups="[&quot;party&quot;,&quot;wedding&quot;]">
                            <a data-gallery="ww-gallery" data-toggle="lightbox">
                                <img alt="Gallery Pic 2" className="img-fluid" src="images/pic2.jpeg"/>
                            </a>
                        </div>
                        <div className="card" data-groups="[&quot;vacation&quot;]">
                            <a data-gallery="ww-gallery" data-toggle="lightbox">
                                <img alt="Gallery Pic 3" className="img-fluid" src="images/pic3.jpeg"/>
                            </a>
                        </div>
                        <div className="card" data-groups="[&quot;party&quot;,&quot;vacation&quot;]">
                            <a data-gallery="ww-gallery" data-toggle="lightbox">
                                <img alt="Gallery Pic 4" className="img-fluid" src="images/pic4.jpeg"/>
                            </a>
                        </div>
                        <div className="card" data-groups="[&quot;vacation&quot;]">
                            <a data-gallery="ww-gallery" data-toggle="lightbox">
                                <img alt="Gallery Pic 5" className="img-fluid" src="images/pic6.jpeg"/>
                            </a>
                        </div>
                        <div className="card"
                             data-groups="[&quot;wedding&quot;,&quot;ceremony&quot;,&quot;party&quot;]">
                            <a data-gallery="ww-gallery" data-toggle="lightbox">
                                <img alt="Gallery Pic 6" className="img-fluid" src="images/pic7.jpeg"/>
                            </a>
                        </div>
                        <div className="card" data-groups="[&quot;vacation&quot;]">
                            <a data-gallery="ww-gallery" data-toggle="lightbox">
                                <img alt="Gallery Pic 7" className="img-fluid" src="images/pic5.jpeg"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const PhotoGalleryComponent = () => (
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
                포토갤러리
            </Typography>
        </Grid>
    </Grid>
);

export default PhotoGalleryComponent;