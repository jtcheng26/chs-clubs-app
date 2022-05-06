import PageHeader from '../components/templates/headers/pageHeader'
import NavBar from '../components/templates/layouts/navbar'
import Page from '../components/templates/layouts/page'
import { Pages } from '../constants/pages'

export default function Help() {
    return (
        <>
            <div className="sticky top-0 left-0 right-0">
                <NavBar currentPage={Pages.HELP} />
            </div>
            <Page>
                <PageHeader>Help</PageHeader>
            </Page>
        </>
    )
}
