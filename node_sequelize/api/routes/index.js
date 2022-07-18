import bodyParser from "body-parser"
import personsRouter from "./personsRoute.js"
import classRouter from "./classRoute.js"
import levelsRouter from "./levelsRoute.js"

const routes = app => {
    app.use(bodyParser.json(),
        personsRouter,
        classRouter,
        levelsRouter
    )

}

export default routes