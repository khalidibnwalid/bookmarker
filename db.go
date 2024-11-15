package main

import (
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