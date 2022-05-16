import Layout from '../components/templates/layouts/layout'
import { Pages } from '../constants/pages'

export default function PageNotFound() {
    const errorMessage =
        "Oops! Page doesn't exist. Did you enter the correct url?"
    return <Layout page={Pages.NONE} title={errorMessage} />
}
