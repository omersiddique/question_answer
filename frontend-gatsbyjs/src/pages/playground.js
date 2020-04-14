import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     ...theme.typography.button,
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(1),
//   },
// }));

export default function TypographyTheme() {
 // const classes = useStyles();

  return <Typography component="h1">This is a heading</Typography>;
}
