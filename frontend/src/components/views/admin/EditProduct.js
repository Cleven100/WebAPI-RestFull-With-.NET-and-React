import React, { useEffect, useState } from 'react'
import useStyles from '../../theme/useStyles'
import { Avatar, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import ImageUploader from 'react-images-upload'
import { getProduct, updateProduct } from '../../../actions/ProductAction';
import {v4 as uuidv4} from 'uuid'



const EditProduct = (props) => {

    const [product, setProduct] = useState({
        id: 0,
        name: '',
        description: '',
        stock: 0,
        brandId: 0,
        categoryId: 0,
        price: 0.0,
        image: '',
        file: "",
        imageTime: null
    });

    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handleBrandChange = (e) => {
        setCategory(e.target.value);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setProduct((prev) => ({
            ...prev,
            [name] : value
        }))

    }

  const submitImage = (image) => {
     let foto = image[0];
 
     let fotoUrl = "";

     try {
        fotoUrl = URL.createObjectURL(foto);
     } catch (e) {
        console.log(e)
     }

     setProduct((prev) => ({
        ...prev,
        file : foto,
        imageTime: fotoUrl
    }))
  }


 useEffect(() => {
     const id = props.match.params.id;
     const getProductAsync = async() => {
       const response = await getProduct(id)
       setProduct(response.data);
       setCategory(response.data.categoryId);
       setBrand(response.data.brandId);
     }

     getProductAsync();
 }, [])


const saveProduct = async() => {
    product.categoryId = category;
    product.brandId = brand;
 
    const id = props.match.params.id;
    const result = await updateProduct(id, product);
    console.log(result)
    props.history.push("/admin/listproducts")
}


 const keyImage = uuidv4();


    const classes = useStyles();

  return (
    <Container className={classes.containermt}>
        <Grid container justifyContent="center">
            <Grid item sm={6} xs={12}>
                <Typography variant="h4" className={classes.text_title}>
                    Edit Product
                </Typography>
                <form onSubmit={(e) => e.preventDefault} className={classes.form}>
                        <TextField
                            label="Name Product"
                            variant="outlined"
                            fullWidth
                            className={classes.gridmb}
                            inputLabelProps={{
                                shrink: true
                            }}
                            value={product.name}
                            name="name"
                            onChange={handleChange}
                        />
                        <TextField
                            label="Price"
                            variant="outlined"
                            fullWidth
                            className={classes.gridmb}
                            inputLabelProps={{
                                shrink: true
                            }}
                            value={product.price}
                            name="price"
                            onChange={handleChange}
                        />
                       
                        <TextField
                            label="Stock"
                            variant="outlined"
                            fullWidth
                            className={classes.gridmb}
                            inputLabelProps={{
                                shrink: true
                            }}
                            value={product.stock}
                            name="stock"
                            onChange={handleChange}
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            className={classes.gridmb}
                            inputLabelProps={{
                                shrink: true
                            }}
                            value={product.description}
                            name="description"
                            onChange={handleChange}
                        />

<FormControl className={classes.formControl}>
                            <InputLabel id="brand-select-label">Brand</InputLabel>
                            <Select 
                             labelId="brand-select-label"
                             id="brand-select"
                             value={brand}
                             onChange={handleBrandChange}

                            >
                                     <MenuItem  value={1} >Nike</MenuItem>
                                     <MenuItem  value={2} >CNS</MenuItem>
                                     <MenuItem  value={3} >Adidas</MenuItem>
                                     
                            </Select>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel id="category-select-label">Category</InputLabel>
                            <Select 
                             labelId="category-select-label"
                             id="category-select"
                             value={brand}
                             onChange={handleCategoryChange}

                            >
                                     <MenuItem  value={1} >String</MenuItem>
                                     <MenuItem  value={2} >Undefined</MenuItem>
                                     
                                     
                            </Select>
                        </FormControl>
                            
                     <Grid container spacing={2}>
                          <Grid item sm={6} xs={12}>
                                <ImageUploader
                                    singleImage={true}
                                    key={keyImage}
                                    withIcon={true}
                                    buttonText="Search Image"
                                    imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
                                    maxFileSize={5242880}
                                    onChange={submitImage}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Avatar 
                                variant="square"
                                className={classes.avatarProduct}
                                src={product.image}
                                />
                            </Grid>
                        </Grid>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={saveProduct}
                        >
                            Update                        
                        </Button>
                   </form>
            </Grid>
        </Grid>
    </Container>
  )
}

export default EditProduct