export const fetchCategory = async() => {
  return (
   await  fetch("https://jsonmockserver.vercel.app/api/shopping/furniture/categories")
    .then(response => {
        return response.json()
    })
    .then(data => {
        return data
    })
  )
}

export const fetchProduct = async(categories) => {
   const response= await fetch(`https://jsonmockserver.vercel.app/api/shopping/furniture/products?category=${categories} `)
    return await response.json()
};
