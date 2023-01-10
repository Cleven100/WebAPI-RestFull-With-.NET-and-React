import { Button, CardMedia, Container, Divider, Grid, Icon, IconButton, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { productArray } from '../data/dataProf'


import useStyles from '../theme/useStyles';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/store';


function Cart() {

    const [{sessionCart}, dispatch] = useStateValue();

   console.log('sessionCart', sessionCart);

    const myArray = sessionCart ? sessionCart.item : [];
    let suma = 0;
    myArray.forEach(prod => {
        suma += prod.price
    });

    const classes = useStyles();

    return (
        
        <Container className={classes.containermet}>
            <p style={{visibility: "hidden"}}> L </p>
            <p style={{visibility: "hidden"}}> L </p>
            <Grid container spacing={2}>
                <Grid item lg={9} md={8} sm={12} xs={12}>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {myArray.map(product => (
                                    <TableRow key={product.id}>
                                        <TableCell>
                                            <CardMedia
                                            title="image"
                                            />

                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_details}>
                                                {product.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                        <Typography>
                                                $ {product.price}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                        <Typography>
                                                
                                            </Typography>
                                            
                                        </TableCell><TableCell>
                                                <IconButton>
                                                    <Icon>delete</Icon>
                                                </IconButton>
                                            </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                 <Paper variant="outlined" square className={classes.papperPadding}>
                 <Typography variant="h6" className={classes.text_title}>
                        SubTotal: ({myArray.length}) Products
                    </Typography>
                    <Typography className={classes.text_title}>
                        ${Math.round(suma * 100) / 100}
                    </Typography>
                    <Divider  className={classes.gridmb}   />
                    <p style={{visibility: "hidden"}}> L </p>
                    <Link
                     to="/shipping"
                     className={classes.buttons}
                     size="large"
                    
                    >
                      Checkout
                    </Link>

                 </Paper>


                </Grid>

            </Grid>
        </Container>
    )
}

export default Cart