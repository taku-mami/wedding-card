import {Box, Grid, Typography} from '@mui/material';
import React from 'react';
// @ts-ignore
import Gallery1 from './assets/images/gallery_1.jpeg';
// @ts-ignore
import Gallery2 from './assets/images/gallery_2.jpeg';
// @ts-ignore
import Gallery3 from './assets/images/gallery_3.jpeg';
// @ts-ignore
import Gallery4 from './assets/images/gallery_4.jpeg';
// @ts-ignore
import Gallery5 from './assets/images/gallery_5.jpeg';
// @ts-ignore
import Gallery6 from './assets/images/gallery_6.jpeg';
// @ts-ignore
import Gallery7 from './assets/images/gallery_7.jpeg';
// @ts-ignore
import Gallery8 from './assets/images/gallery_8.jpeg';
// @ts-ignore
import Gallery9 from './assets/images/gallery_9.jpeg';
import PhotoGallery from './PhotoGallery';

const PhotoGalleryComponent = () => {
    return (
        <Grid container direction={'column'}
              spacing={3}
              sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
        >
            <Grid item>
                <Typography sx={{
                    fontFamily: '"Noto Serif KR", serif',
                    fontSize: '2.5em',
                }}>
                    포토 갤러리
                </Typography>
            </Grid>
            <Grid item>
            <PhotoGallery images={[
                {url: Gallery8, caption: '', direction: 'row'},
                {url: Gallery9, caption: '', direction: 'row'},
                {url: Gallery1, caption: '', direction: 'col'},
                {url: Gallery4, caption: '', direction: 'col'},
                {url: Gallery2, caption: '', direction: 'col'},
                {url: Gallery7, caption: '', direction: 'col'},
                {url: Gallery5, caption: '', direction: 'row'},
                {url: Gallery6, caption: '', direction: 'row'},
            ]}/>
            </Grid>
        </Grid>
    );
}

export default PhotoGalleryComponent;