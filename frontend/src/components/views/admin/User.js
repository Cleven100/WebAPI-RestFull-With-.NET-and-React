import React from 'react'
import useStyles from '../../theme/useStyles'
import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';

function User() {
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Typography variant='h4' className={classes.text_title}>
                User
            </Typography>

            <TableContainer>
                <Table>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>USER</TableCell>
                        <TableCell>EMAIL</TableCell>
                        <TableCell>ADMIN</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </Table>
                <TableBody>
                <TableRow>
                        <TableCell>ASDAS-#!#DA-GFDFGDFG-DFGDFG</TableCell>
                        <TableCell>test</TableCell>
                        <TableCell>test@test.com</TableCell>
                        <TableCell>
                            <Icon className={classes.iconDelivered}>
                                check
                            </Icon>
                        </TableCell>
                        <TableCell>
                        <Button
                             variant="contained"
                             color="primary"
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
                    <TableRow>
                        <TableCell>HJHJ65dfg-GSFGSGFSGNF-NLRGLBPRPBR-AWPFKA</TableCell>
                        <TableCell>testtttt</TableCell>
                        <TableCell>testasdasdasdasd@test.com</TableCell>
                        <TableCell>
                            <Icon className={classes.iconNotDelivered}>
                                check
                            </Icon>
                        </TableCell>
                        <TableCell>
                        <Button
                             variant="contained"
                             color="primary"
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
                </TableBody>
            </TableContainer>

        </Container>
    )
}

export default User