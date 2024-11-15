import { WailsDbCreateBookmark, WailsDbDeleteBookmark, WailsDbGetAllBookmarks, WailsDbGetBookmark, WailsDbUpdateBookmark } from "@wailsjs/go/main/App";
import { main } from "@wailsjs/go/models";

const dbBookmarks = {
    get,
    getAll,
    create,
    update,
    delete: $delete,
}

async function get(rulesBookmark: Partial<Bookmark> | number) {
    if (typeof rulesBookmark === 'number') rulesBookmark = { Id: rulesBookmark }
    const result = await WailsDbGetBookmark(new main.Bookmarks(rulesBookmark))
    return result[0] as Bookmark | undefined;
}

async function getAll() {
    return await WailsDbGetAllBookmarks() as Bookmark[]
}

async function create(bookmark: Bookmark) {
    return await WailsDbCreateBookmark(new main.Bookmarks(bookmark)) as Bookmark
}

async function update(changes: Omit<Partial<Bookmark>, 'Id' | 'ID'> & { Id: number }) {
    return await WailsDbUpdateBookmark(new main.Bookmarks(changes)) as Bookmark
}

async function $delete(id: number | string, perm: boolean = false) {
    return await WailsDbDeleteBookmark(Number(id), perm)
}

export default dbBookmarks;