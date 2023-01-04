import React from 'react'
import useStyles from '../../theme/useStyles'
import { Avatar, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import ImageUploader from 'react-images-upload'



const EditProduct = () => {

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
                            value="dls sd"
                        />
                        <TextField
                            label="Price"
                            variant="outlined"
                            fullWidth
                            className={classes.gridmb}
                            inputLabelProps={{
                                shrink: true
                            }}
                            value={9.1}
                        />
                        <TextField
                            label="Brand"
                            variant="outlined"
                            fullWidth
                            className={classes.gridmb}
                            inputLabelProps={{
                                shrink: true
                            }}
                            value="CNS"
                        />
                        <TextField
                            label="Stock"
                            variant="outlined"
                            fullWidth
                            className={classes.gridmb}
                            inputLabelProps={{
                                shrink: true
                            }}
                            value={100}
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
                            value= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis"
                        />
                            
                     <Grid container spacing={2}>
                          <Grid item sm={6} xs={12}>
                                <ImageUploader
                                    withIcon={true}
                                    buttonText="Search Image"
                                    imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
                                    maxFileSize={5242880}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <Avatar 
                                variant="square"
                                className={classes.avatarProducto}
                                src=""
                                />
                            </Grid>
                        </Grid>
                        <Button
                        variant="contained"
                        color="primary"
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