const link = "http://localhost:8000/categories"

var category = {
    get_all: () => {
        return fetch(link)
    },
}

export default category