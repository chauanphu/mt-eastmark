const link = "http://localhost:8000/products"
const link_related = "http://localhost:8000/related_products"

var Product = {
    /**
     * Get all products
     * @param {number} page 
     * @returns {Promise<{total_count: number, data: Promise<Array>}>} data
     */
    get_all: (page) => {
        return fetch(link + '?_page=' + page + '&_limit=12')
            .then(res => {
                return {
                    total_count: res.headers.get('X-Total-Count'),
                    data: res.json()
                }
            })
    },

    /**
     * Return related products
     * @returns {Promise}
     */
    get_related: () => {
        return fetch(link_related).then(res => { return res.json() })
    },
    /**
     * Return detailed data of a product
     * @param {string} id Id to be searched
     */
    get_by_id: (id) => {
        return fetch(link_related + '/' + id).then(res => { return res.json() })
    }
}

export default Product