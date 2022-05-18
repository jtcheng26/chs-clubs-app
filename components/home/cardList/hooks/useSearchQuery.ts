import { OrgWithAll } from '../../../../pages'
import { Search } from 'js-search'

export default function useSearch(
    orgs: OrgWithAll[]
): (query: string) => OrgWithAll[] {
    const searchIndex = new Search('id')
    searchIndex.addIndex('name')
    searchIndex.addIndex('hook')
    searchIndex.addIndex('description')
    searchIndex.addIndex('meetDay')
    searchIndex.addIndex('meetFreq')
    searchIndex.addIndex('meetLocation')
    searchIndex.addIndex('links')
    searchIndex.addIndex(['sponsors', 'name'])
    searchIndex.addIndex(['categories', 'name'])

    searchIndex.addDocuments(orgs)

    function search(query: string): OrgWithAll[] {
        console.log('search')
        if (query) return searchIndex.search(query) as OrgWithAll[]
        else return orgs
    }

    return search
}
