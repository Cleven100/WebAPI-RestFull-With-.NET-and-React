import { Container, Typography, makeStyles, Grid, Card, CardMedia, Avatar, CardContent, Button } from '@material-ui/core'
import React from 'react'
import "./Product.css"
import { productArray } from '../data/dataProf';

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


function Products(props) {


    const viewProduct = (id) => {
     props.history.push("./details/" + id);
    }

    const classes = useStyles();
    const myArray = productArray;

    return (

        <>
            <Container>

                <Grid container spacing={12}>
                
                    { myArray.map(data => (
 
                   
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
                            

                            <div variant="h6" className='name'>{data.title}</div>
                                <Button className={classes.button}
                                 onClick={() => viewProduct(data.key)}
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
            </Container>




        </>

    )
}

export default Products