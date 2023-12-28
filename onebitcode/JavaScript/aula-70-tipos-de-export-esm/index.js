import { inline as i } from "./inline.js"
import defaultInline from "./inline.js"
import { group } from "./non-inline.js"
import exportDefault from "./non-inline.js"
// import exportDefault, {group} from "./non-inline.js"

i()
defaultInline()

group()
exportDefault()