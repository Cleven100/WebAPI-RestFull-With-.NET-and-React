import { Button, CardMedia, Container, Grid, MenuItem, Paper, Tab, Table, TableCell, TableContainer, TableRow, TextField, Typography } from "@material-ui/core"
import { makeStyles, mergeClasses } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { getProduct } from "../../actions/ProductAction";


import { addItem } from "../../actions/CartAction";
import { useStateValue } from "../../context/store";

const useStyles = makeStyles({
    containermet: {
        marginTop: 70
       
      },
      card: {
       padding: 60,
      
      },
      avatar: {
       backgroundColor: '#d3d3d3',
       color: "#000",
        width: 80,
        height: 80
      },
      icon: {
       fontSize: 60
      },
      enter: {
       backgroundColor: '#94b447'
      },
      button: {
        background: '#d3d3d3',
        
        
       },
      input: {
       background: '#d3d3d3',
       borderRadius: 5,
        
      },
      link: {
        color: '#000',
        padding: 20
      },
      typography: {
       color: '#000',
       padding: 10
      },
      form : {
       marginTop: 40,
       marginBotoom: 10
      },
      gridmb: {
        marginBotoom: 20
      },
      links: {
        width: "100%",
        display: "inherit",
        alignItems: "inherit",
        justifycontent: "inherit",
      color: "rgba(0, 0, 0, 0.87)",
      padding: "6px 16px",
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
      mediaDetails: {
        width: 380,
        height: 380,
        margin: "auto",
        backgroundColor: "#FFF" ,
        

      },
      buttons : {
        width: "100%",
        display: "inherit",
        alignItems: "inherit",
        justifycontent: "inherit",
       border: "1px solid #2f2f2f",
       background: "#2f2f2f",
       color: "#f27b9b",
       '&:hover': {
        transition: "0.3s",
        background: "#2f2f2f",
        color: "#f27b9b",
      },
      padding: "6px 125px",
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
           
})


const DetailsProduct = (props) => {


    const [{sessionCart}, dispatch] = useStateValue();

    const [quantity, setQuantity] = useState(1);


    const [productSelect, setProductSelect] = useState({
        id: 0,
        name: "",
        descripton: "",
        amount: 0,
        brandId: 0,
        brandName: "",
        categoryId: 0,
        categoryName:"",
        price: 0.0,
        image: ""
    });




    

    useEffect(() =>{
        const id = props.match.params.id;
        const getProductAsync = async () => {
            const response = await getProduct(id);
            setProductSelect(response.data);
        }
        getProductAsync();
    }, [productSelect])
 
    const addCart = async () => {

        const item = {
            id: productSelect.id,
            product: productSelect.name,
            price: productSelect.price,
            quantity: quantity,
            image: productSelect.image,
            brand: productSelect.brandName,
            category: productSelect.categoryId
        }

        await addItem(sessionCart, item, dispatch)



        props.history.push("/cart")
    }

    const classes = useStyles();
    return (
        <Container className={classes.containermet}>
            <Typography variant="h4" className={classes.text_title}>
                { productSelect.name }
            </Typography>
            <Grid container spacing={4}>
            <Grid item lg={8} md={8} xs={12}>
                    <Paper variant="outlined" square className={classes.paper}>
                         <CardMedia 
                         className={classes.mediaDetails}
                          image=""
                          title={productSelect.descripton}
                         
                         />

                        
                    </Paper>
                </Grid>
                <Grid item lg={4} md={8} xs={12}>

                     <TableContainer component={Paper} variant="outlined">
                        <Table>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitletwo">Price</Typography>
                            </TableCell>
                                  
                           
                            
                                <TableCell>
                                     <Typography variant="subtitletwo">{productSelect.price}</Typography>
                                </TableCell>
                                 
                            </TableRow> 
                            <TableRow>
                            <TableCell>
                            <Typography variant="subtitletwo">Amount</Typography>
                            </TableCell>
                                  
                           
                            
                                <TableCell>
                                  <TextField
                                   id="quantity-product"
                                   label=""
                                   type="number"
                                   value={quantity}
                                   onChange={event => setQuantity(event.target.value)}
                                   defaultValue={1}
                                   InputLabelProps={{
                                    shrink: true
                                   }}                         
                                  
                                  
                                  
                                  />
                                      
                                 
                                </TableCell>
                                 
                            </TableRow> 
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <Button 
                                    className={classes.buttons}
                                     variant="contained"
                                     size="large"
                                     fullWidth
                                     onClick={addCart}
                                    >
                                        Add to cart
                                    </Button>

                                </TableCell>
                            </TableRow>

                            
                        </Table>
                     </TableContainer>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                     <Grid container spacing={2}>
                        <Grid item md={6}>
                        <Typography>
                                Price: {productSelect.price}
                            </Typography>
                            <Typography>
                               Amount in stock: {productSelect.amount}
                            </Typography>
                            <Typography>
                                Brand: {productSelect.brandName}
                            </Typography>
                            <Typography>
                               Season: {productSelect.categoryName}
                            </Typography>
                            <Typography>
                                <h3>Description</h3>
                                {productSelect.descripton}
                            </Typography>
                        </Grid>
                     </Grid>
                </Grid>
            </Grid> 
        </Container>
    )
}


export default DetailsProduct;