import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, findProducts } from '../../State/Product/Action'



const ProductsTable = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(store => store);

  const handleProductDelete=(productId)=>{
    dispatch(deleteProduct(productId))
  }

  console.log("prod", products)
  useEffect(() => {
    const data = {
      category: "mens_shirts",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 1000000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: ""
    }

    dispatch(findProducts(data))
  }, [])



  return (
    <div className='p-5'>

    <Card className='p-5'>
      <CardHeader title="All Products"/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell component="th" scope="row">Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>

              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {products.products && products.products.content &&  */}
            {products?.products?.content?.map((item) => (
              <TableRow
                key={item.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >

                <TableCell align="right">
                  <Avatar src={item.image_url}>

                  </Avatar>
                </TableCell>
                <TableCell component="th" scope="row">{item.title}</TableCell>
                <TableCell align="right">{item.category.name}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>

                <TableCell align="right">
                  <Button onClick={()=>handleProductDelete(item.id)} variant='outlined'>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </Card>



    </div>
  )
}

export default ProductsTable