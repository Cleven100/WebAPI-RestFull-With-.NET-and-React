import {
    Button, CardMedia, Container, Divider, Grid, Paper, Table, TableBody, TableCell,
    TableContainer, TableRow, Typography
} from '@material-ui/core';
import React from 'react';
import useStyles from '../theme/useStyles';

const Order = (props) => {
    const { id } = props.match.params;
    const pushMessage = "no Delivering";
    const paidMessage = "paid";
    const classes = useStyles();
    return (

        <Container className={classes.containermt}>
            <Typography variant="h5" className={classes.text_title}>
                Order: {id.toUpperCase()}
            </Typography>
            <Grid container spacing={2} className={classes.paperPadding}>
                <Grid item md={8} xs={12}>
                    <Typography variant="h6" className={classes.text_title}>
                        Shipping
                    </Typography>
                    <Typography variant="body2" className={classes.text_envio}>
                        Name: pedro s
                    </Typography>
                    <Typography variant="body2" className={classes.text_envio}>
                        Email: pedro@s.com
                    </Typography>
                    <Typography variant="body2" className={classes.text_envio}>
                        Address: new york
                    </Typography>
                    <div className={classes.alertNotDelivered}>
                        <Typography variant="body2" className={classes.text_title}>
                            {pushMessage}
                        </Typography>
                    </div>
                    <Divider className={classes.divider} />
                    <Typography variant="h6" className={classes.text_title}>
                        Payment Method
                    </Typography>
                    <Typography>
                        Method: PayPal
                    </Typography>
                    <div className={classes.alertDelivered}>
                        <Typography variant="body2" className={classes.text_title}>
                            {paidMessage}
                        </Typography>
                    </div>
                    <Divider className={classes.divider} />
                    <Typography variant="h6" className={classes.text_title}>
                        PRODUCTS
                    </Typography>
                    <TableContainer className={classes.gridmb}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <CardMedia
                                            className={classes.imgProductoPC}
                                            image=""
                                            title=""
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            CNS
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            2 x $25.00 = $50.00
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Grid item md={4} xs={12}>
                    <TableContainer component={Paper} square>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Typography variant="h6" className={classes.text_title}>
                                            Summary
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            Products
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            $50.00
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            Shipping
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            $2.00
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            Tax
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            $8.00
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography className={classes.text_title}>
                                            Total
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle}>
                                            $60.00
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        { /*  <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        fullWidth
                                        className={classes.gridmb}
                                        >
                                            PayPal
                                        </Button>
                                        <Button
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        >
                                           credit card
                                     </Button> */}
                                     
                                       <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        fullWidth
                                        
                                       >
                                       mark as delivered
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

export default Order;