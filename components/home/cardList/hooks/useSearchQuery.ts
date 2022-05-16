import { OrgWithAll } from '../../../../pages'

/* Return orgs that match the search query. */
export default function useSearchQuery(
    orgs: OrgWithAll[],
    query: string
): OrgWithAll[] {
    return orgs
}
