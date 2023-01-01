import { Button, Card, Container, Grid, MenuItem, TableContainer, TextField, Typography, makeStyles, Paper, Table, TableHead, TableRow, TableCell, TableBody, Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { addBook, listBooks } from '../data/books';

const theme = createMuiTheme();

const clearBook = {
    category: '',
    title: '',
    autor: ''
}


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
    buttons: {
        background: '#d3d3d3',

        marginRight: "10px"

    },
    buttonss: {




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
    form: {
        marginTop: 40,
        marginBotoom: 10
    },
    gridmb: {
        marginBottom: "20px"
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
    }

})


const Book = () => {
    const classes = useStyles();

    const [book, setBook] = useState({
        category: '',
        title: '',
        autor: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prev => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const saveData = () => {
        addBook(book);
        setBook(clearBook);
    }

     const [booksArray, setBooksArray] = useState([])

    const listDataBook = () => {
        const data = listBooks();
        setBooksArray(data);
    }
 
    useEffect(() => {
         listDataBook();
    }, [booksArray.length])


    const openDialog = () => {
        setOpen(true)
        console.log("My button edit");
    }

    const removeData = () => {
        console.log("button deleted")
    }

    const [bookEdit, setBookEdit] = useState({
        categoryE: '',
        titleE: '',
        autorE: ''
    })


    const handleChangeEdit = (e) => {
        const { name, value } = e.target;
        setBookEdit(prev => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const editData = () => {
        console.log("button edit data");
        closeDialog();
    }

    const  [open, setOpen] = useState(false);

    const closeDialog = () => {
        setOpen(false);
        
    }

    return (
        <div>


            <p style={{ visibility: "hidden" }}> P </p>
            <p style={{ visibility: "hidden" }}> P </p>
            <Container className={classes.container}>
                <Grid container justify="center">
                    <Grid item lg={7} md={8}>
                        <Card className={classes.card} align="center">
                            <Typography variant="h4">Books</Typography>
                            <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                                <Grid container spacing={2}>
                                    <Grid item md={12} xs={12} className={classes.gridmb}>
                                        <TextField
                                            select
                                            label="Category"
                                            variant="outlined"
                                            fullWidth
                                            align="left"
                                            name="category"
                                            value={book.category}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="Program">Program</MenuItem>
                                            <MenuItem value="IA">IA</MenuItem>
                                            <MenuItem value="SoftwareEng">Software Engineer</MenuItem>

                                        </TextField>
                                    </Grid>
                                    <Grid item md={6} xs={12} className={classes.gridmb}>
                                        <TextField
                                            label="Title"
                                            variant="outlined"
                                            fullWidth
                                            name="title"
                                            value={book.title}
                                            onChange={handleChange}
                                        />

                                    </Grid>

                                    <Grid item md={6} xs={12} className={classes.gridmb}>
                                        <TextField
                                            label="Autor"
                                            variant="outlined"
                                            fullWidth
                                            name="autor"
                                            value={book.autor}
                                            onChange={handleChange}
                                        />

                                    </Grid>


                                    <Grid item md={12} xs={12} className={classes.gridmb}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            className='button'
                                            type="submit"
                                            onClick={saveData}
                                        >
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Card>
                    </Grid>
                </Grid>
                <p style={{ visibility: "hidden" }}> P </p>


                <TableContainer component={Paper} className={classes.container}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell>Title</TableCell>

                                <TableCell>Autor</TableCell>

                                <TableCell align="center" colSpan={2}>Actions</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Developement</TableCell>
                                <TableCell>React advanced</TableCell>
                                <TableCell>React advanced</TableCell>
                                <TableCell><p style={{ visibility: "hidden" }}> P </p></TableCell>

                                <TableCell>
                                    <Button
                                        variant="contained"
                                        className={classes.buttons}
                                        onClick={openDialog}
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.buttonss}
                                        onClick={removeData}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>


                </TableContainer>

                <Dialog open={open} onClose={closeDialog} maxWidth="xs"
                    fullWidth align="center"
                >
                    <DialogTitle>
                        Edit book
                    </DialogTitle>
                    <DialogContent>
                        <form onSubmit={(e) => e.preventDefault}>
                            <TextField
                                select
                                label="Category"
                                variant="outlined"
                                fullWidth
                                align="left"
                                className={classes.gridmb}
                                name="categoryE"
                                value={bookEdit.categoryE}
                                onChange={handleChangeEdit}
                            >
                                <MenuItem value="Program">Program</MenuItem>
                                <MenuItem value="IA">IA</MenuItem>
                                <MenuItem value="SoftwareEng">Software Engineer</MenuItem>

                            </TextField>
                            
                            <TextField
                                label="Title"
                                variant="outlined"
                                fullWidth
                                name="titleE"
                                value={bookEdit.titleE}
                                className={classes.gridmb}
                                onChange={handleChangeEdit}
                            />
                            
                            <TextField
                                label="Autor"
                                variant="outlined"
                                fullWidth
                                name="autorE"
                                className={classes.gridmb}
                                value={bookEdit.autorE}
                                onChange={handleChangeEdit}
                            />
                            
                            <Button
                                variant="contained"
                                fullWidth
                                className='button'
                                
                                
                                onClick={saveData}
                            >
                                Save
                            </Button>
                            <p style={{ visibility: "hidden" }}> P </p>
                            
                        </form>
                    </DialogContent>

                </Dialog>

            </Container>
        </div>
    )
}

export default Book