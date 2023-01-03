import { Button, CardMedia, Container, Divider, FormControl, FormControlLabel, FormLabel, 
    Grid, Paper, Radio, RadioGroup, Step, StepLabel, Stepper, Table, TableBody, 
    TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../theme/useStyles';

const Shipping = (props) => {
    const [activeStep, setActiveStep] = useState(1);

    const loopOrder = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    
    const failOrder = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const newOrder = () => {
        const idOrder = "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed";
        props.history.push("/order/"+ idOrder);
    }

    
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Stepper activeStep={activeStep} alternativeLabel>              
                <Step>
                    <StepLabel>Login</StepLabel>
                </Step>

                <Step>
                    <StepLabel>Shipping</StepLabel>
                </Step>
                
                <Step>
                    <StepLabel>Order</StepLabel>
                </Step>

                <Step>
                    <StepLabel>Finish Order</StepLabel>
                </Step>
            </Stepper>
        
            { activeStep === 1 ? (
                <Grid md={6} xs={12} className={classes.gridPC}>
                <Typography variant="h6" className={classes.text_title}>
                Shipping product
                </Typography>
                <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TextField
                            label="Dispatch"
                            fullWidth
                            InputLabelProps={{ 
                                shrink: true, 
                            }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            label="City"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            label="Country"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                            variant="contained"
                            className={classes.buttonss}
                            onClick={loopOrder}
                            >
                                Keep
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                </Grid>
            ) : activeStep === 2 ? (
                <Grid md={3} xs={12} className={classes.gridPC}>
                    <Typography variant="h6" className={classes.text_title}>
                    Payment Method
                    </Typography>
                    <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <FormLabel>
                                        Select Method
                                    </FormLabel>
                                    <RadioGroup>
                                        <FormControlLabel 
                                        value="PayPal" 
                                        control={<Radio color="secundary"/>}
                                        label="PayPal"/> 
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} className={classes.gridts}>

                                <Button
                            variant="contained"
                            className={classes.buttonss}
                            onClick={loopOrder}
                            >
                                Keep
                            </Button>
                            <Button
                            variant="contained"
                            color="primary"
                            className={classes.buttonAnterior}
                            onClick={failOrder}
                            >
                                fore
                            </Button>
                            
                            </Grid>
                        </Grid>
                </Grid>
            ) : activeStep === 3 ? (
                <Grid container className={classes.gridPC}>
                    <Grid item md={8} xs={12} className={classes.gridLR}>
                        <Typography variant="h6" className={classes.text_title}>
                            Shipping
                        </Typography>
                        <Typography >
                        Dispatch: EUA, 5° avenue, nova york
                        </Typography>
                        <Divider className={classes.divider}/>
                        <Typography variant="h6" className={classes.text_title}>
                        Payment Method
                        </Typography>
                        <Typography>
                            Method: PayPal
                        </Typography>
                        <Divider className={classes.divider}/>
                        <Typography variant="h6" className={classes.text_title}>
                            Products
                        </Typography>
                        <TableContainer className={classes.gridmb}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                        <CardMedia 
                                        className={classes.imgProductoPC}
                                        image="https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000"
                                        title="Imagen en Carrito"
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
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={failOrder}
                        >
                            Fore
                        </Button>
                    </Grid>

                    <Grid item md={4} xs={12} >
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
                                                tax
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
                                        <TableCell>
                                            <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            onClick={newOrder}>
                                                place order
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            ) : null}
            
        </Container>
    );
};

export default Shipping;