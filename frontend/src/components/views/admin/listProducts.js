import React, { useEffect, useState } from 'react'
import { Button, Container, Grid, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, makeStyles } from '@material-ui/core'
import { productArray } from '../../data/dataProf';
import { getProducts } from '../../../actions/ProductAction';
import { Pagination } from '@material-ui/lab';

const Styles = makeStyles({
    containermt: {
        marginTop: 30
    },
    card: {
        padding: 30
    },
    avatar: {
        backgroundColor: '#0f80aa',
        width: 80,
        height: 80,
    },
    icon: {
        fontSize: 60
    },
    form: {
        marginTop: 40,
        marginBottom: 10
    },
    gridmb: {
        marginBottom: 20
    },
    link: {
        marginTop: 8,
        fontSize: "1.1rem",
        fontFamily: "Roboto",
        lineHeight: 1.5,
        textDecoration: "none"
    },
    appBar: {
        paddingTop: 8,
        paddingBottom: 8
    },

    linkAppBarLogo: {
        display: "inline-flex",
        alignItems: "center",
        color: "inherit",
        textDecoration: "none"
    },
    mr: {
        marginRight: 3
    },
    buttonIcon: {
        fontSize: 14,
        padding: 0
    },
    linkAppBarDesktop: {
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 16px",
        color: "inherit",
        textDecoration: "none"
    },
    list: {
        width: 250
    },
    listItem: {
        padding: 0,

    },
    linkAppBarMobile: {
        display: "inline-flex",
        alignItems: "center",
        width: "120px",
        height: "15px",
        padding: "8px 16px",
        color: "inherit",
        textDecoration: "none",

    },
    listItemIcon: {
        minWidth: 35,
        zIndex: 99999999
    },
    sectionDesktop: {
        display: "none",

    },
    sectionMobile: {
        display: "flex",
        flexGrow: 1,

    },
    text_title: {
        fontWeight: 600,
        color: "#494949",
        marginBottom: 10
    },
    media: {
        height: 250,
        backgroundColor: "#F2F2F2",
        margin: "15px 15px 0 15px"
    },
    price: {
        float: "right",
        padding: "0 20px 0 20px",
        backgroundColor: "#0f80aa"
    },
    text_card: {
        fontWeight: "bold",
        color: "#656565",
        marginBottom: 8
    },
    PaperImg: {
        backgroundColor: "#F2F2F2"
    },
    mediaDetalle: {
        width: 380,
        height: 380,
        margin: "auto"
    },
    text_detalle: {
        fontWeight: 500,
        color: "#494949",
        marginBottom: 5
    },
    imgProductoCC: {
        backgroundColor: "#F2F2F2",
        width: 80,
        height: 70
    },
    papperPadding: {
        padding: 20
    },
    gridPC: {
        margin: "auto",
        marginTop: 20
    },
    buttonAnterior: {
        marginRight: 8
    },
    formControl: {
        margin: 12
    },
    gridLR: {
        paddingLeft: 30,
        paddingBottom: 20,
        paddingRight: 30
    },
    divider: {
        marginTop: 12,
        marginBottom: 12
    },
    imgProductoPC: {
        backgroundColor: "#F2F2F2",
        width: 50,
        height: 40
    },
    text_envio: {
        lineHeight: 3
    },
    alertNotDelivered: {
        marginTop: 5,
        padding: "15px 15px 5px 15px",
        marginBottom: 20,
        backgroundColor: "#ffcccc"
    },
    alertDelivered: {
        marginTop: 5,
        padding: "15px 15px 5px 15px",
        marginBottom: 20,
        backgroundColor: "#d6f5d6"
    },
    imageUploader: {
        padding: 0,
        margin: "-25px auto 15px",
        width: 0
    },
    avatarPerfil: {
        width: 130,
        height: 130,
        backgroundColor: "#0f80aa"
    },
    table: {
        border: "1px solid #e0e0e0"
    },
    iconDelivered: {
        color: "green",
        fontWeight: 900
    },
    iconNotDelivered: {
        color: "red",
        fontWeight: 900
    },

    iconDelivered: {
        color: "green",
        fontWeight: 900
    },
    avatarPefil: {
        width: 130,
        height: 130,
        backgroundColor: "#0f80aa"
    },
    imageUploader: {
        padding: 0,
        margin: "-25px auto 15px",
        width: 0
    },
    /* ------ */
    linkMenu: {
        display: "inline-flex",
        alignItems: "center",
        color: "inherit",
        textDecoration: "none",
        padding: "6px 15px 6px 0",

    },
    mrIcon: {
        marginRight: 10
    },
    avatarPerfilAppBar: {
        marginRight: 8,
        backgroundColor: "#F2F2F2"
    },

    listSubItem: {
        padding: "0 0 0 30px"
    },

    checkbox: {
        display: "block",
        padding: 0,
        marginTop: 5,
        marginBottom: 5
    },

    buttonAdd: {
        float: "right"
    },

    avatarProducto: {
        width: 175,
        height: 175,
        backgroundColor: "#F2F2F2"
    },

    buttons: {
        width: "100%",
        display: "inherit",
        alignItems: "inherit",
        justifycontent: "inherit",
        border: "1px solid #2f2f2f",
        background: "#2f2f2f",
        color: "#f27b9b",
        padding: "6px 85px",
        fontSize: "0.875rem",
        minWidth: "64px",
        boxSizing: "border-box",
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        fontFamily: "Roboto",
        fontWeight: 500,
        lineHeight: 1.75,
        borderRadius: "4px",
        letterSpacing: "0.02857em",
        textTransform: "uppercase",
        textDecoration: "none",
    },
    buttonss: {

        display: "inherit",
        alignItems: "inherit",
        justifycontent: "inherit",
        border: "1px solid #2f2f2f",
        background: "#2f2f2f",
        '&:hover': {
            transition: "0.5s",
            background: "#2f2f2f",
            color: "#f27b9b",
        },
        color: "#f27b9b",
        padding: "6px 20px",
        fontSize: "0.875rem",
        minWidth: "64px",
        boxSizing: "border-box",
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        fontFamily: "Roboto",
        fontWeight: 500,
        lineHeight: 1.75,
        borderRadius: "4px",
        letterSpacing: "0.02857em",
        textTransform: "uppercase",
        textDecoration: "none",

    }
    ,
    gridts: {
        display: "flex",
        justifyContent: "space-between"
    },
    mrs: {

        display: "inherit",
        alignItems: "inherit",
        justifycontent: "inherit",
        border: "1px solid #2f2f2f",
        background: "#2f2f2f",
        '&:hover': {
            transition: "0.5s",
            background: "#2f2f2f",
            color: "#f27b9b",
        },
        color: "#f27b9b",
        padding: "6px 15px",
        fontSize: "0.875rem",
        minWidth: "64px",
        boxSizing: "border-box",
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        fontFamily: "Roboto",
        fontWeight: 500,
        lineHeight: 1.75,
        borderRadius: "4px",
        letterSpacing: "0.02857em",
        textTransform: "uppercase",
        textDecoration: "none",

    }
    ,
    perfilAjus: {
        display: "flex",
        justifyContent: "space-between",

    }
})





const ListProducts = (props) => {
 
    
    const [requestProducts, setRequestProducts] = useState({
        pageIndex: 1,
        pageSize: 7,
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


    const classes = Styles();

    const addProduct = () => {
        props.history.push("/admin/addproducts");
    }

    const editProduct = (id) => {
        props.history.push("/admin/editproducts/" + id);
    }


  


    return (
        <Container className={classes.containermt}>
            <Grid container>
                <Grid item lg={6} sm={6} xs={12}>
                    <Typography variant="h4" className={classes.text_title}>
                        Products
                    </Typography>
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                    <Button
                        variant="contained"
                        color="inherit"
                        className={classes.buttonAdd}
                        onClick={addProduct}
                    >
                        <Icon>add</Icon>
                        Add Product
                    </Button>
                </Grid>
            </Grid>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>NAME</TableCell>
                            <TableCell>PRICE</TableCell>
                            <TableCell>BRAND</TableCell>
                            <TableCell>PRICE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pagProducts.data.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.brandName}</TableCell>
                                <TableCell>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => editProduct(product.id)}
                                    >
                                        <Icon>edit</Icon>
                                    </Button>
                                    <Button
                                    variant="contained"
                                    
                                    >
                                        <Icon>delete</Icon>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>


                </Table>
            </TableContainer>
             <Pagination count={Math.ceil(pagProducts.count / 7)} onChange={handleChange}>
               {console.log(pagProducts.count)}
             </Pagination>
             
        </Container>
    )
}

export default ListProducts