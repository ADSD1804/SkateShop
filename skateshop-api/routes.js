const rutas = [
    {
        method: "POST",
        url: "/usuarios",
        handler: async (req, res) => {
            res.status(200).send({status: 'OK - POST'});
        }
    },
    {
        method: "GET",
        url: "/usuarios",
        handler: async (req, res) => {
            res.status(200).send({status: 'OK - GET'});
        }
    },
    {
        method: "PUT",
        url: "/usuarios/:id",
        handler: async (req, res) => {
            res.status(200).send({status: 'OK - PUT'});
        }
    },
    {
        method: "DELETE",
        url: "/usuarios/:id",
        handler: async (req, res) => {
            res.status(200).send({status: 'OK - DELETE'});
        }
    }
]

export default rutas;