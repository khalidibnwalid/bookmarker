interface Bookmark {
    ID?: number // provided but not used
    Id: number // real ID
    Title: string
    Url: string
    UpdatedAt?: string
    CreatedAt?: string
    DeletedAt?: string | null
}