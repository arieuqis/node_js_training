import bodyParser from "body-parser"
import personsRouter from "./personsRoute.js"

const routes = app => {
    app.use(bodyParser.json(),
        personsRouter
    )

}

export default routes