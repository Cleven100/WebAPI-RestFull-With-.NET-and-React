import { Button, CardMedia, Container, Divider, Grid, Icon, IconButton, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { productArray } from '../data/dataProf'


import useStyles from '../theme/useStyles';
import { Link } from 'react-router-dom';


function Cart() {

   

    const myArray = productArray;

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
                                    <TableRow key={product.key}>
                                        <TableCell>
                                            <CardMedia
                                            title="image"
                                            />

                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_details}>
                                                {product.title}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography>
                                                $ {product.price}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                select
                                                variant="outlined"
                                                size="small">

                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={6}>6</MenuItem>

                                            </TextField>
                                            
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
                        $143.46
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