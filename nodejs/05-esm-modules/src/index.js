// import connectToDatabase from './utils/database.js'

//connectToDatabase("my-database")

//import * as database from './utils/database.js'

//database.connectToDatabase("my-database")

import {disconnectDatabase, connectToDatabase} from "./utils/database.js"

disconnectDatabase()
connectToDatabase()