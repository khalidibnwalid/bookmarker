package main

import (
	"dario.cat/mergo"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Bookmarks struct {
	gorm.Model
	Id    uint `gorm:"primaryKey"`
	Url   string
	Title string
}

func dbConnect(db *gorm.DB) error {
	database, err := gorm.Open(sqlite.Open("data.db"), &gorm.Config{})
	if err != nil {
		return err
	}
	*db = *database
	return nil
}

// Migrate the schema
func dbMigrate(db *gorm.DB) {
	db.AutoMigrate(&Bookmarks{})
}

func (a *App) WailsDbCreateBookmark(bookmark Bookmarks) Bookmarks {
	db.Create(&bookmark)
	return bookmark
}

func (a *App) WailsDbGetBookmark(rules Bookmarks) []Bookmarks {
	var bookmarks []Bookmarks
	db.Where(&rules).First(&bookmarks)
	return bookmarks
}

func (a *App) WailsDbGetAllBookmarks() []Bookmarks {
	var bookmarks []Bookmarks
	db.Find(&bookmarks)
	return bookmarks
}

func (a *App) WailsDbUpdateBookmark(changes Bookmarks) Bookmarks {
	original := Bookmarks{Id: changes.Id}
	db.Find(&original)

	changes.CreatedAt = original.CreatedAt
	if err := mergo.Merge(&original, changes, mergo.WithOverride); err != nil {
		return Bookmarks{}
	}
	db.Save(&original)
	return original
}

func (a *App) WailsDbDeleteBookmark(id uint, perm bool) Bookmarks {
	result := Bookmarks{Id: id}
	db.First(&result)

	if perm {
		db.Unscoped().Delete(Bookmarks{Id: id})
	} else {
		db.Delete(Bookmarks{Id: id})
	}

	return result
}
