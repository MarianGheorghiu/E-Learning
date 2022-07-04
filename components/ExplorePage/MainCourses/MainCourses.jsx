import React from 'react';
import MainCopyright from '../MainCopyright/MainCopyright';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';

const PLACEHOLDER = ['PRIMARY SCHOOL', 'HIGH SCHOOL', 'GARDEN', 'ALT SCHOOL'];

const CardSchoolEducation = ({ schoolType }) => {
    return (
        <Card sx={{ maxWidth: 400 }} style={{ marginTop: '5%' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://www.collinsdictionary.com/images/full/school_309241295.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {schoolType}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

const MainCourses = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {PLACEHOLDER.map((school, i) => (
                        <Grid item xs={2} sm={4} md={4} key={i}>
                            <CardSchoolEducation schoolType={school} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <MainCopyright />
        </>
    );
};

export default MainCourses;
