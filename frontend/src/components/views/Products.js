import { Container, Typography, makeStyles, Grid, Card, CardMedia, Avatar, CardContent, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./Product.css"
import { productArray } from '../data/dataProf';
import { getProducts } from '../../actions/ProductAction';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles({
    button: {
        background: '#d3d3d3',
        "&:hover": {
            background: '#f27b9b'
        },
        marginRight: "10px",
        marginLeft: "50px",



    },
    buttons: {
        background: '#9acd32',
        "&:hover": {
            background: '#9acd32'
        },
        marginRight: "10px",


    }
})


const Products = (props) => {

    const [requestProducts, setRequestProducts] = useState({
        pageIndex: 1,
        pageSize: 3,
        search: ''
    })



   const [pagProduct, setPagProduct] = useState({
     count: 0,
     pageIndex: 0,
     pageSize: 0,
     pageCount: 0,
     data: []
   });

   const handleChange = (event, value) => {
      setRequestProducts( (prev) => ({
        ...prev,
        pageIndex: value
      }));
   }


   useEffect(() => {
     const getListProducts = async () => {
       const response = await getProducts(requestProducts);
       console.log(response)
       setPagProduct(response.data)
     }
     getListProducts();

    },[requestProducts])



    const viewProduct = (id) => {
     props.history.push("./details/" + id);
    }

    const classes = useStyles();
    const myArray = productArray;

    if(!pagProduct.data) {
        return null;
    }

    return (

        <>
            <Container>

                <Grid container spacing={12}>
                
                    { pagProduct.data.map(data => (
 
                   
                    <Grid item lg={4} md={6} sm={8} xs={12} key={data.key} >
                        
                        <div className='container'>
                        <Card className='card'>
                      
                         
                         

                            <div className='imgBx'>
                                <div className='imgs'>

                                   
                                    <div className='contentBx'>
                                     <CardMedia className='imgBxsss'
                                            image={data.image}
                                            title="my product"
                                        >

                                        </CardMedia>

                                    </div>



                                </div>



                                
                            </div>
                            

                            <div variant="h6" className='name'>{data.name}</div>
                                <Button className={classes.button}
                                 onClick={() => viewProduct(data.id)}
                                >
                                    Details
                                </Button>
                                <Button className={classes.buttons}>
                                    Buy
                                </Button>
                             <div className='price'>
                                $ {data.price}
                             </div> 









                        </Card>
</div>
                    


                    </Grid> 
                    ))}
                </Grid>
                <Pagination count={pagProduct.pageCount} page={pagProduct.pageIndex} onChange={handleChange} />
            </Container>




        </>

    )
}

export default Products