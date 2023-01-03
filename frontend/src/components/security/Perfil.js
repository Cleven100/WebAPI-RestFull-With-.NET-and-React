import { Avatar, Button, Container, Divider, Grid, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../theme/useStyles';
import ImageUploader from 'react-images-upload';/* importamos ImageU ploader */

const Perfil = (props) => {
    const classes = useStyles();
    const verDetalles = () => {
        const id = "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed";
        props.history.push("/ordenCompra/"+ id);
    }
    return (
        <Container className={classes.containermt}>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}>
                    <Typography variant="h5" className={classes.text_title}>
                        Profile
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <ImageUploader
                        withIcon={false}
                        buttonStyles={{borderRadius: "50%", padding: 10, margin: 0,
                        position: "absolute", bottom: 15, left: 15}}
                        className={classes.imageUploader}
                        buttonText={<Icon>add_a_photo</Icon>}
                        label={
                        <Avatar alt="Profile" className={classes.avatarPefil}
                        src="https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000"/>
                        }
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        />
                        <TextField
                        label="name"
                        variant="outlined" 
                        fullWidth
                        className={classes.gridmb}
                        value="John"
                        />
                        <TextField
                        label="Nickname"
                        variant="outlined" 
                        fullWidth
                        className={classes.gridmb}
                        value="P"
                        />
                        <TextField
                        label="Email"
                        variant="outlined" 
                        fullWidth
                        className={classes.gridmb}
                        value="john@gmail.com"
                        />
                        <Divider className={classes.divider}/>
                        <TextField
                        label="Password"
                        variant="outlined" 
                        fullWidth
                        className={classes.gridmb}
                        />
                        <TextField
                        label="Repeat Password"
                        variant="outlined" 
                        fullWidth
                        className={classes.gridmb}
                        />
                        <Button
                        variant="contained"
                        color="primary"
                        >
                            update
                        </Button>
                    </form>
                </Grid>
                <Grid item md={9} xs={12}>
                    <Typography variant="h5" className={classes.text_title}>
                        shopping
                    </Typography>
                    <TableContainer className={classes.form}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>CLOSE</TableCell>
                                    <TableCell>TOTAL</TableCell>
                                    <TableCell>PAID</TableCell>
                                    <TableCell>SHIPPING</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed</TableCell>
                                    <TableCell>2020-12-15</TableCell>
                                    <TableCell>60.00</TableCell>
                                    <TableCell>2020-12-15</TableCell>
                                    <TableCell>
                                        {/* <Icon className={classes.iconNotDelivered}>
                                            clear
                                        </Icon> */}
                                        <Icon className={classes.iconDelivered}>
                                            check
                                        </Icon>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                        variant="contained"
                                        onClick={verDetalles}>
                                            DETAILS
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Perfil;