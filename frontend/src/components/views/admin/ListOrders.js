import React, { useEffect, useState } from 'react'
import useStyles from '../../theme/useStyles'
import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { getProducts } from '../../../actions/ProductAction';

const ListOrders = (props) => {



    const [requestProducts, setRequestProducts] = useState({
        pageIndex: 1,
        pageSize: 4,
        search: ''
    });

    const [pagProducts, setPagProducts] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        data: []
    });

    const handleChange = (event, value) => {
        setRequestProducts((prev) => ({
            ...prev,
            pageIndex: value
        }))
    }

    useEffect(() => {
  
        const getListProducts = async () => {
           const response = await getProducts(requestProducts);
           setPagProducts(response.data)
        }

        getListProducts();

    }, [requestProducts])



    const classes = useStyles();

 

    const viewDetails = () => {
             const id = "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed";
             props.history.push("/order/" + id);
    }

    return (
        <Container className={classes.containermt}>
            <Typography variant='h4' className={classes.text_title}>
                Orders
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                    <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USER</TableCell>
                            <TableCell>CLOSE</TableCell>
                            <TableCell>TOTAL</TableCell>
                            <TableCell>PAID</TableCell>
                            <TableCell>SHIPPING</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                    <TableRow>
                            <TableCell></TableCell>
                            <TableCell>JHO</TableCell>
                            <TableCell>2021-12-22</TableCell>
                            <TableCell>$60.00</TableCell>
                            <TableCell>2021-12-25</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivered}>
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button
                                 variant="contained"
                                 color="primary"
                                 onClick={viewDetails}
                                >
                                    DETAILS
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListOrders