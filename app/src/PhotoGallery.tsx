import React, {useState} from 'react';
import {Grid, Typography, Dialog, DialogContent, Box} from '@mui/material';

interface Image {
    url: string;
    caption: string;
    direction: string;
}

interface PhotoGalleryProps {
    images: Image[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({images}) => {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const [open, setOpen] = useState(false);

    const handleClick = (image: Image) => {
        setSelectedImage(image);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Grid container>
            {images.map((image, index) => {
                if (image.direction === 'col') {
                    return (
                        <Grid key={index} item xs={3}>
                            <img src={image.url}
                                 alt={image.caption}
                                 style={{
                                     width: '100%',
                                     height: '100%',
                                 }}
                                 onClick={() => handleClick(image)}
                            />
                        </Grid>
                    )
                } else {
                    return (
                        <Grid key={index} item xs={6}>
                            <img src={image.url}
                                 alt={image.caption}
                                 style={{
                                     width: '100%',
                                     height: '100%',
                                 }}
                                 onClick={() => handleClick(image)}
                            />
                        </Grid>
                    )
                }
                }
            )}
            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogContent>
                    {selectedImage && (
                        <>
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.caption}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                            <Typography>
                                {selectedImage.caption}
                            </Typography>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </Grid>
    );
};

export default PhotoGallery;
