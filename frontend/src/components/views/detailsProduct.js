import { Button, CardMedia, Container, Grid, MenuItem, Paper, Tab, Table, TableCell, TableContainer, TableRow, TextField, Typography } from "@material-ui/core"
import { makeStyles, mergeClasses } from "@material-ui/styles";

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
 
    const addCart = () => {
        props.history.push("/cart")
    }

    const classes = useStyles();
    return (
        <Container className={classes.containermet}>
            <Typography variant="h4" className={classes.text_title}>
                ASDASDASDADAS
            </Typography>
            <Grid container spacing={4}>
            <Grid item lg={8} md={8} xs={12}>
                    <Paper variant="outlined" square className={classes.paper}>
                         <CardMedia 
                         className={classes.mediaDetails}
                          image=""
                          title="Product"
                         
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
                                     <Typography variant="subtitletwo">$25.99</Typography>
                                </TableCell>
                                 
                            </TableRow> 
                            <TableRow>
                            <TableCell>
                                <Typography variant="subtitletwo">Amount</Typography>
                            </TableCell>
                                  
                           
                            
                                <TableCell>
                                     <TextField
                                     size="small"
                                     select
                                     variant="outlined"
                                     
                                     >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>

                                     </TextField>
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
                                Price: $30.99
                            </Typography>
                            <Typography>
                               Amount in stock: 20
                            </Typography>
                            <Typography>
                                Brand: CNS
                            </Typography>
                            <Typography>
                               Season: Spring
                            </Typography>
                            <Typography>
                                <h3>Description</h3>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur blanditiis id sed magni iste non et? Labore soluta impedit excepturi facilis maiores aliquam quas asperiores, fugit qui quod sunt nisi.
                            </Typography>
                        </Grid>
                     </Grid>
                </Grid>
            </Grid> 
        </Container>
    )
}


export default DetailsProduct;