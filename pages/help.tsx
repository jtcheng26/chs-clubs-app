import Layout from '../components/templates/layouts/layout'
import { Pages } from '../constants/pages'

export default function Help() {
    return (
        <Layout page={Pages.HELP} title="Help">
            <div>
                Click on the cards to view more information about a club. Click
                on the colored buttons to filter by a specific category or use
                the search bar to search for a club.
            </div>
        </Layout>
    )
}
