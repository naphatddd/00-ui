import React, { useState, useEffect } from 'react'
import { Typography, Grid } from '@material-ui/core'
import CategroyList from './CategoryList'
import ProductItem from './ProductItem'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}))
function ProductList() {
  const classes = useStyles()
  const [products, setProducts] = useState([])
  useEffect(() => {
    const loadProduct = async () => {
      const { data } = await axios.get(
        'https://react-api-six.vercel.app/products'
      )
      setProducts(data)
    }
    loadProduct()
  }, [])

  return (
    <>
      <Typography variant="h2" component="h1" className={classes.root}>
        All Products
      </Typography>
      <CategroyList />
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductItem key={products.id} {...product}></ProductItem>
        ))}
      </Grid>
    </>
  )
}

export default ProductList
