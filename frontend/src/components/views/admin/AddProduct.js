import React, { useState } from 'react'
import useStyles from '../../theme/useStyles'
import { Avatar, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import ImageUploader from 'react-images-upload'
import { registerProduct } from '../../../actions/ProductAction';
import {v4 as uuidv4} from 'uuid';


const AddProduct = () => {

    const [product, setProduct] = useState({
       
        id: 0,
        name: '',
        description: '',
        stock: 0,
        brandId: '',
        categoryId: 0,
        price: 0,
        image: '',
        file: ''


    });
   const [category, setCategory] = useState("");
   const [brand, setBrand] = useState("");


 

   const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  }

 const saveProduct = async () => {

    product.categoryId = category;
    product.brandId = brand;
    const result = await registerProduct(product)
    console.log('result in save', result);
 }


 const handleChange = (e) => {
    const {name, value} = e.target;
    setProduct( prev => ({
        ...prev,
        [name]: value
    }))
 }

 const upImage = image => {
     const photo = image[0];
     setProduct( prev => ({
        ...prev,
        file: photo
    }))
 }


    const classes = useStyles();


   const keyImage = uuidv4();

    return (
        <Container className={classes.containermt}>
            <Grid container justifyContent="center">
                <Grid item sm={6} xs={12}>
                    <Typography variant="h4" className={classes.text_title}>
                        ADD PRODUCT
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
                            name="name"
                            value={product.name}
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
                            name="price"
                            value={product.price}
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
                            name="stock"
                            value={product.stock}
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
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                        />


                        <FormControl className={classes.formControl}>
                            <InputLabel id="brand-select-label">Brand</InputLabel>
                            <Select
                                labelId='brand-select-label'
                                id="brand-select"
                                value={brand}
                                onChange={handleBrandChange}
                            >
                                <MenuItem value={1}>CNS</MenuItem>

                            </Select>

                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel id="category-select-label">Category</InputLabel>
                            <Select
                                labelId='category-select-label'
                                id="category-select"
                                value={category}
                                onChange={handleCategoryChange}
                            >
                                <MenuItem value={1}>Spring</MenuItem>

                            </Select>

                        </FormControl>


                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <ImageUploader
                                    withIcon={true}
                                    singleImage={true}
                                    key={keyImage}
                                    buttonText="Search Image"
                                    imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
                                    maxFileSize={5242880}
                                    onChange={upImage}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Avatar
                                    variant="square"
                                    className={classes.avatarProducto}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={saveProduct}
                        >
                            ADD PRODUCT
                        </Button>
                    </form>
                </Grid>

            </Grid>

        </Container>
    )
}

export default AddProduct